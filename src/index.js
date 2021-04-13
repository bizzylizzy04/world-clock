import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/* Change the greeting depending on the time of day. It should say:
  - "Good morning" between 5 am & 12 pm
  - "Good afternoon" between 12 pm & 6 pm
  - "Good evening" between 6 pm & 5 am
- Change the greeting icon & background image depending on the time of day. They should show:
  - The sun icon & the daytime background image between 5 am & 6 pm
  - The moon icon & the nighttime background image between 6 pm & 5 am */