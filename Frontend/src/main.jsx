import React,{ StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'

const HomePage= React.lazy(()=> import('./Routes/HomePage.jsx'));
const JsonPage= React.lazy(()=> import('./Routes/JsonPage.jsx'));
const Base64Page= React.lazy(()=> import('./Routes/Base64Page.jsx'));
const InfoPage= React.lazy(()=> import('./Routes/InfoPage.jsx'));
const UserPage= React.lazy(()=> import('./Routes/UserPage.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div className='h-[100vh] w-[100vw] bg-[#020512] text-white flex items-center justify-center'><p className='text-xl'>Welcome to Dev ToolBox</p>
    <p className='text-xs ml-2 mt-2 text-blue-400'>made by Subhodeep</p></div>}>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/json' element={<JsonPage/>}/>
        <Route path='/base64' element={<Base64Page/>}/>
        <Route path='/info' element={<InfoPage/>}/>
        <Route path='/profile' element={<UserPage/>}/>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
