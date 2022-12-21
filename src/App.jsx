import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavbar from './layouts/WithNavbar';
import Home from './pages/Home'
import About from './pages/About'
//import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithNavbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
