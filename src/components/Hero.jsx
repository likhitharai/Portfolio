import React from 'react';
import heroimage from '../assets/likkiheroblue.png'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className=' col-span-1 my-auto mx-auto'>
            <div className='w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt="heroimage"/>
            <h1>Hello</h1>
            </div>
        </div>
        <div className='col-span-2 px-5'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span> <br />
                <TypeAnimation
                sequence={
                    [
                        "Frontend Dev", 1000,
                        "Web Designer", 1000,
                        "Content Writer", 1000,
                        "Software Engineer", 1000,
                        "Great friend", 1000
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity} />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
            Hello! My name is Likhitha Rai and I am software engineer.<br /> I have great interest in front end design and development.
            </p>

            <div className='my-8'>
                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-blue-400 to-purple-800'>
                        Download CV
                    </a>

                    <a href="/" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-blue-400 to-purple-800
                    text-white hover:border-none'>
                        Contact
                    </a>
            </div>
        </div>
    </div>
    
  )
}

export default Hero
