import React from 'react'
import CountUp from 'react-countup';

export default function Innumber() {
  return (
    <>
    <div className='bg-[#1A1F2A]'>
        <div className='max-w-screen-xl justify-center text-center mx-auto pb-20 pt-5 md:pt-10'>
            <div className='md:px-10 px-5 py-12'>
                <div className='flex md:gap-8 gap-x-4 md:grid-cols-2 mx-auto justify-center items-center'>
                    <img className='w-20' src='./outercircle.png' alt='logo'/>
                    <h1 className='md:text-5xl text-3xl font-semibold text-[#fff]'>
                        Our Impact
                    </h1>
                </div>
                <div className='lg:grid lg:grid-cols-3 pt-5 grid grid-cols-2 mx-auto justify-center gap-3 text-center max-w-screen-lg'>
                    <div className='md:pt-20 py-4 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-4xl font-bold justify-center text-[#fff] hover:text-[#1E4579]'>
                            <CountUp  start={2000} end={5000} duration={25.75} decimal={1}/>
                            <span className='text-xl pl-1'>
                                +
                            </span>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            Students in our Network
                        </p>
                    </div>
                    <div className='md:pt-20 py-4 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-4xl font-bold justify-center text-[#fff] hover:text-[#1790E8]'>
                            <CountUp start={50} end={75} duration={25.75} decimal={1}/>
                            <span className='text-xl pl-1'>
                                %
                            </span>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            of Audience are Ethnic Minorities
                        </p>
                    </div>
                    <div className='md:pt-20 md:py-4 py-2 md:px-9 px-2'>
                        <h1 className='text-2xl lg:text-4xl font-bold justify-center hover:text-[#1790E8] text-[#fff]'>
                            <CountUp start={50} end={70} duration={25.75} decimal={1}/>
                            <span className='text-xl pl-1'>
                                %
                            </span>
                        </h1>
                        <p className='pt-4 text-xs md:text-base text-[#fff]'>
                            Increase in employer brand visibility
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <div className='md:-mt-72 -mt-24 mx-5 md:mx-auto justify-center lg:max-w-6xl md:w-full md:border-4 border-4 border-[#1790E8] my-10'>
        <video muted autoPlay loop controls playsInline width={1200} height={480}> 
            <source src='./how_we.mp4' type='video/mp4'/>
        </video>
    </div> */}

    </>
  )
}
