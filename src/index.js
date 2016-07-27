import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import stubs from './data';

ReactDOM.render(
  <App stubs={stubs} />,
  document.getElementById('root')
);
