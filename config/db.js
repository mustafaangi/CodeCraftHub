// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true, // Add this line to handle deprecation
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Invalid connection string');
    process.exit(1);
  }
};

module.exports = connectDB;