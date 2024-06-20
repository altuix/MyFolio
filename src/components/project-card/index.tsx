import React from 'react'
import './style.css'

function ProjectCard() {
  return (
    <div className='all-projects-project  border-light-blue-200 flex-1 basis-full sm:basis-1 md:basis-1/3 lg:basis-0 group relative box-border flex h-[60vh]  cursor-pointer items-center justify-center overflow-hidden rounded-xl border-4  border-opacity-50 shadow-inner   lg:h-[50vh]  '>
      <div className='project-card-colorfull-bg absolute left-0 top-0 z-0 h-full w-full rounded-lg blur-sm transition-all group-hover:blur-3xl'></div>
      <div
        className=' project border-light-blue-200 relative z-10 h-[90%] w-[90%] rounded-xl border-4 border-opacity-50 bg-white p-2 opacity-85 mix-blend-normal 
        shadow-inner transition-all ease-in-out hover:scale-105 hover:opacity-100'
      >
        <div className='project-container  flex h-full flex-col'>
          <div className='project-logo '>
            <img loading='lazy'
              className='max-h-[20vh] w-full rounded-lg'
              src='https://freefrontend.com/assets/img/css-cards/2023-la-saveur-french-menu-cards.jpg'
              alt='logo'
            />
          </div>
          <div className='project-title self-center'>Project 3</div>
          <div className='project-description mt-auto text-secondary'>
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
      </div>
    </div>
  )
}

export default ProjectCard
