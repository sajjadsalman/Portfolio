import React from 'react';
import Typed from 'react-typed';
import Resume from '../assets/Muhammad_Resume.pdf'

const Hero = () => {
  return (
    <div className='bg-primary text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='font-bold mt-18 p-2'>
          University of Waterloo
        </p>
        <h2 className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-bold md:text-5xl sm:text-6xl text-4xl md:py-6'>
          Muhammad Sajjad Salman
        </h2>
        <div className='flex justify-center items-center'>
          <Typed
          className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent md:text-3xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Software Developer', 'Full-stack Developer', 'Back-end Developer', 'Front-end Developer']}
            typeSpeed={150}
            backSpeed={170}
            loop
          />
        </div>
        <a href={Resume} className='bg-[#EAB308] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Resume</a>
      </div>
    </div>
  );
};

export default Hero;

// import React from 'react'
// import HeroImg from '../assets/maxim-berg-3E2xgrlNXq4-unsplash-removebg-preview.png'
// import Resume from '../assets/Muhammad_Resume.pdf'


// const Hero = () => {
//   return (
//     <section className='bg-primary text-white'>
//         <div>
//             <div className='container mx-auto grid md:grid-cols-2 items-center md:justify-center'>
//                 <div className='my-16 hero-info'>
//                     <h1 className='lg:text-5xl ml-20'>
//                         Hi, <br/>
//                         I am <span className='text-accent'>R</span>ana<br/>
//                         Full-stack Developer
//                     </h1>
//                     <p className='pt-5 ml-20'>* My name is <span className='text-accent'>Muhammad Sajjad Salman</span> but people call me Rana.</p>
//                     <button class="ml-20 mt-3 group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600">
//                         <span class="text-sm text-white"><a href={Resume} download>Resume</a></span>
//                         <div class="flex items-center -space-x-3 translate-x-3">
//                             <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
//                             </svg>
//                         </div>
//                     </button>
//                 </div>
//                 <div className='hero-img'>
//                     <img className="mx-auto" src={HeroImg} alt='Coding Illustration'/>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero
