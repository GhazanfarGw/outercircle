import React from 'react'
import CountUp from 'react-countup';

export default function Innumber() {
  return (
    <>
    <div className='bg-[#1A1F2A]'>
        <div className='max-w-screen-xl justify-center text-center mx-auto md:pb-72 pb-20 pt-5 md:pt-28'>
            <div className='md:px-10 px-5 py-12'>
                <div className='flex md:gap-8 gap-x-4 md:grid-cols-2 mx-auto justify-center items-center'>
                    <img className='w-20' src='./outercircle.png' alt='logo'/>
                    <h1 className='md:text-6xl text-3xl font-semibold text-[#fff]'>
                        Our Network
                    </h1>
                </div>
                <div className='lg:grid lg:grid-cols-4 pt-5 grid grid-cols-2 mx-auto justify-center gap-3 text-center max-w-screen-lg'>
                    <div className='md:pt-20 py-4 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-5xl font-bold justify-center text-[#fff] hover:text-[#1E4579]'>
                            <CountUp  start={1000} end={2000} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            Aspiring & Current Apprentices Supported
                        </p>
                    </div>
                    <div className='md:pt-20 py-4 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-5xl font-bold justify-center text-[#fff] hover:text-[#1790E8]'>
                            <CountUp start={100} end={200} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            School Partner Opportunities
                        </p>
                    </div>
                    <div className='md:pt-20 md:py-4 py-2 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-5xl font-bold justify-center hover:text-[#1790E8] text-[#fff]'>
                            <CountUp start={1} end={15} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            Successful Recruitment Partnership
                        </p>
                    </div>
                    <div className='md:pt-20 md:py-4 py-2 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-5xl font-bold justify-center hover:text-[#1790E8] text-[#fff]'>
                            <CountUp start={10} end={40} duration={25.75} decimal={1} prefix="+"/>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            Events and Workshops Hosted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*     <div className='md:-mt-72 -mt-24 mx-5 md:mx-auto justify-center lg:max-w-6xl md:w-full md:border-4 border-4 border-[#1790E8] my-10'>
        <video muted autoPlay loop controls playsInline width={1200} height={480}> 
            <source src='./how_we.mp4' type='video/mp4'/>
        </video>
    </div> */}

    </>
  )
}
