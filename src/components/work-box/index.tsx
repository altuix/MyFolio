import React from 'react'
import './style.css'

function WorkBox() {
  return (


    <div className="cursor-pointer all-projects-project  box-border overflow-hidden w-full">
      <div className="project group border border-gray-600 rounded-md h-full mix-blend-normal opacity-80 hover:bg-[#fafafa] hover:opacity-100 hover:ease-in-out duration-300">

        <div className="project-container p-7 h-72 flex flex-col">
          <div className="project-logo w-8 flex items-center gap-5 text-gray-500 font-bold ">
            <i className="fa-solid fa-briefcase"></i>
            <h2>Works</h2>
          </div>
          <div className='works mt-7'>
            <div className='work flex items-center gap-10 pa p-5' >
              <i className="fa-brands fa-facebook-f"></i>
              <div>
                <h3>Facebook</h3>
                <span>Web Developer</span>
              </div>
              <p className='ml-auto'> 2019 - present </p>
            </div>
          </div>
        </div>

      </div>
    </div>


  )
}

export default WorkBox