import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './User_tanstack/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Pictures from './Photos_tanstack/Pictures';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>ZADANIE 1:</h1><br/>
    <User></User><br/>
    <h1>ZADANIE 2:</h1><br/>
    <Pictures></Pictures>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
