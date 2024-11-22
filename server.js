// server.js
require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

console.log('MONGO_URI:', process.env.MONGO_URI); // Add this line to debug

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));