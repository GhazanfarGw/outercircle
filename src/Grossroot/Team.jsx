import React from 'react'

export default function Team() {
  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
        <div className='md:px-10 px-5 py-20 justify-center text-center mx-auto'>
            <h1 className='md:text-5xl text-xl md:max-w-7xl text-center'>
                Meet the
            </h1>
            <div className='md:text-5xl text-3xl md:max-w-7xl font-semibold flex gap-3 items-center justify-center mx-auto text-center pt-3'>
                <span>
                    OuterCircle
                </span>
                <img className='items-center w-16' src='./outercircle.png' alt='logo'/>
                <span>Team</span>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 md:gap-0 gap-5 pb-8 py-20'>
                <div className='items-center mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-2 border-[#1790E8]'>
                    <div className='md:h-48 md:w-48 hover:scale-105 duration-200 items-center text-center mx-auto'>
                        <img className='items-center text-center mx-auto py-3 md:w-auto' src='./icons/teams.png' alt='icons'/>
                    </div>
                    <p className='text-center md:pt-5 py-2 md:font-bold md:text-base text-sm'>
                        Support Employers
                    </p>
                </div>
                <div className='items-center mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-2 border-[#1790E8]'>
                    <div className='md:h-48 md:w-48 hover:scale-105 duration-200 items-center text-center mx-auto'>
                        <img className='items-center text-center mx-auto py-3 md:w-auto' src='./icons/teams.png' alt='icons'/>
                    </div>
                    <p className='text-center md:pt-5 py-2 md:font-bold md:text-base text-sm'>
                        Support Employers
                    </p>
                </div>
                <div className='items-center mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-2 border-[#1790E8]'>
                    <div className='md:h-48 md:w-48 hover:scale-105 duration-200 items-center text-center mx-auto'>
                        <img className='items-center text-center mx-auto py-3 md:w-auto' src='./icons/teams.png' alt='icons'/>
                    </div>
                    <p className='text-center md:pt-5 py-2 md:font-bold md:text-base text-sm'>
                        Support Employers
                    </p>
                </div>
                <div className='items-center mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-2 border-[#1790E8]'>
                    <div className='md:h-48 md:w-48 hover:scale-105 duration-200 items-center text-center mx-auto'>
                        <img className='items-center text-center mx-auto py-3 md:w-auto' src='./icons/teams.png' alt='icons'/>
                    </div>
                    <p className='text-center md:pt-5 py-2 md:font-bold md:text-base text-sm'>
                        Support Employers
                    </p>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
