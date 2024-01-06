import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import './assets/styles/core.sass'
import { App } from './App.tsx'

const root = document.getElementById('root')!

createRoot(root).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
