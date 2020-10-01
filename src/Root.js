import React from 'react';
import App from './App'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function Root() {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;
