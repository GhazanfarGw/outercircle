import React from 'react'

export default function Event() {
  return (
    <>
    <div className=''>
        <div className='md:px-10 px-5 text-black py-32 items-center justify-center text-center mx-auto'>
            <h1 className='md:text-5xl text-3xl font-semibold'>
                In Person Events
            </h1>
            <div className='md:block lg:block hidden'>
                <img src='./Cricle_gr.png'/>
            </div>
            <div className='block md:hidden lg:hidden'>
                <div>
                    <img src='./circle 02.png' alt='logo'/>
                    <p className='text-sm pt-3'>
                        Sector focused events for students, tailored toward specific career paths
                    </p>
                </div>
                <div className='pt-5'>
                    <img src='./circle 03.png' alt='logo'/>
                    <p className='text-sm pt-3'>
                        Sector focused events for students, tailored toward specific career paths
                    </p>
                </div>
                <div className='pt-5'>
                    <img src='./circle 01.png' alt='logo'/>
                    <p className='text-sm pt-3'>
                        Sector focused events for students, tailored toward specific career paths
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}