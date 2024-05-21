import React from "react";
import './style.css'
function Navbar() {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white fixed top-[3vh] z-50 flex gap-7 px-6 py-2 rounded-full shadow-[0px_5px_10px_rgba(0,0,0,0.2)]">                                                                                      
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Articles</a>
        <a>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
