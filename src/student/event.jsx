import React from 'react'

export default function Event() {
  return (
    <>
    <div className='max-w-screen-xl justify-center mx-auto md:px-10 px-5 pt-5'>
        <div className='text-black md:py-32 py-12 items-center justify-center text-center mx-auto'>
            <h1 className='md:text-5xl text-3xl font-semibold'>
                In Person Events
            </h1>
            <div className='md:block lg:block hidden'>
                <img className='justify-center mx-auto py-10' src='./Cricle_gr.png'/>
            </div>
            <div className='block md:hidden lg:hidden'>
                <div className='bg-[#F5F3F1] py-7 my-5'>
                    <img src='./circle 011.png' alt='logo'/>
                    <p className='font-semibold'>Sector-focused Events:</p>
                    <p className='text-base pt-3 px-5'>
                        Pailored workshops to explore specific career paths and industry insights.
                    </p>
                </div>
                <div className='pt-5 bg-[#F5F3F1] py-7 my-5'>
                    <img src='./circle 02.png' alt='logo'/>
                    <p className='font-semibold'>Skill-building Workshops:</p>
                    <p className='text-base pt-3 px-5'>
                        Preparing you for success with practical skills and application strategies.
                    </p>
                </div>
                <div className='pt-5 bg-[#F5F3F1] py-7 my-5'>
                    <img src='./circle 03.png' alt='logo'/>
                    <p className='font-semibold'>Networking Opportunities: </p>
                    <p className='text-base pt-3 px-5'>
                        Connect with mentors, peers, and professionals to boost your apprenticeship journey.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}