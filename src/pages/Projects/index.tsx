import logo from '../../assets/myfolio.png'

import './style.css'

import { deviantart, github, linkedin } from '../../assets/social'
import ProjectCard from '../../components/project-card'

const Projects = () => {
  return (
    <>
      <div id='projects' className=' mb-8 flex flex-col '>
        <div className='pr-5'>
          <h1 className='mb-4 font-secondary text-6xl font-extrabold  text-primary'>My Projects</h1>
          <p className='font-primary text-lg text-secondary mb-6'>These are my projets list i worked...</p>
        </div>
        <div className='flex flex-wrap gap-2 justify-start'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects
