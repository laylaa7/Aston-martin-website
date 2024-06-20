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

router.post('/add-user', userController.addUser);
router.put('/edit-user/:id', userController.editUser);
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

