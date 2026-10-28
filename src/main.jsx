import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

document.documentElement.style.setProperty(
  '--culture-mask-image',
  `url("${import.meta.env.BASE_URL}images/wayang-wong-masks.webp")`,
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
