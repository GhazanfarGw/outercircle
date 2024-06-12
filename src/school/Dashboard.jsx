import React from 'react'

export default function Dashboard() {
  return (
    <>
      <div id='schools' className='duration-500 xl:h-[51rem] w-full items-center justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 overflow-hidden'>
        <div className='lg:grid lg:grid-cols-2 justify-between lg:gap-x-20 mx-auto items-center md:pt-44 overflow-hidden'>
          <div className='first items-center align-middle mx-auto md:pt-0 pt-16'>
            <img src='./Main-Circle.png' className='w-[35rem] animate-pulse items-center align-middle relative'/>
          </div>
          <div className='text-white lg:max-w-2xl'>
            <div className=''>
              <h1 className='third xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-bold'>
                How We Help
              </h1>
              <p className='fourth md:text-5xl text-base text-white'>
                Schools/Colleges
              </p>
              <p className='fourth md:pt-10 pt-3 xl:text-2xl lg:text-xl md:text-lg text-base text-white'>
                Engaging presentations for student apprenticeship awareness and opportunity introduction.
              </p>
            </div>
            <div className='flex gap-3 pt-3'>
              <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
              <p className='text-white'>
                Interactive workshops to equip students with apprenticeship application skills.
              </p>
            </div>
            <div className='flex gap-3 pt-3'>
              <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
              <p className='text-white'>
                Informative sessions for key influencers about supporting student career choices.
              </p>
            </div>
            <div className='flex gap-3 pt-3'>
              <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
              <p className='text-white'>
                Parent, Teacher & Career Advisor Events/Workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#006EAF] py-5'/>
    </>
  )
}