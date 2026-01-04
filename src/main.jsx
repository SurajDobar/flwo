import React from 'react'

import './index.css'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import MrWhite from './components/MrWhite.jsx'
import MainMenu from './components/MainMenu.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
<>
    <Route path="/" element={<MainMenu/>} />
    <Route path="Mrwhite" element={<MrWhite/>}/>
</>
    
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(


    <RouterProvider router={router}/>
    
  
  
)
