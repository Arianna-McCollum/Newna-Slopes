
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from "react-router-dom";
import './index.css'


// Components
import ScrollToTop from './components/ScrollToTop'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
