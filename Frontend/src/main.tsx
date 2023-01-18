import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastProvider } from './context/toastContext'
import './index.css'
import Router from './routes/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <Router/>
    </ToastProvider>
  </React.StrictMode>,
)
