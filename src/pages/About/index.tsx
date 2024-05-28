import React, { useEffect, useState } from 'react'
import logo from '../../assets/myfolio.png'
import myhead from '../../assets/my_head.jpg'
import './style.css'
import ProjectBox from '../../components/project-box'
import ArticleRectangle from '../../components/article-rectangle'
import WorkBox from '../../components/work-box'
import TechStack from '../../components/tech-stack'
import { deviantart, github, linkedin } from '../../assets/social'

const About = () => {
  return (
    <>
      <div id='about' className=' mb-8 flex  flex-col-reverse lg:flex-row'>
        <div className='flex-1 pr-5'>
          <h1 className='mb-4 font-secondary text-6xl font-extrabold  text-primary'>
            Frontend Developer, AI artist and amateur Seppuku user.
          </h1>
          <p className='font-primary text-lg text-secondary'>
            I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and
            reliable web applications using various frameworks and technologies. I enjoy solving complex problems and
            learning new skills. I am passionate about creating high-quality code that follows best practices and
            industry standards. I am always looking for new challenges and opportunities to grow as a developer.
          </p>
        </div>
        <div className='items-center justify-center self-center p-12'>
          <img className='w-full -rotate-3 rounded-xl transition' src={logo} />
        </div>
      </div>
      <div className='mt-5 flex items-center justify-center gap-6 opacity-70 sm:justify-start'>
        <img className='h-8 w-auto' src={github} />
        <img className='h-8 w-auto' src={linkedin} />
        <img className='h-8 w-auto' src={deviantart} />
      </div>
    </>
  )
}

export default About
