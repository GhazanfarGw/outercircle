import React from 'react'
import CountUp from 'react-countup';

export default function Innumber() {
  return (
    <>
    <div className='bg-[#F5F3F1]'>
        <div className='max-w-screen-xl justify-center text-center mx-auto'>
            <div className='md:px-10 px-5 py-12'>
                <div className='flex md:gap-8 gap-x-4 md:grid-cols-2 mx-auto justify-center items-center'>
                    <img className='w-20' src='./outercircle.png' alt='logo'/>
                    <h1 className='md:text-5xl text-3xl font-semibold'>
                        Our Network
                    </h1>
                </div>
                <div className='lg:grid lg:grid-cols-4 pt-5 grid grid-cols-2 mx-auto justify-center gap-3 text-center max-w-screen-lg'>
                    <div className='md:pt-20 py-4 md:px-9 px-2'>
                        <h1 className='text-3xl lg:text-4xl font-bold justify-center text-[#1790E8] hover:text-[#1E4579]'>
                            <CountUp  start={1000} end={2000} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                            Aspiring & Current Apprentices Supported
                        </p>
                    </div>
                    <div className='md:pt-20 py-4 md:px-9 px-2'>
                        <h1 className='text-3xl lg:text-4xl font-bold justify-center hover:text-[#1790E8]'>
                            <CountUp start={100} end={200} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                            School Partner Opportunities
                        </p>
                    </div>
                    <div className='md:pt-20 md:py-4 py-2 md:px-9 px-2'>
                        <h1 className='text-3xl lg:text-4xl font-bold justify-center hover:text-[#1790E8]'>
                            <CountUp start={1} end={15} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                            Successful Recruitment Partnership
                        </p>
                    </div>
                    <div className='md:pt-20 md:py-4 py-2 md:px-9 px-2'>
                        <h1 className='text-3xl lg:text-4xl font-bold justify-center hover:text-[#1790E8]'>
                            <CountUp start={10} end={40} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                            Events and Workshops Hosted
                        </p>
                    </div>
                </div>
                <div className='mx-auto justify-center lg:max-w-6xl md:w-full md:border-4 border-4 border-[#1790E8] my-10'>
                    <video muted autoPlay loop controls playsInline width={1200} height={480}> 
                        <source src='./how_we.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>

    </div>

    </>
  )
}
