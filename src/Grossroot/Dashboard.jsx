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
      <div id='grossroot' className='duration-500 xl:h-[51rem] w-full items-center justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 overflow-hidden'>
        <div className='lg:grid lg:grid-cols-2 justify-between lg:gap-x-20 mx-auto items-center md:pt-44 overflow-hidden'>
          <div className='first items-center align-middle mx-auto md:pt-0 pt-16'>
            <img src='./Main-Circle.png' className='w-[35rem] animate-pulse items-center align-middle relative'/>
          </div>
          <div className='text-white lg:max-w-2xl'>
            <div className=''>
              <h1 className='third xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-bold'>
                About Us
              </h1>
              <p className='fourth md:pt-10 pt-3 xl:text-2xl lg:text-xl md:text-lg text-base text-white'>
                Outercircle, led by former apprentices, is reshaping the apprenticeship landscape in the UK. With firsthand experience and a passion for empowering others, we offer
                tailored support, engaging workshops, and valuable resources. Our mission is to create opportunities that enable individuals to thrive and build fulfilling careers.
              </p>
            </div>
            <div className="flex items-center md:gap-x-5 md:mt-16 pt-8 md:pt-0">
              <a href='./' className="flex bg-gradient-to-l from-[#1790E8] to-[#A04FC8] hover:bg-white hover:text-black font-semibold items-center shadow-xl rounded-r-lg md:px-8 px-5 md:py-4 py-2 text-white text-sm md:text-base mr-4">
                <PlayButton />
                <span className="ml-2">Get Started</span>
              </a>
              <a href='./' className="flex items-center bg-[#1790E8] hover:bg-white hover:text-black duration-200 font-semibold text-white md:px-8 px-3 md:py-4 py-2 rounded-r-lg text-sm md:text-base">
                <span className="ml-2">Login Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#006EAF] py-5'/>
    </>
  )
}