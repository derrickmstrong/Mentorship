const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoints
app.get('/api/user', (req, res) => {
    res.json({ Name: 'May Hicks, Alloy Intern'});
});

app.get('/api/status', (req, res) => {
    res.json({Status: 'You have now been signed in.'});
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Have a great day, May!' });
  });
// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
