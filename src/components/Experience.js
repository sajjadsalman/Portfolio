import React, { useState } from 'react'
import HomeTrust from '../assets/ugnf7swdq0xeyxnatg1b.webp'
import Vidyard from '../assets/vidyard.webp'
import EI from '../assets/504-5041701_economical-insurance-logo-economical-insurance-group-logo-hd-removebg-preview.png'
import Port from '../assets/Screen Shot 2023-10-01 at 1.19.35 AM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    const[showTab, setShowTab] = useState(1);

  return (
    <section className='bg-primary text-center text-white' id='experience'>
            <div className='container mx-auto p-16'>
                <h2 className='text-4xl font-bold mb-5 relative inline-block'>
                    Work Experience
                    <span className='block absolute left-0 bottom-[-5px] w-[282px] h-[3px] bg-indigo-600'></span>
                </h2>
            </div>
            <div class="flex text-center mx-auto  w-full md:w-1/2">
                <div class="flex-1 h-10">
                    <button type="button" onClick={() => setShowTab(1)} class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">1</button>
                    {/* <button type="button" onClick={() => setShowTab(1)} class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button> */}
                </div>
                <div class="flex-1 h-10">
                    <button type="button" onClick={() => setShowTab(2)} class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">2</button>
                    {/* <button type="button" onClick={() => setShowTab(2)} class="bg-gradient-to-r from-sky-500 to-indigo-500 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button> */}
                </div>
                <div class="flex-1 h-10">
                    <button type="button" onClick={() => setShowTab(3)} class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">3</button>
                </div>
                <div class="flex-1 h-10">
                <button type="button" onClick={() => setShowTab(4)} class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">4</button>
                </div>
            </div>
        {
            showTab===1 && 
            <div className='text-white'>
                <div className='container grid md:grid-cols-2 items-center md:justify-center'>
                    <div className='hero-img py-16 flex flex-col items-center'>
                        <img className="w-1/3 h-1/3" src={HomeTrust} alt='Coding Illustration' />
                        <h2 className='mt-3 text-center text-lg font-bold mb-3 relative inline-block'>
                            Home Trust Company
                            <span className='block absolute left-0 bottom-[-5px] w-[186px] h-[3px] bg-indigo-600'></span>
                        </h2>
                    </div>

                    <div className='my-16 mx-10 about-info'>
                        <h2 className='text-lg font-bold mb-3 relative inline-block'>
                            <FontAwesomeIcon icon={faBriefcase}/>  Full-stack Developer
                            <span className='block absolute left-0 bottom-[-5px] w-[201px] h-[3px] bg-indigo-600'></span>
                        </h2>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faCalendarDays}/> Jan 2021 – Jul 2022 </h4>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faMapLocationDot}/> Toronto, ON, CA</h4>
                        <ul className='list-disc'>
                            <li>Developed Dynamic Forms in Django Python, optimizing data collection, increasing efficiency by 40% and enhancing user experience.</li>
                            <li>Implemented responsive and interactive user interfaces using Angular, HTML, CSS, and JavaScript, leading to a 40% reduction in bounce rate</li>
                            <li>Designed and built RESTful services using ASP.NET Web API to provide data to the Angular front‑end, enabling 20% faster page load time</li>
                            <li>Managed and optimized SQL Server and Entity Framework, achieving a 20% query performance boost</li>
                            <li>Enhanced database performance using advanced technologies like PostgreSQL and MongoDB, resulting in a 30% reduction in query time</li>
                        </ul>
                    </div>
                </div>
            </div>
        }
        {
            showTab===2 && 
            <div className='text-white'>
                <div className='container grid md:grid-cols-2 items-center md:justify-center'>
                    <div className='hero-img py-16 flex flex-col items-center'>
                        <img className="w-1/3 h-1/3" src={Vidyard} alt='Coding Illustration' />
                        <h2 className='mt-3 text-center text-lg font-bold mb-3 relative inline-block'>
                            Vidyard
                            <span className='block absolute left-0 bottom-[-5px] w-[68px] h-[3px] bg-indigo-600'></span>
                        </h2>
                    </div>
                    <div className='my-16 mx-10 about-info'>
                        <h2 className='text-lg font-bold mb-3 relative inline-block'>
                            <FontAwesomeIcon icon={faBriefcase}/>  Full-stack Developer
                            <span className='block absolute left-0 bottom-[-5px] w-[201px] h-[3px] bg-indigo-600'></span>
                        </h2>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faCalendarDays}/> Jan 2019 – Apr 2019 </h4>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faMapLocationDot}/> Kitchener, ON, CA</h4>
                        <ul className='list-disc'>
                            <li>Played an integral role in the advancement of Vidyard’s cutting‑edge video analytics platform, catering to a diverse user base of 12.5 million, by architecting, developing, and optimizing critical features</li>
                            <li>Contributed to the creation of a robust RESTful API layer using Python and Flask, allowing seamless integration of video analytics data into client applications. This enhanced data accessibility and resulted in a 40% increase in third‑party integrations</li>
                            <li>Employed machine learning techniques, including natural language processing, to develop a sentiment analysis module that evaluated viewer comments and feedback and this yielded insights for content creators, and improved overall user satisfaction by 60%</li>
                            <li>Initiated the adoption of containerization using Docker and Kubernetes for Vidyard’s microservices architecture, leading to a 35% reduction in deployment time and ensuring seamless scalability to support daily API request</li>
                        </ul>
                    </div>
                </div>
            </div>
        }
        {
            showTab===3 && 
            <div className='text-white'>
                <div className='container grid md:grid-cols-2 items-center md:justify-center'>
                    <div className='hero-img py-16 flex flex-col items-center'>
                        <img className="w-1/3 h-1/3" src={EI} alt='Coding Illustration' />
                        <h2 className='mt-3 text-center text-lg font-bold mb-3 relative inline-block'>
                            Economical Insurance
                            <span className='block absolute left-0 bottom-[-5px] w-[188px] h-[3px] bg-indigo-600'></span>
                        </h2>
                    </div>

                    <div className='my-16 mx-10 about-info'>
                        <h2 className='text-lg font-bold mb-3 relative inline-block'>
                            <FontAwesomeIcon icon={faBriefcase}/>  Back-end Developer
                            <span className='block absolute left-0 bottom-[-5px] w-[197px] h-[3px] bg-indigo-600'></span>
                        </h2>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faCalendarDays}/> May 2018 – Aug 2018 </h4>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faMapLocationDot}/> Waterloo, ON, CA</h4>
                        <ul className='list-disc'>
                            <li>Developed and maintained a high‑traffic e‑commerce website using ASP.NET MVC and Angular, resulting in a 30% increase in user engagement</li>
                            <li>Contributed to the development of an internal insurance management system using Node.js and React, enabling efficient policy handling, claims processing, and client interactions, ultimately optimizing operations and enhancing customer service within the insurance firm.</li>
                            <li>Implemented responsive design principles, resulting in a 20% increase in user engagement and a 15% decrease in bounce rates, leading to improved user satisfaction and retention</li>
                            <li>Managed and optimized SQL Server and Entity Framework, achieving a 20% query performance boost</li>
                            <li>Resolved 70% of backlogged tickets regarding complex problems in both Angular and ASP.NET, enhancing application stability and reducing bug reports by 80% in 4 months</li>
                        </ul>
                    </div>
                </div>
            </div>
        }
        {
            showTab===4 && 
            <div className='text-white'>
                <div className='container grid md:grid-cols-2 items-center md:justify-center'>
                    <div className='hero-img py-16 flex flex-col items-center'>
                        <img className="w-1/3 h-1/3" src={Port} alt='Coding Illustration' />
                        <h2 className='mt-3 text-center text-lg font-bold mb-3 relative inline-block'>
                            Port Transit
                            <span className='block absolute left-0 bottom-[-5px] w-[101px] h-[3px] bg-indigo-600'></span>
                        </h2>
                    </div>

                    <div className='my-16 mx-10 about-info'>
                        <h2 className='text-lg font-bold mb-3 relative inline-block'>
                            <FontAwesomeIcon icon={faBriefcase}/>  iOS Developer
                            <span className='block absolute left-0 bottom-[-5px] w-[144px] h-[3px] bg-indigo-600'></span>
                        </h2>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faCalendarDays}/> May 2017 – Aug 2017 </h4>
                        <h4 className='text-lg text-slate-500 font-bold mb-3'><FontAwesomeIcon icon={faMapLocationDot}/> Kitchener, ON, CA</h4>
                        <ul className='list-disc'>
                            <li>Enhanced engagement by integrating push notifications via Apple’s APNs framework, yielding a 30% increase in interactions</li>
                            <li>Employed Core Animation alongside dynamic UIKit Dynamics, achieving a 20% rise in interaction rates</li>
                            <li>Directed the migration of the app’s codebase to Swift, resulting in a 15% reduction in crashes and improved maintainability</li>
                            <li>Strategically conducted A/B tests with Firebase, leading to a 10% boost in ride‑booking conversion rates and revenue growth</li>
                            <li>Collaborated closely with UX to refine the app’s navigation, reducing user drop‑offs by 25% during booking process</li>
                        </ul>
                    </div>
                </div>
            </div>
        }
    </section>
  )
}

export default Experience
