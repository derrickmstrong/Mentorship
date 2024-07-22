const express = require('express'); // Import express
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3
const path = require('path'); // Import path

const app = express(); // Create an express app
const db = new sqlite3.Database('mydatabase.db'); // Connect to the database

// Serve static files from the "public" directory
app.use(express.static('public'));

// API endpoint to get users data
app.get('/api/users', (req, res) => { // Handle GET requests to /api/users
  db.all('SELECT * FROM users', (err, rows) => { // Get all users data
    if (err) {
      res.status(500).json({ error: err.message }); // Return an error message
      return;
    }
    res.json({
      message: 'success', // Return a success message
      data: rows, // Return the data
    });
  });
});

// Start the server
const PORT = 3000; // Port number
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Print a message when the server starts
});
