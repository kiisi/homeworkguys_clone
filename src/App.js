import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import SubmitRequest from './components/SubmitRequest/SubmitRequest'
import Minor from './components/Minor/Minor'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/'element={<Main/>}/>
        <Route exact path='/us'element={<About/>}/>
        <Route exact path='/request'element={<SubmitRequest/>}/>
      </Routes>
      <Minor/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App