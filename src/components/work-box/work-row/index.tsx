import React from 'react'
import { I_WORK } from '../../../Interfaces/I_work'

function WorkRow(props: I_WORK) {
    return (
        <div className="work flex items-center gap-10 pa p-5">
            <i className={`ci ci-${props.company} ci-2x`}></i>
            <div>
                <h3 className="text-primary font-primary text-lg font-semibold capitalize">
                    {props.company}
                </h3>
                <span className="text-secondary font-primary text-base capitalize">
                    {props.jobTitle}
                </span>
            </div>
            <p className="ml-auto text-secondary font-primary text-sm">
                {props.year}
            </p>
        </div>
    )
}

export default WorkRow
