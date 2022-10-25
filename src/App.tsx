import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Version} from "./components/atoms/Version";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Version />
      </header>
    </div>
  );
}

export default App;
