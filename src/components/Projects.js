import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from "@material-tailwind/react";

const Projects = () => {
    return (
        <section className='bg-secondary text-white text-center' id='projects'>
            <div className='about-info text-center w-full'>
                <h2 className='my-16 text-4xl font-bold mb-5 relative inline-block'>
                    Projects
                    <span className='block absolute left-0 bottom-[-5px] w-[138px] h-[3px] bg-indigo-600'></span>
                </h2>
            </div>
            <div className='w-full mx-auto container pb-16 grid md:grid-cols-3 gap-4'>
                <div className='p-2 text-center my-5'>
                    <a href='/#some'>
                        <FontAwesomeIcon icon={faCookieBite} size='8x' />
                    </a>
                    <p>Cookie Tracker</p>
                    <div className='mt-3 w-1/2 mx-auto flex px-10 justify-between'>
                        <IconButton className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            <a href='https://moral-durian-sugt-main-66tijr526a-wm.a.run.app/part1/cookie'><FontAwesomeIcon icon={faGlobe}/></a>
                        </IconButton>
                        <IconButton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                            <a href='https://github.com/sajjadsalman/Electic---Ecommerce-Store-for-PC-build-and-buy.git'><FontAwesomeIcon icon={faCode}/></a>
                        </IconButton>
                    </div>
                </div>
                <div className=' p-2 text-center my-5'>
                    <a href='https://moral-durian-sugt-main-66tijr526a-wm.a.run.app/part3/'>
                        <FontAwesomeIcon icon={faStore} size='8x' />
                    </a>
                    <p>Electic - Ecommerce store</p>
                    <div className='mt-3 w-1/2 mx-auto flex px-10 justify-between'>
                        <IconButton className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            <a href='https://moral-durian-sugt-main-66tijr526a-wm.a.run.app/part3/'><FontAwesomeIcon icon={faGlobe}/></a>
                        </IconButton>
                        <IconButton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                            <a href='https://github.com/sajjadsalman/Electic---Ecommerce-Store-for-PC-build-and-buy.git'><FontAwesomeIcon icon={faCode}/></a>
                        </IconButton>
                    </div>
                </div>
                <div className=' p-2 text-center my-5'>
                    <a href='/#some'>
                        <FontAwesomeIcon icon={faGraduationCap} size='7x' />
                    </a>
                    <p className='pt-4'>ULearn - Online LMS</p>
                    <div className='mt-3 w-1/2 mx-auto flex px-10 justify-between'>
                        <IconButton href='https://comp466tma2.000webhostapp.com/part2/welcome.php' className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            <a href='https://comp466tma2.000webhostapp.com/part2/welcome.php'><FontAwesomeIcon icon={faGlobe}/></a>
                        </IconButton>
                        <IconButton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                            <a href='https://github.com/sajjadsalman/-Online-LMS-ULearn---Learning-Management-System.git'><FontAwesomeIcon icon={faCode}/></a>
                        </IconButton>
                    </div>
                </div>
                <div className=' p-2 text-center my-5'>
                    <a href='/#some'>
                        <FontAwesomeIcon icon={faBookBookmark} size='8x' />
                    </a>
                    <p>Bookmark Manager</p>
                    <div className='mt-3 w-1/2 mx-auto flex px-10 justify-between'>
                        <IconButton href='https://comp466tma2.000webhostapp.com/part1/' className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            <a href='https://comp466tma2.000webhostapp.com/part1/'><FontAwesomeIcon icon={faGlobe}/></a>
                        </IconButton>
                        <IconButton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                            <a href='https://github.com/sajjadsalman/-Online-LMS-ULearn---Learning-Management-System.git'><FontAwesomeIcon icon={faCode}/></a>
                        </IconButton>
                    </div>
                </div>
                <div className=' p-2 text-center my-5'>
                    <a href='/#some'>
                        <FontAwesomeIcon icon={faVideo} size='8x' />
                    </a>
                    <p>Slideshow App</p>
                    <div className='w-1/2 mx-auto mt-3 flex px-10 justify-between'>
                        <IconButton className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            <a href='https://moral-durian-sugt-main-66tijr526a-wm.a.run.app/part2/slideshow'><FontAwesomeIcon icon={faGlobe}/></a>
                        </IconButton>
                        <IconButton className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
                            <a href='https://github.com/sajjadsalman/Electic---Ecommerce-Store-for-PC-build-and-buy.git'><FontAwesomeIcon icon={faCode}/></a>
                        </IconButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
