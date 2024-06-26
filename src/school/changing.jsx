import React from 'react'
import CountUp from 'react-countup';

export default function changing() {
  return (
    <>
    <div className='bg-[#F6F8FB]'>
        <div className='justify-center mx-auto lg:px-10 md:px-10 px-5 max-w-screen-xl md:py-28 pb-5 pt-16'>
            <h1 className='md:text-5xl text-3xl md:max-w-7xl text-center'>
                Changing the Narrative of Apprenticeships across the UK
            </h1>
            <div className='max-w-screen-lg justify-center mx-auto'>
                <div className='md:flex grid-cols-2 md:gap-x-10 items-center md:pt-10 pt-5'>
                    <div className='py-5 justify-end mx-auto px-5 block md:hidden lg:hidden'>
                        <div className='items-center text-center mx-auto rounded-full w-52 h-52 border-[18px] border-[#25F4EE]'>
                            <h1 className='flex py-12 items-center mx-auto justify-center text-center text-7xl font-bold text-[#000000]'>
                                <CountUp  start={50} end={70} duration={25.75} decimal={1}/>
                                <span className='text-2xl'>
                                    %
                                </span>
                            </h1>
                        </div>
                        <div className='w-full items-center mx-auto pt-3 px-2'>
                            <div className='mx-auto justify-center text-center'>
                                <p className='mx-auto justify-center text-xs'>
                                    Increase in Apprenticeship <br/> interest through our School Outreach
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#1790E8] md:py-20 py-7 px-5 md:px-10 rounded-lg max-w-7xl'>
                        <p className='text-white justify-center text-left md:font-semibold'>
                            Outercircle is dedicated to transforming the perceptions & narratives of apprenticeships. 
                            Through engaging workshops and insightful talks, we've boosted apprenticeship interest by an impressive 8x, opening new pathways for students across the UK.
                        </p>
                    </div>
                    <div className='py-5 justify-end mx-auto px-5 hidden md:block lg:block'>
                        <div className='items-center text-center mx-auto rounded-full w-52 h-52 border-[18px] border-[#25F4EE]'>
                            <h1 className='flex py-12 items-center mx-auto justify-center text-center text-7xl font-bold text-[#000000]'>
                                <CountUp  start={50} end={70} duration={25.75} decimal={1}/>
                                <span className='text-2xl'>
                                    %
                                </span>
                            </h1>
                        </div>
                        <div className='w-full items-center mx-auto pt-3 px-2'>
                            <div className='mx-auto justify-center text-center'>
                                <p className='mx-auto justify-center text-xs'>
                                    Increase in Apprenticeship <br/> interest through our School Outreach
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
