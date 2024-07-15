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
      <div id='employers' className='duration-500 xl:h-[51rem] w-full items-center justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 overflow-hidden'>
        <div className='lg:grid lg:grid-cols-2 justify-between lg:gap-x-20 mx-auto items-center md:pt-44 overflow-hidden'>
          <div className='first items-center align-middle mx-auto md:pt-0 pt-16'>
            <img src='./Main-Circle.png' className='w-[35rem] animate-pulse items-center align-middle relative'/>
          </div>
          <div className='text-white lg:max-w-2xl'>
            <div className=''>
              <h2 className='third xl:text-7xl lg:text-6xl md:text-5xl text-xl'>
                Find the Next Future
              </h2>
              <h1 className='third text-white lg:pt-3 font-semibold lg:text-7xl md:text-6xl text-5xl'>
                Leaders
              </h1>
              <p className='fourth md:pt-10 pt-3 xl:text-2xl lg:text-xl md:text-lg text-base text-white'>
                Supporting employers by offering access to untapped, diverse talent and grassroots initiatives, fostering mutual growth and success.
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
      <div className='bg-[#006EAF] py-5'/>
    </>
  )
}