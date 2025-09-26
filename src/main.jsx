/**
 * @file main.jsx
 * @purpose App entry point (Vite + React 18)
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Mounts the React tree, wires React Router, and loads global styles.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Using the modern React 18 createRoot API for concurrent features.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);