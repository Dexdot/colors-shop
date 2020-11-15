import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.sass';

const isStrict = true;

ReactDOM.render(
  isStrict ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  ),
  document.getElementById('root')
);
