import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/'element={<Main/>}/>
        <Route exact path='/us'element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App