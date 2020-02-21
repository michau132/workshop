import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './assets/styles/style.scss';
import { BrowserRouter } from 'react-router-dom';
ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));

// clearing console after changes by webpack
if (module.hot) {
  module.hot.accept(); // already had this init code 

  module.hot.addStatusHandler(status => {
    if (status === 'prepare') console.clear();
  });
}