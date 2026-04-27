import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { createStore } from 'redux';
import movies from './reducers'

// Creating Redux store
const store = createStore(movies);

// React 18 LTS: Using createRoot for concurrent rendering
const root = createRoot(document.getElementById('root'));
root.render(
  // Passing store as props to App component
  <App store={store} />
);

