const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store plain text password directly
});

// No pre-save hook to hash the password anymore
module.exports = mongoose.model('User', UserSchema);
