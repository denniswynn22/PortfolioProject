import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider, 
  CreateBrowserRouter,
} from "react-router-dom"
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* Replace <App /> Component with the <RouterProvider> */}
  <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)