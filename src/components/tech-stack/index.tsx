import React from 'react'
import { apollo, css, html, jquery, js, nodejs, redux, sass, tailwind, tsx } from '../../assets/tech-icons'
import Tech from './tech'

function TechStack() {
  return (
    <div className='my-10 flex flex-col items-center justify-normal'>
      <h2 className='mb-8 font-secondary text-3xl font-semibold text-primary'>Tech Stack</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        <Tech src={apollo} />
        <Tech src={css} />
        <Tech src={html} />
        <Tech src={jquery} />
        <Tech src={js} />
        <Tech src={nodejs} />
        <Tech src={redux} />
        <Tech src={sass} />
        <Tech src={tailwind} />
        <Tech src={tsx} />
      </div>
    </div>
  )
}

export default TechStack
