const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// User Sign-Up
// User Sign-Up
const signUp = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Validate input
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields: username, email, and password.' });
      }
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log(`User with email ${email} already exists`);
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Save the password as plain text (no hashing)
      const newUser = new User({
        name: username,
        email,
        password: password, // Store the plain password directly
      });
      await newUser.save();
  
      // Return success message
      console.log(`User created successfully: ${email}`);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error during sign up:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  

// User Login
// User Login
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
      }
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        console.log('Invalid email or password - User not found');
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Compare the entered password with the plain-text password stored in the database
      if (password !== user.password) {
        console.log('Invalid email or password - Password mismatch');
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      console.log(`Login successful for user: ${email}`);
      res.status(200).json({ message: 'Login successful', token, userId: user._id });
  
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  module.exports = { signUp, login };