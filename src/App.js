import React, { Component } from 'react';

import Home from './pages/home';

import './App.css';

// configure axios
//axios.defaults.baseURL = config.apiEndpoint;

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
