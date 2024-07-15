import React from 'react'

const PlayButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
  );
};

export default function Dashboard() {
  return (
    <>
      <div id='herosection' className='duration-500 min-h-screen items-center justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 overflow-hidden'>
        <div className='lg:flex justify-center mx-auto items-center md:pt-44 overflow-hidden max-w-screen-2xl'>
          <div className='first items-center align-middle mx-auto lg:pt-32 xl:pt-20 md:pt-20 pt-20'>
            <img src='./Main-Circle.png' className='w-[35rem] animate-pulse items-center align-middle relative'/>
          </div>
          <div className='text-white md:px-10'>
            <div className='xl:pt-24 lg:pt-32 pt-0'>
              <h3 className='text-nowrap flex text-white second font-semibold xl:text-6xl lg:text-5xl md:text-5xl text-xl tracking-wider duration-500'>
                Welcome To OuterCircle
              </h3>
              <p className='fourth xl:pt-12 lg:pt-8 md:pt-10 pt-3 md:text-2xl text-base text-white md:max-w-screen-sm'>
                Empowering the growth & support of the current & next generation of Apprentices 
              </p>
            </div>
            <div className='md:flex'>
              <div className="flex items-center md:gap-x-5 md:mt-16 pt-8 md:pt-0">
                <a target="_black" href='https://forms.gle/tqNcGhNhV37ABwQUA' className="flex bg-gradient-to-l from-[#1790E8] to-[#A04FC8] items-center shadow-xl rounded-r-lg md:px-8 px-5 md:py-4 py-3 text-white text-sm font-semibold mr-4">
                  <span className="ml-2">Aspiring Apprentice Community</span>
                </a>
              </div>
              <div className="flex items-center md:gap-x-5 md:mt-16 pt-3 md:pt-0">
                <a target="_black" href='https://forms.gle/5MDSH2AKdwbB9FpAA' className="flex bg-gradient-to-l from-[#1790E8] to-[#A04FC8] items-center shadow-xl rounded-r-lg md:px-5 px-5 md:py-4 py-3 text-white text-sm font-semibold mr-4">
                  <span className="ml-2">Current Apprentice Community</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
