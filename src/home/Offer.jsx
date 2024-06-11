import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Offer() {

    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
    <div className='max-w-screen-xl justify-center text-center mx-auto'>
        <div className='mx-auto items-center md:px-10 px-5 md:py-20 py-16'>
            <img data-aos="zoom-in-up" data-aos-delay="100" className='justify-center mx-auto w-20 md:w-52' src='./outercircle.png' alt='logo'/>
            <div data-aos="zoom-in-up" data-aos-delay="200" className='justify-center mx-auto text-center max-w-screen-md md:pt-12 pt-5'>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                    What do we offer?
                </h1>
                <p className='md:text-lg text-base md:pt-5 pt-3 text-[#5F5B77]'>
                    “Offering tailored support and resources to students, schools, & employers fostering Apprenticeship opportunities & community growth”
                </p>
            </div>
            <div className='pt-14'>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 md:gap-0 gap-5 md:pb-8'>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='flex md:grid items-center md:mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-4 border-[#1790E8]'>
                        <div className='md:h-36 md:w-36 w-14 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center py-3 md:w-auto w-2/1' src='./icons/icons8-student-100 copy.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 py-2 font-semibold md:font-bold md:text-base text-sm md:border-0 md:px-0 md:ml-0 border-l-4 px-2 ml-4 border-[#A04FC8]'>
                            Aspiring Apprentice <br className='hidden md:block lg:block'/> Network
                        </p>
                    </div>

                    <div data-aos="zoom-in-up" data-aos-delay="100" className='flex md:grid items-center md:mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-4 border-[#1790E8]'>
                        <div className='md:h-36 md:w-36 w-14 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center py-3 md:w-auto w-2/1' src='./icons/2.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 py-2 font-semibold md:font-bold md:text-base text-sm md:border-0 md:px-0 md:ml-0 border-l-4 px-2 ml-4 border-[#A04FC8]'>
                            Outreach Initiative
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='flex md:grid items-center md:mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-4 border-[#1790E8]'>
                        <div className='md:h-36 md:w-36 w-14 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center py-3 md:w-auto w-2/1' src='./icons/1.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 py-2 font-semibold md:font-bold md:text-base text-sm md:border-0 md:px-0 md:ml-0 border-l-4 ml-3 pl-1 border-[#A04FC8]'>
                            Recruitment Support <br className='hidden md:block lg:block'/> for Employers
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='flex md:grid items-center md:mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-4 border-[#1790E8]'>
                        <div className='md:h-36 md:w-36 w-14 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center py-3 md:w-auto w-2/1' src='./icons/3.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 py-2 font-semibold md:font-bold md:text-base text-sm md:border-0 md:px-0 md:ml-0 border-l-4 px-2 ml-4 border-[#A04FC8]'>
                            Events and <br className='hidden md:block lg:block'/> Socials
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='flex md:grid items-center md:mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-4 border-[#1790E8]'>
                        <div className='md:h-36 md:w-36 w-14 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center py-3 md:w-auto w-2/1' src='./icons/4.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 py-2 font-semibold md:font-bold md:text-base text-sm md:border-0 md:px-0 md:ml-0 border-l-4 px-2 ml-4 border-[#A04FC8]'>
                            Must have <br className='hidden md:block lg:block'/> Resources
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
