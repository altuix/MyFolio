import React, { useEffect, useState } from 'react'
import logo from '../../assets/myfolio.png'
import myhead from '../../assets/my_head.jpg'
import './style.css'
import ProjectBox from '../../components/project-box'
import ArticleRectangle from '../../components/article-rectangle'
import WorkBox from '../../components/work-box'
import TechStack from '../../components/tech-stack'
import { deviantart, github, linkedin } from '../../assets/social'

const About = () => {
    return (
        <>
            <div
                id="about"
                className=" flex flex-col-reverse  lg:flex-row mb-8"
            >
                <div className="flex-1 pr-5">
                    <h1 className="font-secondary text-primary text-6xl font-extrabold  mb-4">
                        Frontend Developer, AI artist and amateur Seppuku user.
                    </h1>
                    <p className="font-primary text-secondary text-lg">
                        I am a backend developer with expertise in Node.js. I
                        have experience in building scalable, secure and
                        reliable web applications using various frameworks and
                        technologies. I enjoy solving complex problems and
                        learning new skills. I am passionate about creating
                        high-quality code that follows best practices and
                        industry standards. I am always looking for new
                        challenges and opportunities to grow as a developer.
                    </p>
                </div>
                <div className="items-center justify-center self-center p-12">
                    <img
                        className="transition rounded-xl -rotate-3 w-full"
                        src={logo}
                    />
                </div>
            </div>
            <div className="flex mt-5 opacity-70 gap-6 items-center justify-center sm:justify-start">
                <img className="w-auto h-8" src={github} />
                <img className="w-auto h-8" src={linkedin} />
                <img className="w-auto h-8" src={deviantart} />
            </div>
        </>
    )
}

export default About
