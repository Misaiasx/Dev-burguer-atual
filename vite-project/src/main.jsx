import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Login } from './compónents/login/index.jsx'
import GlobalStyles  from './styles/globalStyles.js'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyles/>
  </StrictMode>,
)
