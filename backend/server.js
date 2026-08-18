require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./db/db');
const authRoutes = require('./routes/authRoutes');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', todoRoutes);

connectDb();

app.get('/', (req, res) => {
  res.send("API is running");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000.....");
});
