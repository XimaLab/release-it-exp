import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Version} from "./components/atoms/Version";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div style={{width: '70%'}}>
              <h2>Welcome to my release-it experience. If you want to know more about this experience, contact-me 😇</h2>
              <Version />
          </div>
      </header>
    </div>
  );
}

export default App;
