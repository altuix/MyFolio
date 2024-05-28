import React from 'react'
import './style.css'

function ProjectBox() {
  return (
    <div className='all-projects-project box-border  cursor-pointer overflow-hidden sm:w-full md:w-1/2 lg:w-1/3'>
      <div className='project group h-full rounded-md opacity-80 mix-blend-normal duration-300 hover:scale-105 hover:bg-[#EEEEEE] hover:opacity-100 hover:ease-in-out'>
        <a>
          <div className='project-container flex h-72 flex-col p-7'>
            <div className='project-logo w-8'>
              <img
                className='w-full'
                src='https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png'
                alt='logo'
              />
            </div>
            <div className='project-title '>Project 3</div>
            <div className='project-description text-secondary'>
              Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti
              minima.
            </div>
            <div className='project-link mt-auto flex gap-5'>
              <div className='project-link-icon'>
                <i className='fa-solid fa-link group-hover:text-blue-400'></i>
              </div>
              <div className='project-link-text group-hover:text-blue-400'>View Project</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectBox
