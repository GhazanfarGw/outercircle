import React from 'react'

export default function Dashboard() {
  return (
    <>
      <div id='schools' className='duration-500 min-h-screen w-full items-center justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 overflow-hidden'>
          <div className='lg:grid lg:grid-cols-2 justify-between lg:gap-x-20 mx-auto items-center md:pt-44 overflow-hidden'>
            <div className='first items-center align-middle mx-auto md:pt-20 pt-24'>
              <img src='./Main-Circle.png' className='w-[35rem] animate-pulse items-center align-middle relative'/>
            </div>
            <div className='text-white lg:max-w-2xl'>
              <div className='lg:pt-28 pt-3'>
                <h1 className='third lg:pt-3 lg:text-7xl md:text-6xl text-5xl font-bold'>
                  How We Help
                </h1>
                <p className='fourth md:text-5xl text-base'>
                  Schools/Colleges
                </p>
                <div className='flex gap-3 pt-10'>
                  <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
                  <p className=''>
                    Engaging presentations for student apprenticeship awareness and opportunity introduction.
                  </p>
                </div>
                <div className='flex gap-3 pt-3'>
                  <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
                  <p className=''>
                    Interactive workshops to equip students with apprenticeship application skills.
                  </p>
                </div>
                <div className='flex gap-3 pt-3'>
                  <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
                  <p className=''>
                    Informative sessions for key influencers about supporting student career choices.
                  </p>
                </div>
                <div className='flex gap-3 pt-3'>
                  <img className='w-10 h-10' src='./icons/icons8-like-100.png' alt='logo'/>
                  <p className=''>
                    Parent, Teacher & Career Advisor Events/Workshops.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}