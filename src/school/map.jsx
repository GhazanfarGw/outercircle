import React from 'react'

export default function map() {
  return (
    <>
    <div className='bg-[#1A1F2A]'>
        <div className='max-w-screen-xl md:px-10 px-5 overflow-hidden py-16 mx-auto justify-center'>
            <div className='text-center md:pb-10 md:py-2 lg:py-20 pb-8'>
                <h1 className='lg:text-5xl md:text-5xl text-3xl font-semibold text-[#fff]'>
                    Where Are We?
                </h1>
            </div>
            <div className='md:flex items-center justify-center mx-auto'>
                <div className='lg:max-w-xl md:max-w-lg hover:scale-105 duration-300 cursor-wait'>
                    <img src='./Map-png.png' alt='map'/>
                </div>
                <div className='px-10 pt-5 md:pt-0'>
                    <p className='lg:text-4xl md:text-2xl text-center font-semibold text-wrap text-white'>
                        45 Ambassadors
                    </p>
                    <p className='lg:text-4xl md:text-2xl text-center font-medium text-wrap text-white'>
                        6 Major Cities
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
