import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='w-[90%] ml-[4%] mt-[4%] flex items-center gap-1'>
        <img className='w-[5%] h-auto' src={logo} alt="CSK Logo" />
        <h1 className='ml-4 text-3xl font-bold'>Chennai Super Kings</h1> {/* Added left margin */}
    </div>
  )
}

export default Navbar
