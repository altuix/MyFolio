import React from 'react'
import './style.css'
import WorkRow from './work-row'

function WorkBox() {
  return (
    <div className='all-projects-project box-border  w-full cursor-default overflow-hidden rounded-lg border border-gray-300 p-1 opacity-85 shadow-md	shadow-slate-300'>
      <div className='project group h-full rounded-md'>
        <div className='project-container flex flex-col p-7'>
          <div className='project-logo flex w-8 items-center gap-5 font-bold text-gray-500 '>
            <i className='fa-solid fa-briefcase'></i>
            <h2>Works</h2>
          </div>
          <div className='works mt-7'>
            <WorkRow company='facebook' year='2018-2019' jobTitle='FrontEnd Developer'></WorkRow>
            <WorkRow company='twitter' year='2019-present' jobTitle='Team Leader'></WorkRow>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkBox
