// create a react functional component that inputs text area message then performs a fetch request to localhost 3001 , displays that message in a box below

import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setResponse(data.message);
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <p>{response}</p>
    </div>
  );
} 

export default App;