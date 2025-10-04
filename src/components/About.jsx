import React from 'react'
import about from '../assets/about.jpeg'

const About = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id='about'>
        <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 px-10 max-w-6xl mx-auto m-12">
            <div>
                <div className="w-[300px] h-full">
                    <img src={about} className='object-cover rounded-xl h-[300px] filter brigtness-50 mt-4' />
                </div>
            </div>

            <div>
                <div className="p-2">
                    <div className="text-gray-300 my-3">
                        <h3 className='text-4xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
                        <p className="text-justify leading-7 w-11/12 mx-auto">
                            Web developer with over 3+ years of experience analyzing, designing, developing,
                            and integrating front-end & back-end-based applications, Possesses knowledge
                            of web of web applications using HTML, CSS, JavaScript, Laravel, and PHP. 
                            Eager to tackle challenging projects, having led teams and successfully 
                            deployed innovative web applications, positively impacting business growth
                            and user engagement.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-10">
                    <div className="bg-[#333333] p-5 rounded-lg flex flex-col items-center justify-center">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        15<span>+</span>
                        </h3>
                        <p className="md:text-base text-sm text-center">Projects</p>
                    </div>

                    <div className="bg-[#333333] p-5 rounded-lg flex flex-col items-center justify-center">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        3<span>+</span>
                        </h3>
                        <p className="md:text-base text-sm text-center">Years of Experience</p>
                    </div>

                    <div className="bg-[#333333] p-5 rounded-lg flex flex-col items-center justify-center">
                        <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        10<span>+</span>
                        </h3>
                        <p className="md:text-base text-sm text-center">Programming Skills</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
