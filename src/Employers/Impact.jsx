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
                    Our Impact
                </h1>
            </div>
            <div className='lg:grid lg:grid-cols-3 grid grid-cols-2 mx-auto justify-center gap-3 text-center max-w-screen-lg'>
                <div className='md:pt-20 py-4 md:px-9 px-2'>
                    <h1 className='text-2xl lg:text-4xl font-bold justify-center text-[#1790E8] hover:text-[#1E4579]'>
                        <CountUp  start={2000} end={5000} duration={25.75} decimal={1}/>
                        <span className='text-xl pl-1'>
                            +
                        </span>
                    </h1>
                    <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                        Students in our Network
                    </p>
                </div>
                <div className='md:pt-20 py-4 md:px-9 px-2'>
                    <h1 className='text-2xl lg:text-4xl font-bold justify-center hover:text-[#1790E8]'>
                        <CountUp start={50} end={75} duration={25.75} decimal={1}/>
                        <span className='text-xl pl-1'>
                            %
                        </span>
                    </h1>
                    <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                        of Audience are Ethnic Minorities
                    </p>
                </div>
                <div className='md:pt-20 py-4 md:px-9 px-2'>
                    <h1 className='text-2xl lg:text-4xl font-bold justify-center hover:text-[#1790E8]'>
                        <CountUp start={50} end={70} duration={25.75} decimal={1}/>
                        <span className='text-xl pl-1'>
                            %
                        </span>
                    </h1>
                    <p className='md:text-base text-xs text-[#000] font-semibold pt-4'>
                        Increase in employer brand visibility
                    </p>
                </div>
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
