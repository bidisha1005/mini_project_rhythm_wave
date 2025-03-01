const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the auth middleware
const User = require('../models/User'); // Import the User model

// Public routes
router.post('/signup', signUp);  // User Sign-Up
router.post('/login', login);    // User Login

// Protected route to get user profile
router.get('/user/profile', authMiddleware, async (req, res) => {
  try {
    // Find the user by ID (from the JWT token)
    const user = await User.findById(req.user.userId);  // `req.user.userId` is from the decoded token
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);  // Return the user's profile data
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
