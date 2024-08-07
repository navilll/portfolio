
import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        company: 'MediaTenz',
        period: '2023 - 2024',
        description: 'MEDIATRENZ is a leading ROI-driven SEO company in India that help you rank high on search engine results. We also ensure that your company has an excellent reputation on the internet so that people looking for it online will only come across positive information.',
      },
      {
        company: 'WebReinvent',
        period: '2024 - Present',
        description: 'WebReinvent is a software development company that provides a range of end-to-end software product development services. We have delivered MVP to enterprise-level web applications from startup to MSME.',
      },
]



const Experience = () => {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id='experience'>
        <div className='p-3 max-w-[900px] mx-auto '>
            <div className="mx-auto px-4 md:px-9">
                <div className=" flex items-center justify-between gap-8">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl lg:text-3xl text-white m-12">
                            <span>Experience</span>
                        </h2>
                    </div>
                </div>
            </div>
            <motion.div
            className='space-y-8'
            initial="hidden"
            animate="visible"
            >
                {experiences.map((experience, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3}}
                        transition={{ duration: 1}}
                        className=' border border-[#A3099C] rounded-lg p-6 shadow-md
                        hover:shadow-xl transition-shadow duration-300 bg-gray-700/20'
                    >
                        <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                        <p className='text-gray-300'>{experience.period}</p>
                        <p className='text-gray-400 mt-4'>{experience.description}</p>


                    </motion.div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Experience
