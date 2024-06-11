import React from 'react'

export default function Founder() {
  return (
    <>
    <div className=' bg-[#1E4579]'>
        <div className='md:px-10 px-5 py-28 max-w-screen-xl justify-center mx-auto'>
            <div className='grid grid-cols-2 mx-auto justify-center gap-5 items-center'>
                <div className='max-w-lg text-white'>
                    <h1 className='text-5xl font-semibold'>
                        Meet the Founder
                    </h1>
                    <p className='pt-10 text-lg'>
                        Meet Romario Ellis, the 19-year-old founder of OuterCircle (OC). From a lost college student to a Data Science Degree Apprentice, Romario's journey fueled the creation of OC
                    </p>
                    <p className='pt-5 text-lg'>
                        Overcoming isolation and formalities, OC thrives as a space for authentic connections, hosting events from weekend getaways to a Premier League stadium gala.
                        <br/> <br/> 
                        Romario's drive continues with a new podcast and exciting announcements, embodying OuterCircle's mission to empower aspiring apprentices.
                    </p>
                </div>
                <div className='max-w-lg border-8 border-[#1790E8] hover:scale-105 duration-200 cursor-wait'>
                    <img src='./founder.jpg' alt='image'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
