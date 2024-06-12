import React from 'react'

export default function Expect() {
  return (
    <>
    <div className='max-w-screen-xl justify-center text-center mx-auto'>
        <div className='md:px-10 px-5 md:py-32 py-16'>
            <h1 className='md:text-5xl text-3xl font-semibold'>
                So what can you <br/> expect?
            </h1>
            <div className='mx-auto justify-center lg:max-w-6xl md:w-full md:border-8 border-4 border-[#1790E8] mt-12'>
                <video muted autoPlay loop controls playsInline width={1200} height={480}> 
                    <source src='./Student.mp4' type='video/mp4'/>
                </video>
            </div>
        </div>
    </div>
    </>
  )
}
