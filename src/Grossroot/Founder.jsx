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
                        - Romario Ellis, the founder of OuterCircle, is dedicated to supporting young talent through apprenticeships. As a former Degree Apprentice, Romario understands the challenges and rewards of the apprenticeship journey. This personal experience motivated him to establish OuterCircle, aiming to provide the support he once needed.
                    </p>
                    <br/>
                    <p className=''>
                        - Under Romario's guidance, OuterCircle has hosted over 40 events and workshops, partnered with organisations like Arup, BT Business, and LSBU Apprenticeships, and built a community of over 1500 aspiring and current apprentices. His focus is on creating authentic, honest, and impactful initiatives that bridge the gap between students and apprenticeship opportunities.
                        <br/> <br/> 
                        - Romario's mission is to empower the next generation of apprentices by providing the knowledge and support necessary for their success. Through OuterCircle, he strives to foster an inclusive and supportive environment where apprentices can thrive.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
