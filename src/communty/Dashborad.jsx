import React from 'react'

export default function Dashboard() {
  return (
    <>
      <div id='community' className='duration-500 min-h-screen mx-auto justify-center'>
          <div className='justify-center mx-auto max-w-screen-xl lg:px-10 md:px-10 sm:px-5 px-5 pb-10'>
            <div className='-z-0 first items-center align-middle mx-auto md:pt-32 py-36 md:h-96 h-56'>
              <img src='./Main-Circle.png' className='w-[35rem] mx-auto animate-pulse items-center align-middle -z-0'/>
            </div>
            <div className='flex grid-cols-2 gap-x-5 justify-between max-w-screen-sm mx-auto md:text-center'>
              <div className='bg-white md:py-4 md:px-2 px-3 md:w-52 py-3 w-36 rounded-xl z-10 hover:scale-105 duration-200'>
                <a target="_black" href='https://forms.gle/tqNcGhNhV37ABwQUA'>
                  <p className='text-[#20A4F6] md:font-semibold md:text-base text-xs font-medium'>
                    Aspiring Apprentice Community 
                  </p>
                </a>
              </div>
              <div className='bg-white md:py-4 md:px-2 px-3 md:w-52 py-3 w-36 rounded-xl z-10 hover:scale-105 duration-200'>
                <a target="_black" href='https://forms.gle/5MDSH2AKdwbB9FpAA' rel='_black'>
                  <p className='text-[#F511A2] md:font-semibold md:text-base text-xs font-medium'>
                    Young Professional Community 
                  </p>
                </a>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}