import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MrWhite from './components/MrWhite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <MrWhite/>
  </StrictMode>,
)
