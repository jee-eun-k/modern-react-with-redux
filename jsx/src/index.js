// 1) Import the react and ReactDom libraries
import React from 'react';
// Library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client';
// Library that knows how to get a component to show up in the browswer.
import App from './App';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell REact to take control of the element
const root = ReactDOM.createRoot(el);

// 4) sShow the component on the screen
root.render(<App />);
