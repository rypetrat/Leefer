import React, { useState, useEffect } from 'react';
import './App.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="./">Home</a></li>
        <li><a href="Strains">Strain Catalog</a></li>
        <li><a href= "StrainBot">Find Your Perfect Strain</a></li>
        <li><a href= "DispMap">Dispensaries Near You</a></li>
        <li><a href="About">About Us</a></li>
      </ul>
    </nav>
  );
}


function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMessage(data.text);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-text">
        <h1>Weed dem boys</h1>
        <p>Message from the server right out of miller grove: {message}</p>
      </header>
    </div>
  );
}

export default App;