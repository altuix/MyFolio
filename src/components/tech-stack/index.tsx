import React from 'react'
import {
    apollo,
    css,
    html,
    jquery,
    js,
    nodejs,
    redux,
    sass,
    tailwind,
    tsx,
} from '../../assets/tech-icons'
import Tech from './tech'

function TechStack() {
    return (
        <div className="flex flex-col items-center justify-normal my-10">
            <h2 className="text-primary font-secondary font-semibold text-3xl mb-8">
                Tech Stack
            </h2>
            <div className="flex flex-wrap gap-8 justify-center">
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
