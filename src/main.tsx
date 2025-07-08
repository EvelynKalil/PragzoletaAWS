import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.scss';
import App from './App';

import { Amplify } from 'aws-amplify'
import type { ResourcesConfig } from '@aws-amplify/core'
import config from './amplifyconfiguration.json' assert { type: 'json' }

Amplify.configure(config as unknown as ResourcesConfig)




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
