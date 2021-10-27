import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import { ErrorCatcher } from './error.js';
import { App } from './app.js';
import { store } from './store.js';

ReactDOM.render(
  <ErrorCatcher>
    <App state={store.mainSection}/>
  </ErrorCatcher>,
  document.getElementById('root')
);
