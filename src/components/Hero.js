import React from 'react'
import HeroImg from '../assets/maxim-berg-3E2xgrlNXq4-unsplash-removebg-preview.png'
import Resume from '../assets/Muhammad_Resume.pdf'


const Hero = () => {
  return (
    <section className='bg-primary text-white'>
        <div>
            <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-center'>
                <div className='my-16 hero-info'>
                    <h1 className='text-2xl lg:text-6xl ml-20'>
                        Hi, <br/>
                        I am <span className='text-accent'>R</span>ana<br/>
                        Full-stack Developer
                    </h1>
                    <p className='pt-5 ml-20'>I am proficient in React.js and Tailwind CSS</p>
                    <button class="ml-20 mt-3 group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
                        <span class="text-sm text-white"><a href={Resume} download>Resume</a></span>
                        <div class="flex items-center -space-x-3 translate-x-3">
                            <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className='hero-img'>
                    <img className="mx-auto" src={HeroImg} alt='Coding Illustration'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
