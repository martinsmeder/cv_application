import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Greeting from './Greeting.jsx';
import Robot from './Robot.jsx';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Robot />
    <App />
  </React.StrictMode>
);
