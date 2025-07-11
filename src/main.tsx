import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/main.scss'

import { Amplify } from 'aws-amplify'
import config from './amplifyconfiguration.json'

Amplify.configure(config)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
