import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
// import Test from './components/Test';
import './styles/main.css';
import './styles/cv.css';
import './styles/forms.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>
);
