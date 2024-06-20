import './style.css'
import { Typewriter } from 'react-simple-typewriter'

const Contact = () => {
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
          <h1 className='mb-4 font-primary text-5xl font-extrabold  text-primary  md:w-1/2'>Let's Get in Touch</h1>
          <p className='mb-6 font-primary text-lg text-secondary'>Ways to Connect with Me... </p>
        </div>
        <div className='flex flex-col flex-wrap justify-start gap-2 '>
          <h1 className=''>
            Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and
            suggestions. If you have a specific question or comment, please feel free to email me directly at
            altuggokoglu@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me
            longer during busy periods. Alternatively, you can use the contact form on my website to get in touch.
            Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to
            connect on social media. I post regular updates and engage with my followers there, so don't hesitate to
            reach out. Thanks again for your interest, and I look forward to hearing from you!
          </h1>
        </div>
        <div className='social-container flex flex-col mt-20'>
          <div className='contact-socials items-center justify-start flex'>
            <div className='socials'>
              <div className='social'>
                <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                  <div className='social-icon text-primary' >
                  
                  </div>
                  <div className='social-text text-secondary'>Follow on Twitter</div>
                </a>
              </div>
              <div className='social'>
                <a href='https://github.com/' target='_blank' rel='noreferrer'>
                  <div className='social-icon'>
                
                  </div>
                  <div className='social-text'>Follow on GitHub</div>
                </a>
              </div>
              <div className='social'>
                <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
                  <div className='social-icon'>
            
                  </div>
                  <div className='social-text'>Follow on LinkedIn</div>
                </a>
              </div>
              <div className='social'>
                <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
                  <div className='social-icon'>
                  
                  </div>
                  <div className='social-text'>Follow on Instagram</div>
                </a>
              </div>
              <div className='email'>
                <div className='email-wrapper'>
                  <a href='mailto:mail@tharindu.dev' target='_blank' rel='noreferrer'>
                    <div className='social-icon'>
                    
                    </div>
                    <div className='social-text'>mail@tharindu.dev</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
