import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import Hosting from './routes/Hosting'
import Security from './routes/Security'
import About from './routes/About'
import Contact from './routes/Contact'
import Login from './routes/Login'
import Logup from './routes/Logup'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hosting' element={<Hosting />} />
        <Route path='/security' element={<Security />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Logup />} />
      </Routes>
    </>
  )
}

export default App

