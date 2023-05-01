import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'
import AuthProvider from './contexts/Auth'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
