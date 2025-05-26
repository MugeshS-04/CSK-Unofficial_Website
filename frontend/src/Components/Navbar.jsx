import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-11/12 ml-24 mt-24 flex justify-between items-center font-bold'>
      {/* Left side - Logo and Title */}
        <div className='flex items-center gap-1'>
          <img className='w-24 h-auto' src={logo} alt="CSK Logo" />
          <h1 className='inria-sans ml-4 text-5xl'>Chennai Super Kings</h1>
        </div>
    
      {/* Right side - Navigation */}
        <div className='flex gap-10 text-3xl comfortaa-light'>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-400 bg-red-100 rounded-full p-4" : "text-gray-600 hover:text-blue-500 p-4"} to='/home'>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-400 bg-red-100 rounded-full p-4" : "text-gray-600 hover:text-blue-500 p-4"} to='/team'>Team</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-400 bg-red-100 rounded-full p-4" : "text-gray-600 hover:text-blue-500 p-4"} to='/gallery'>Gallery</NavLink>
          <NavLink className={({ isActive }) => isActive ? "text-yellow-400 bg-red-100 rounded-full p-4" : "text-gray-600 hover:text-blue-500 p-4"} to='/news'>News</NavLink>
        </div>

    </div>
  )
}

export default Navbar
