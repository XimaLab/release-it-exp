import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Version} from "./components/atoms/Version";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="App-container">
              <h2>Welcome to my release-it experience 👋🏼</h2>
              <h3>If you want to know more about this experience, contact-me 😇</h3>
              <Version />
              <p className="Small-text">Ximalab 🧪 - 2022 - Maxime LE BERRE</p>
          </div>
      </header>
    </div>
  );
}

export default App;
