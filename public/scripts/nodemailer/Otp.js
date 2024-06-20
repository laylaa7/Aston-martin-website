const nodemailer = require('nodemailer');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json());

const User = require('./models/database'); 

const NodeEmail = process.env.Email_address;
const NodePass = process.env.App_gmail;

console.log("Email:", NodeEmail);
console.log("Password Length:", NodePass.length);

function generateOTP(length) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

async function sendOTPEmail(toEmail, otp) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: NodeEmail,
            pass: NodePass
        }
    });

    const html = `<h1>Your OTP Code</h1>
                  <p>Your OTP code is: <strong>${otp}</strong></p>`;

    const info = await transporter.sendMail({
        from: NodeEmail,
        to: toEmail,
        subject: 'Your OTP Code',
        html: html,
    });

    console.log("Message sent: " + info.messageId);
}

app.post('/send-otp', async (req, res) => {
    const { email } = req.body;
    const otp = generateOTP(6);

    try {
        await User.findOneAndUpdate(
            { email: email },
            { otp: otp, verified: false },
            { upsert: true, new: true }
        );

        await sendOTPEmail(email, otp);
        res.status(200).send('OTP sent to your email');
    } catch (error) {
        res.status(500).send('Error sending OTP');
    }
});

app.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).send('User not found');
        }

        if (user.otp === otp) {
            user.verified = true;
            await user.save();
            res.status(200).send('Email verified successfully');
        } else {
            res.status(400).send('Invalid OTP');
        }
    } catch (error) {
        res.status(500).send('Error verifying OTP');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});