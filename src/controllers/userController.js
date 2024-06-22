const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

exports.login = async (req, res) => {
  try{
    const { username, password } = req.body;
    console.log('Login request received', req.body );

      // Find the user in the database by username
      const result= await Users.findOne({username});
      console.log(result);
      if (!result) {
        // User not found, display error message
        return res.status(400).json({ message:  'User does not exists'});

        // return res.render("login", { errors: "Invalid username or password",user:req.session.user===undefined?"":req.session.user });
      }
     // Comparing the entered password with the hashed one.
     console.log(result.password);
     console.log(password);

      const isPasValid= await bcrypt.compare(password,result.password);
          if (!isPasValid) {

            // Password does not match, display error message
            console.log("error");
            return res.status(400).json({ message: "password not valid" });

            // return res.render("login", { errors: "Invalid username or password",user:req.session.user===undefined?"":req.session.user });
          }

      // req.session.user = result;
      // console.log(req.session.user);

      // Password matches, render the account page with user data
      // return res.render("account", { userP:result});
      return res.redirect('/');
  }
  catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.signup = async (req, res) => {
  try {
    const { signupusername, signupemail, signuppassword } = req.body;
    console.log('Signup request received', req.body );

    // Check if the user already exists
    const existingUsers = await Users.findOne({ signupemail });
    console.log('Existing user check:', existingUsers);

    if (existingUsers) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(signuppassword, 10);
    console.log('Password hashed:', hashedPassword);

    // Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    console.log('OTP generated:', otp);

    // Create a new user
    const newUsers = new Users({
      username:signupusername,
      email:signupemail,
      password: hashedPassword,
      otp, // Save OTP in user document
      otpExpires: Date.now() + 3600000, // OTP expires in 1 hour
    });
    console.log('New user created:', newUsers);
    console.log('Username:', newUsers.username);
    
    // Save the user
    
     await newUsers.save(); 

    // Setup Nodsignupemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.Email_address,
        pass: process.env.App_Gmail,
      },
    });
    console.log('Nodemailer transporter created');

    const mailOptions = {
      from: process.env.EMAIL,
      to: signupemail,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}. It will expire in 1 hour.`,
    };

    // Send signupemail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Signup successful, OTP sent', signupemail }); // Send email back to the client
        }
    });


  
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { signupemail, otp } = req.body;
    console.log('Verify OTP request received', { signupemail, otp });

    // Find the user by signupemail
    const user = await Users.findOne({ email:signupemail });
    console.log('User found:', user);

    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if OTP matches and is not expired
    if (user.otp === otp && user.otpExpires > Date.now()) {
      console.log('OTP is valid');
      // OTP is valid
      user.otp = undefined; // Clear OTP
      user.otpExpires = undefined; // Clear OTP expiration
      await user.save();
      console.log('User updated, OTP cleared');

      res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      console.log('Invalid or expired OTP');
      // OTP is invalid or expired
      res.status(400).json({ message: 'Invalid or expired OTP' });
    }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
exports.addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new Users({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', newUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updatedUser = await Users.findByIdAndUpdate(id, { name, email, password }, { new: true });
    res.status(200).json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 