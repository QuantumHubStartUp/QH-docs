import { Fragment, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'

import "@shared/styles/tailwindcss.css";


import "@shared/styles/scroll-bar.css"
import "@features/theme/styles/theme.css"
import { isDebug } from './config/env.ts';

const RootWrapper = isDebug ? StrictMode : Fragment;

createRoot(document.getElementById('root')!).render(
  <RootWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootWrapper>,
);


