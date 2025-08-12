import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import HomePage from './Routes/HomePage.jsx'
import InfoPage from './Routes/InfoPage.jsx'
import Base64Page from './Routes/Base64Page.jsx'
import JsonPage from './Routes/JsonPage.jsx'
import UserPage from './Routes/UserPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/json' element={<JsonPage/>}/>
        <Route path='/base64' element={<Base64Page/>}/>
        <Route path='/info' element={<InfoPage/>}/>
        <Route path='/profile' element={<UserPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
