import React from 'react';

import Homepage from './pages/homepage/homepage.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Productivity Dashboard</h1>
      <div className="container">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
