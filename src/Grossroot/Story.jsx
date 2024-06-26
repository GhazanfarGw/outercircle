import React from 'react'

export default function Story() {
  return (
    <>
    <div className='max-w-screen-xl justify-center text-center mx-auto pt-16 md:pt-32'>
        <div className='md:px-10 px-5 md:py-12'>
            <div className='flex md:gap-x-8 gap-x-2 grid-cols-2 mx-auto justify-center items-center'>
                <img className='w-14 md:w-20' src='./outercircle.png' alt='logo'/>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                    Our Story
                </h1>
            </div>
            <div className='mx-auto md:mt-20 justify-center lg:max-w-6xl md:w-full md:border-4 border-2 border-[#1790E8] my-10'>
                <img src='./Inperson event middle circle image.png' alt='image'/>
            </div>
        </div>
    </div>
    </>
  )
}
