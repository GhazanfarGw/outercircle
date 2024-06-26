import React from 'react'

export default function Future() {
  return (
    <>
    <div className='bg-[#1A1F2A] text-white'>
        <div className='md:flex md:px-10 px-5 max-w-screen-lg items-center justify-center mx-auto py-20'>
            <div id='circlelogo' className='w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                <div className='py-24 justify-center items-center mx-auto'>
                    <h1 className='pt-5 text-4xl -skew-y-12 font-light text-white'>
                        Partner with <br/> <span className='font-bold'>OuterCircle</span>
                    </h1>
                </div>
            </div>
            <div className=''>
                <h2 className='justify-center text-4xl mx-auto text-center pt-5'>
                    Empowering Young Minds, <br/> <span className='font-bold pt-3'>Shaping Bright Futures</span>
                </h2>
                <a className='justify-center mx-auto text-center' href='/'>
                    <p className='bg-[#1790E8] text-white font-medium px-5 mt-12 text-sm text-center mx-auto justify-center w-80 py-3'>
                        Contact Us now to start a partnership

                    </p>
                </a>
            </div>
        </div>
    </div>
    
    </>
  )
}
