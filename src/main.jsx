/**
 * @file main.jsx
 * @purpose App entry point (Vite + React 18)
 * @description Mounts the React tree, wires React Router, and loads global styles.
 * @author Alex Kachur
 * @since 2025-09-17
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)