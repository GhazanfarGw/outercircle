import React from 'react'
import CountUp from 'react-countup';

export default function changing() {
  return (
    <>
    <div className='overflow-hidden duration-500 items-center justify-center mx-auto md:py-28 pb-5 pt-16 bg-[#F6F8FB]'>
        <div className='justify-center mx-auto lg:px-10 md:px-10 px-5 pb-10 max-w-screen-xl'>
            <h1 className='md:text-5xl text-3xl md:max-w-7xl text-center'>
                Changing the Narrative of Apprenticeships across the UK
            </h1>
            <div className='grid grid-cols- mx-auto justify-center items-center md:pt-10 pt-5'>
                <div className='w-full items-center mx-auto pt-5 px-2'>
                    <div className='mx-auto justify-center text-center'>
                        <div className='items-center text-center mx-auto'>
                            <h1 className='flex items-center mx-auto justify-center text-center text-7xl font-bold text-[#000000]'>
                                <CountUp  start={50} end={70} duration={25.75} decimal={1}/>
                                <span className='text-2xl'>
                                    %
                                </span>
                            </h1>
                        </div>
                        <p className='mx-auto justify-center py-5'>
                            Increase in Apprenticeship interest through our School Outreach
                        </p>
                    </div>
                </div>
                <div className='bg-[#1790E8] py-10 px-5 md:px-10 rounded-lg justify-center text-center mx-auto md:font-semibold md:max-w-screen-md'>
                    <p className='text-white'>
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
