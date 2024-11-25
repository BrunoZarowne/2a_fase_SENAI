
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, Routes } from 'react-router-dom'
import router from './routes/Rotes.jsx'
import { GlobalContextProvider} from './context/GlobalContext.jsx'
import { ReactDOM } from 'react'
createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router}>
    
    </RouterProvider>
  </GlobalContextProvider>
)
