import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header className='flex items-center justify-between p-4 fixed w-full left-1 box-border z-1000'>
    <div className='left-container'>
        <img src={logo} alt="Logo" className='h-14 cursor-pointer' />
    </div>
    <div >
      
    <Link to="/signin">
          <button className='bg-white px-6 font-bold py-1 text-black rounded-lg'>
            Login
          </button>
        </Link>
     
    </div>

   </header>
  )
}

export default Header