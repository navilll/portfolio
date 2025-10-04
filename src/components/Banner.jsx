import React from 'react'
import blob from '../assets/blob.png'
import resume from '../assets/resume.pdf'
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Banner = () => {
  return (
    <div id='home'>
        <div className="my-7 sm:my-0 max-w-[1200px] h-[88vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
            <div className="flex-col my-auto mx-auto">
                <p className="md:text-5xl sm-text-4xl text-xl font-bold text-gray-200">Hi, I am Navil</p>
                <h1 className="md:text-7xl sm-text-4xl text-xl font-bold md:py-6">
                    <TypeAnimation 
                        sequence={[
                            "Backend Dev",
                            1000,
                            "Web Developer",
                            1000,
                            "Full Stack",
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm-text-4xl text-xl font-bold text-gray-500">With 3+ Years Of Experience</p>
                </div>
                <div className="text-5xl flex justify-start gap-6 my-7 text-purple-600">
                    <a href="https://github.com/navilll" target='_blanck'><AiFillGithub/></a>
                    <a href="https://in.linkedin.com/in/navil-faisal" target='_blanck'><AiFillLinkedin/></a>
                </div>
                <a href={resume} target='_blank' title='Download CV' role='button' className="w-[190px] h-[60px] inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" download>
                    Download CV
                </a>
            </div>
            <div className="my-auto">
                <img src={blob} alt="Banner" className="w-[350px] sm:w-[500px] mx-1 h-auto rounded-full" />
            </div>
        </div>
    </div >
  )
}

export default Banner
