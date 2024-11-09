import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <Router basename="/">
          <App />
      </Router>
    </HelmetProvider>
  </StrictMode>,
)
