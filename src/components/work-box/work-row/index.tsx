import React from 'react'
import { I_WORK } from '../../../Interfaces/I_work'

function WorkRow(props: I_WORK) {
  return (
    <div className='work pa flex items-center gap-10 p-5'>
      <i className={`ci ci-${props.company} ci-2x`}></i>
      <div>
        <h3 className='font-primary text-lg font-semibold capitalize text-primary'>{props.company}</h3>
        <span className='font-primary text-base capitalize text-secondary'>{props.jobTitle}</span>
      </div>
      <p className='ml-auto font-primary text-sm text-secondary'>{props.year}</p>
    </div>
  )
}

export default WorkRow
