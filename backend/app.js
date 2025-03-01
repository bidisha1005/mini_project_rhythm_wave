require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors package
const userRoutes = require('./routes/userRoutes');

const app = express();

// Apply CORS middleware to allow requests from your React app
app.use(cors({
  origin: 'http://localhost:3001', // React app URL
  methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
  credentials: true, // Allow cookies and authorization headers
}));

app.use(express.json());

// Connect to the database
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Use routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
