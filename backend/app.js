const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

// Load config
dotenv.config();

// Connect to Database
connectDB();

const app = express();

app.use(cors({
    origin: [
        "http://localhost:3000",       // Standard React Port
        "http://localhost:3001",       // ADD THIS (The port your error says you are using)
        "https://starpublicity.org",   // Live Domain
        "https://www.starpublicity.org"
    ],
    credentials: true
}));
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/contact', contactRoutes);

// Basic Route
app.get('/', (req, res) => {
    res.send('Star Publicity API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});