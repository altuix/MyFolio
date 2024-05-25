import React from 'react'
import './style.css'
import WorkRow from './work-row'

function WorkBox() {
    return (
        <div className="cursor-default all-projects-project  box-border overflow-hidden w-full border border-gray-300 rounded-lg shadow-md shadow-slate-300 p-1	opacity-85">
            <div className="project group rounded-md h-full">
                <div className="project-container p-7 flex flex-col">
                    <div className="project-logo w-8 flex items-center gap-5 text-gray-500 font-bold ">
                        <i className="fa-solid fa-briefcase"></i>
                        <h2>Works</h2>
                    </div>
                    <div className="works mt-7">
                        <WorkRow
                            company="facebook"
                            year="2018-2019"
                            jobTitle="FrontEnd Developer"
                        ></WorkRow>
                        <WorkRow
                            company="twitter"
                            year="2019-present"
                            jobTitle="Team Leader"
                        ></WorkRow>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkBox
