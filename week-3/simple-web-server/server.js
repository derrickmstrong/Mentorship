const express = require('express'); // Import the express library
const path = require('path'); // Import the path library
const app = express(); // Create an express app
const PORT = 3000; // Set the port

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Simple API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
