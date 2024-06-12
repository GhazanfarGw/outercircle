import React from 'react'
import CountUp from 'react-countup';

export default function changing() {
  return (
    <>
    <div className='duration-500 items-center justify-center mx-auto py-32'>
        <div className='justify-center mx-auto lg:px-10 md:px-10 sm:px-5 px-5 pb-10 max-w-screen-xl'>
            <h1 className='text-center justify-center mx-auto text-5xl font-semibold tracking-wider max-w-2xl'>
                Changing the Narrative of Apprenticeships across the UK
            </h1>
            <div className='grid grid-cols-2 mx-auto justify-center items-center pt-20'>
                <div className='w-full items-center mx-auto pt-5 px-2'>
                    <div className=''>
                        <div className='md:h-44 md:w-44 h-28 w-28 rounded-full md:border-[1.1rem] border-4 duration-200 hover:border-opacity-80 border-r-[#41B8D5] border-l-[#6CE5E8] border-y-[#41B8D5] items-center text-center mx-auto'>
                            <h1 className='flex items-center mx-auto justify-center text-center py-9 text-6xl font-bold text-[#000000]'>
                                <CountUp  start={50} end={70} duration={25.75} decimal={1}/>
                                <span className='text-2xl'>
                                    %
                                </span>
                            </h1>
                        </div>
                        <p className='mx-auto justify-center w-52 pt-5 font-semibold'>
                            Increase in Apprenticeship interest through our School Outreach
                        </p>
                    </div>
                </div>
                <div className='bg-[#2197BD] py-10 px-10 text-xl text-[#fff] rounded-lg'>
                    <p>
                        Outercircle is dedicated to transforming the perceptions & narratives of apprenticeships. 
                        Through engaging workshops and insightful talks, we've boosted apprenticeship interest by an impressive 8x, opening new pathways for students across the UK.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
