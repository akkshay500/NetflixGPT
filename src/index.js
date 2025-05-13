import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* When you use ReactDOM.render, you are telling React to render the component into the DOM. 
   Your app will be rendered inside the root element in your HTML file. 
   The root element is usually a div with an id of root. 
   ReactDOM.render takes two arguments: the component you want to render and the DOM element you want to render it into.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

// The render method is used to render the JSX code into the DOM. This is the entry point of your React application.
root.render(
  // If you use strict mode, React will run additional checks and warnings for your components. So it will call every api twice in development mode.
  // When you deploy your app on production, it will not call the api twice.
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
