import React, { Component } from 'react';
import styled from "styled-components";

import axios from 'axios';

import config from './config';
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
