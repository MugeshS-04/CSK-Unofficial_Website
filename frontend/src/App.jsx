import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Team from './Pages/Team'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/team' element={<Team/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/news' element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
