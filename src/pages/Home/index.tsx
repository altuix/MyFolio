import React, { useEffect, useState } from 'react'
import logo from '../../assets/myfolio.png'
import myhead from '../../assets/my_head.jpg'
import './style.css'
import ProjectBox from '../../components/project-box'
import ArticleRectangle from '../../components/article-rectangle'
import WorkBox from '../../components/work-box'
import TechStack from '../../components/tech-stack'
import { deviantart, github, linkedin } from '../../assets/social'

const Home = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50)
        })
    }, [])

    return (
        <>
            <div
                id="home"
                className="flex flex-col-reverse lg:flex-row relative mb-8"
            >
                <div className="flex-1 pr-5">
                    <img
                        className={` w-16 h-16 rounded-full mb-4 hidden z-50 sm:block  ${
                            scroll ? 'fixed sm:top-[2.2vh] ' : ''
                        }`}
                        src={logo}
                    />
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
                    <div className="flex mt-5 opacity-70 gap-6 items-center justify-center sm:justify-start">
                        <img className="w-auto h-8" src={github} />
                        <img className="w-auto h-8" src={linkedin} />
                        <img className="w-auto h-8" src={deviantart} />
                    </div>
                </div>
                <div className="items-center justify-center self-center p-12 h-96 ">
                    <img
                        className="transition duration-150 rounded-xl -rotate-12  blur-sm h-full grayscale shadow-inner shadow-indigo-300 hover:scale-110 hover:ease-out hover:rotate-0 hover:grayscale-0 hover:blur-0 "
                        src={myhead}
                    />
                </div>
            </div>

            <TechStack />

            <div className="flex flex-wrap mb-8">
                <ProjectBox></ProjectBox>
                <ProjectBox></ProjectBox>
                <ProjectBox></ProjectBox>
                <ProjectBox></ProjectBox>
                <ProjectBox></ProjectBox>
            </div>

            <div className="flex flex-col sm:flex-row gap-10 mb-8 ">
                <ArticleRectangle></ArticleRectangle>
                <WorkBox></WorkBox>
            </div>
        </>
    )
}

export default Home
