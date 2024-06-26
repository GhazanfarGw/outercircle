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
          <div className='first items-center align-middle mx-auto md:pt-20 pt-20'>
            <img src='./Main-Circle.png' className='md:w-[32rem] w-[35rem] animate-pulse items-center align-middle relative'/>
          </div>
          <div className='text-white md:px-10'>
            <div className='lg:pt-24 pt-0'>
              <h2 className='hidden md:block lg:block second lg:text-6xl md:text-5xl text-xl tracking-wider duration-500'>
                Welcome To
                <span className='hidden md:block lg:block third pl-5 font-semibold lg:text-7xl md:text-6xl text-5xl text-white'>
                  OuterCircle
                </span>
              </h2>
              <h2 className='block md:hidden lg:hidden second lg:text-6xl md:text-5xl text-xl tracking-wider duration-500'>
                Welcome To
              </h2>
              <h1 className='block md:hidden lg:hidden third font-semibold lg:text-7xl md:text-6xl text-5xl text-white'>
                  OuterCircle
              </h1>

              <p className='fourth md:pt-10 pt-3 md:text-2xl text-base text-white md:max-w-screen-sm'>
                Empowering the growth & support of the current & next generation of Apprentices 
              </p>
            </div>
            <div className="flex items-center md:gap-x-5 md:mt-16 pt-8 md:pt-0">
              <button className="flex bg-gradient-to-l from-[#1790E8] to-[#A04FC8] items-center shadow-xl rounded-r-lg md:px-8 px-5 md:py-4 py-2 text-white text-sm font-semibold mr-4">
                <PlayButton />
                <span className="ml-2">Get Started</span>
              </button>
              <button className="flex items-center border-[#1790E8] border text-white md:px-8 px-3 md:py-4 py-2 rounded-r-lg">
                <span className="ml-2">Login Account</span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
