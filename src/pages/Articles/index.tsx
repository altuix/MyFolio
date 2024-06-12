

import './style.css'
import { Typewriter } from 'react-simple-typewriter'

const Articles = () => {

  const handleType = (count: number) => {
    // access word count number
    console.log(count)
  }


  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <>
      <div id='projects' className=' mb-8 flex flex-col '>
        <div className='pr-5'>
          <h1 className='mb-4 font-secondary text-6xl font-extrabold  text-primary'>My Articles</h1>
          <p className='font-primary text-lg text-secondary mb-6'>These are my Articles... </p>
          
        </div>
        <div className='flex flex-col flex-wrap gap-2 justify-start items-center'>
          <span>We are working for this part...</span> 
          <h1 className='text-center'>
            Until that time comes, you can <br/><br/><br/>{' '}
            <span className='font-primary text-5xl self-center text-center mt-10' style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Wait','Dance','Eat', 'Sleep', 'Code', 'Read', 'Run']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Articles
