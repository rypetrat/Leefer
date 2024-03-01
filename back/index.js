const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all requests
app.use(cors());

const PORT = 5000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Define a route
app.get('/api/data', (req, res) => {
  res.json({ text: 'Baby Gronk rizzing up skippidy toilet in ohio' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});