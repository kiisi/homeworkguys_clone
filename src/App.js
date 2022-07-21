import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/'element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App