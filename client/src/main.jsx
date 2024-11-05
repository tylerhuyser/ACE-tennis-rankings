import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/shared/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </StrictMode>,
)
