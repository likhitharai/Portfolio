import React from 'react'
import aboutimage from "../assets/herlikkibg.png"

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
    <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
            <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About me</h2>
            <p className='text-base lg:text-xl text-justify'>
                    I am a visionary architect of digital experiences, blending creativity with technical expertise to craft immersive 
                    user interfaces and seamless interactions. With a keen eye for design and a passion for innovation, specialized 
                    in translating complex concepts into elegant, user-friendly web applications. Equipped with a robust skill set in 
                    HTML, CSS, JavaScript and React. I am  adept at turning wireframes and mockups into responsive, pixel-perfect designs 
                    that captivate audiences across devices and platforms. I am shaping the digital landscape one pixel at a time, 
                    and pioneering the future of user-centric, immersive web experiences.
            </p>

            </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutimage} width={300} height={300} alt="About me"/>

    </div>
      
    </div>
  )
}

export default About;
