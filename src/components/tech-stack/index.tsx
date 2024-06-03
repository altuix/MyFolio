import React from 'react'
import techImages from '../../assets/tech-icons'
import Tech from './tech'

function TechStack() {
  return (
    <div className='my-10 flex flex-col items-center justify-normal'>
      <h2 className='mb-8 font-secondary text-3xl font-semibold text-primary'>Tech Stack</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {techImages.map((e: any, i) => {
          return <Tech src={e} key={i} />
        })}
      </div>
    </div>
  )
}

export default TechStack
