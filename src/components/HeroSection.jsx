import React from 'react'
import arrow from '../assets/arrow.svg'
import robo from '../assets/robo.png'

const HeroSection = () => {
    return (
        <div className=' container flex justify-evenly items-center max-w-full min-h-screen bg-black text-white'>
            <div>
            <h1 className='text-7xl'>
                We develop <br />
                <span className='bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text'> amazing </span>
                <span className="animate-typing text-7xl text-white "> websites </span> <br /> for your business<span className='bg-gradient-to-r from-indigo-500 to-blue-500 text-transparent bg-clip-text '>.</span>
            </h1>
            <p className='mt-10 max-w-4xl ' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Tempore ducimus quae quas suscipit obcaecati cumque, voluptates ipsa veritatis reiciendis, <br /> tenetur culpa vero nesciunt, eum impedit. Facere sit dolor impedit reprehenderit.
            </p>
            <button className='border-gray-800 border-2 py-2 px-2 mt-8 rounded-md font-bold hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-violet-300'>View More <img src={arrow} alt="" className='w-6 mb-1 inline'/></button>
            </div>
            <div className=''>
                <img src={robo} alt="robo" />
            </div>
        </div>
    )
}

export default HeroSection