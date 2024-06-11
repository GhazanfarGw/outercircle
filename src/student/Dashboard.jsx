import React from 'react'

export default function Dashboard() {
  return (
    <>
      <div id='student' className='duration-500 min-h-screen w-full items-center justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 overflow-hidden'>
          <div className='lg:grid lg:grid-cols-2 justify-between lg:gap-x-20 mx-auto items-center md:pt-44 overflow-hidden'>
            <div className='first items-center align-middle mx-auto md:pt-20 pt-24'>
              <img src='./Main-Circle.png' className='w-[35rem] animate-pulse items-center align-middle relative'/>
            </div>
            <div className='text-white lg:max-w-2xl'>
              <div className='lg:pt-28 pt-3'>
                <h1 className='third lg:pt-3 lg:text-7xl md:text-6xl text-5xl font-semibold'>
                  Aspiring Apprentices
                </h1>
                <p className='fourth md:pt-16 pt-5 md:text-2xl text-base'>
                  Empowering Aspiring Apprentices through comprehensive support services tailored to their needs and career aspirations.
                </p>
                <div className='five flex grid-cols-2 md:gap-10 gap-3 mx-auto items-center py-10'>
                  <div className='flex items-center shadow-inner hover:animate-pulse rounded-lg'>
                    <div className='w-11 px-2 md:py-3 py-2 bg-white rounded-l-lg'>
                      <img src='./icons/icons8-play-100.png' alt='icons'/>
                    </div> 
                    <button className='bg-[#A04FC8] shadow-xl rounded-r-lg md:px-8 px-6 md:py-4 py-3 text-white text-sm font-semibold' type='button'>Get Started</button>
                  </div>
                  <div className='border-[#1091E9] border-2 bg-black bg-opacity-40 md:py-3 md:px-8 py-2 px-6 rounded-lg'>
                    <button className='text-sm font-semibold text-white' type='button'>Login Account</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}