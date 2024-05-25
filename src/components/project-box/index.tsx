import React from 'react'
import './style.css'

function ProjectBox() {
  return (


    <div className="cursor-pointer all-projects-project  box-border overflow-hidden lg:w-1/3 md:w-1/2 sm:w-full">
      <div className="project group rounded-md h-full mix-blend-normal opacity-80 hover:bg-[#EEEEEE] hover:opacity-100 hover:ease-in-out duration-300 hover:scale-105">
        <a >
          <div className="project-container p-7 h-72 flex flex-col">
            <div className="project-logo w-8">
              <img className='w-full' src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" alt="logo" />
            </div>
            <div className="project-title ">Project 3</div>
            <div className="project-description text-secondary">
              Lorem ipsum dolor sit amet. Et incidunt
              voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.
            </div>
            <div className="project-link flex gap-5 mt-auto">
              <div className="project-link-icon">
                <i className="fa-solid fa-link group-hover:text-blue-400"></i>
              </div>
              <div className="project-link-text group-hover:text-blue-400">View Project</div>
            </div>
          </div>
        </a>
      </div>
    </div>


  )
}

export default ProjectBox