// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // Essential body parser middleware

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Database Connected"))
  .catch(err => console.log(err));

// Simple test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
