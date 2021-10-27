import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import { ErrorCatcher } from './error.js';
import App from './app';

ReactDOM.render(
  <ErrorCatcher>
    <App />
  </ErrorCatcher>,
  document.getElementById('root')
);
