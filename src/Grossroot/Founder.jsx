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
                    <a 
                                target="_black" href="https://www.linkedin.com/company/0utercircle?trk=feed_main-feed-card_feed-actor-image" 
                                className="hover:text-[#1790E8] text-black
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200hover:scale-125"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-10 w-10 mt-5"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                                </svg>
                            </a>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}
