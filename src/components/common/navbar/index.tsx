import React from 'react'
import logo from '../../../assets/myfolio.png'
import './style.css'
function Navbar() {
  return (
    <div className='flex items-center justify-center '>
      <div className='fixed top-0 z-50 flex max-h-16 w-full items-center justify-center gap-4 border-b border-indigo-200 bg-slate-500 px-6 py-2 font-semibold text-white shadow-[0px_5px_10px_rgba(0,0,0,0.2)]  sm:top-[3vh] sm:w-auto sm:gap-7 sm:rounded-full sm:font-normal'>
        <img src={logo} className='z-50 mr-auto max-h-8 self-start rounded-full sm:hidden  sm:max-h-12' />
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Articles</a>
        <a>Contact</a>
      </div>
    </div>
  )
}

export default Navbar
