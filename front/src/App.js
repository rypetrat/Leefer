import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/api/data';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
      })
      .then(data => {
        setMessage(data.text); // Set message to the value of the 'text' field in the JSON
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-text">
        <h1>Weed dem boys</h1>
        <p>Message from the server right out of miller grove: {message}</p>
      </header>
    </div>
  );
}

export default App;