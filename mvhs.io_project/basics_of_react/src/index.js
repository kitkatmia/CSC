import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './buttons';
import InvertedButtons from './inverted_buttons';
import ThemedButtons from './themed_buttons';
import UseStateSimple from './UseStateSimple';
import UseStateObject from './UseStateObject';
// note how all components are written in camel case + start with a capital

ReactDOM.render(
  <React.StrictMode>
    <App />
    <InvertedButtons />
    <ThemedButtons />
    <UseStateSimple />
    <br></br>
    <UseStateObject />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
