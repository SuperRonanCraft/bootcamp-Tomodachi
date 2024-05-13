// Import required modules
const express = require('express');

// Set up server configuration (PORT)
const PORT = process.env.PORT || 3000;

// Create an Express application
const app = express();

// Set up express middleware (app.use)
app.use(express.static('public'));

// Set up server setup (app.listen)
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`);