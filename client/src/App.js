import React from 'react';

import Homepage from './pages/homepage/homepage.component'
import Header from '../src/components/header/header.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Productivity Dashboard</h1>
      <div className="container">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
