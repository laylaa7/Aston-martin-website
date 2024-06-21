// const express = require('express');
// const router = express.Router();
 const User = require('../models/userModel'); 

 
// // Fetch all users
// router.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bcrypt = require('bcrypt');


// Add User
router.post('/views/add-user', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const newUser = new Users({ username, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error adding user', error });
    }
  });
  
  // Edit User
  router.put('/views/edit-user/:id', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await Users.findById(req.params.id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      user.username = username || user.username;
      user.email = email || user.email;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }
  
      await user.save();
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  });
  
  // Get Users
  router.get('/get-users', async (req, res) => {
    try {
      const users = await Users.find();
      res.json({ users });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error });
    }
  });
  

router.delete('/delete-user/:id', async (req, res) => {
    console.log('try to delete ')
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;

