import logo from '../../assets/cup.jpg'

import './style.css'
import MarkdownPreview from '@uiw/react-markdown-preview'
import AboutMd from '../../data/markdowns/about'
import { deviantart, github, linkedin } from '../../assets/social'

const About = () => {
  return (
    <>
      <div id='about' className=' mb-8 flex  flex-col-reverse '>
        <div className='flex-1 pr-5'>
          <p className='font-primary text-lg text-secondary'>
            <MarkdownPreview
              source={AboutMd}
              wrapperElement={{
                'data-color-mode': 'light'
              }}
              style={{ padding: 16 }}
            />
          </p>
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
