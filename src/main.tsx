import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import AuthProvider from './contexts/Auth'
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
