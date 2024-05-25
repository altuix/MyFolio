import React from 'react'
import logo from '../../../assets/myfolio.png'
import './style.css'
function Navbar() {
    return (
        <div className="flex items-center justify-center ">
            <div className="justify-center items-center max-h-16 w-full top-0 border-b border-indigo-200 text-white bg-slate-500 fixed z-50 flex gap-4 px-6 py-2 font-semibold sm:font-normal  sm:gap-7 sm:w-auto sm:top-[3vh] sm:rounded-full shadow-[0px_5px_10px_rgba(0,0,0,0.2)]">
                <img
                    src={logo}
                    className="z-50 self-start mr-auto max-h-8 rounded-full sm:max-h-12  sm:hidden"
                />
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
