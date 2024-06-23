import React from 'react'

export default function Founder() {
  return (
    <>
    <div className='border-t-2'>
        <div className='md:px-10 px-5 md:py-40 py-20 max-w-screen-xl justify-center mx-auto'>
            <div className='md:flex md:grid-cols-2 mx-auto justify-center items-center md:gap-x-20'>
                <div className='max-w-md rounded-bl-3xl hover:scale-105 duration-200 cursor-wait'>
                    <img src='./founder.jpg' alt='image'/>
                </div>
                <div className='max-w-2xl text-white md:pt-0 pt-10'>
                    <h1 className='md:text-5xl text-3xl md:max-w-7xl text-[#455065]'>
                        Romario Ellis
                    </h1>
                    <p className='text-[#455065]'>
                        CEO/Founder of OuterCircle
                    </p>
                    <p className='md:pt-10 pt-5'>
                        Meet Romario Ellis, the 19-year-old founder of OuterCircle (OC). From a lost college student to a Data Science Degree Apprentice, Romario's journey fueled the creation of OC
                    </p>
                    <br/>
                    <p className=''>
                        Overcoming isolation and formalities, OC thrives as a space for authentic connections, hosting events from weekend getaways to a Premier League stadium gala.
                        <br/> <br/> 
                        Romario's drive continues with a new podcast and exciting announcements, embodying OuterCircle's mission to empower aspiring apprentices.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
