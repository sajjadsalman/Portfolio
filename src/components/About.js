import React from 'react'
import AboutImg from '../assets/simon-lee-hbFKxsIqclc-unsplash-PhotoRoom.png'

const About = () => {
    return (
        <section className='bg-secondary text-white' id="about">
            <div>
                <div className='container text-center grid md:grid-cols-2 items-center md:justify-center'>
                    <div className='hero-img py-16'>
                        <img className="w-1/3 h-1/3 mx-auto" src={AboutImg} alt='Coding Illustration' />
                    </div>
                    <div className='my-16 mx-10 about-info'>
                        <h2 className='text-4xl font-bold mb-5 relative inline-block'>
                            About Me
                            <span className='block absolute left-0 bottom-[-5px] w-[162px] h-[3px] bg-indigo-600'></span>
                        </h2>
                        <p className='pt-5'>I have come from Pakistan to study at the University of Waterloo. I recently graduated with a bachelor's degree in Computer Science. During my undergraduate years, I gained significant experience through various co-op jobs. I am a full-stack developer and am currently seeking a full-time job.</p>
                        <p className='pt-5'> I want to work in a place where I'll have the chance to expand my skillset and broaden my horizons. A place where my current skills will be put to good use.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
