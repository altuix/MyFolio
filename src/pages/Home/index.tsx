import React from 'react'
import logo from '../../assets/myfolio.png'


function Home() {
  return (
    <div className='flex'>
      <div>
        <img className='' src={logo}/>
        <h1 className='font-primary text-primary'>Frontend Developer, AI artist , and amateur Seppuku user.</h1>
      </div>
      <div>
        <img src={logo}/>
       
      </div>
    </div>
  )
}

export default Home