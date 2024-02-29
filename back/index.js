const express = require('express');
const app = express();
const PORT = 3001;

// Define a route for the API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});