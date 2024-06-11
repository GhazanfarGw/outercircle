import React from 'react'
import CountUp from 'react-countup';

export default function Innumber() {
  return (
    <>
    <div className='max-w-screen-xl justify-center text-center mx-auto'>
        <div className='md:px-10 px-5 py-12'>
            <div className='flex gap-8 grid-cols-2 mx-auto justify-center items-center'>
                <img className='' width={150} src='./outercircle.png' alt='logo'/>
                <h1 className='text-5xl font-bold'>
                    Our Story
                </h1>
            </div>
            <div className='mx-auto justify-center lg:max-w-6xl md:w-full md:border-4 border-2 border-[#1790E8] my-10'>
                <video muted autoPlay loop controls playsInline width={1200} height={480}> 
                    <source src='./' type='video/mp4'/>
                </video>
            </div>
        </div>
    </div>
    </>
  )
}
