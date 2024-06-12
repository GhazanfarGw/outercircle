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
        <div className='mx-auto items-center md:px-10 px-5 md:pt-32 md:pb-20 py-16'>
            <img data-aos="zoom-in-up" data-aos-delay="100" className='justify-center mx-auto w-20 md:w-32' src='./outercircle.png' alt='logo'/>
            <div data-aos="zoom-in-up" data-aos-delay="200" className='justify-center mx-auto text-center max-w-screen-md md:pt-8 pt-5'>
                <h1 className='md:text-5xl text-3xl text-[#191E28]'>
                    What do we offer?
                </h1>
                <p className='md:pt-5 pt-3 text-[#5F5B77]'>
                    “Offering tailored support and resources to students, schools, & employers fostering Apprenticeship opportunities & community growth”
                </p>
            </div>
            <div className='pt-14'>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 md:pb-8'>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='md:grid bg-[#F5F3F1] md:bg-transparent items-center md:mx-auto md:pt-5 py-3 md:py-0 md:px-2 px-3 md:border-0 border-x-2 border-t-2'>
                        <div className='md:h-32 md:w-32 w-12 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center md:py-4 pt-5 md:pt-0 md:w-auto' src='./icons/icons8-student-100 copy.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 pt-3 ml-2 md:ml-0 py-2 text-left'>
                            Aspiring Apprentice <br className='hidden md:block lg:block'/> Network
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='md:grid bg-[#F5F3F1] md:bg-transparent items-center md:mx-auto md:pt-5 py-3 md:py-0 md:px-2 px-3 md:border-0 border-x-2 border-t-2'>
                        <div className='md:h-32 md:w-32 w-12 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center md:py-4 pt-5 md:pt-0 md:w-auto' src='./icons/2.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 pt-3 ml-2 md:ml-0 py-2 text-left'>
                            Outreach Initiative
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='md:grid bg-[#F5F3F1] md:bg-transparent items-center md:mx-auto md:pt-5 py-3 md:py-0 md:px-2 px-3 md:border-0 border-x-2 border-t-2'>
                        <div className='md:h-32 md:w-32 w-12 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center md:py-4 pt-5 md:pt-0 md:w-auto' src='./icons/1.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 pt-3 ml-2 md:ml-0 py-2 text-left'>
                            Recruitment Support <br className='hidden md:block lg:block'/> for Employers
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='md:grid bg-[#F5F3F1] md:bg-transparent items-center md:mx-auto md:pt-5 py-3 md:py-0 md:px-2 px-3 md:border-0 border-x-2 border-t-2'>
                        <div className='md:h-32 md:w-32 w-12 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center md:py-4 pt-5 md:pt-0 md:w-auto' src='./icons/3.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 pt-3 ml-2 md:ml-0 py-2 text-left'>
                            Events and <br className='hidden md:block lg:block'/> Socials
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="100" className='md:grid bg-[#F5F3F1] md:bg-transparent items-center md:mx-auto md:pt-5 md:px-2 px-3 md:border-0 border-2'>
                        <div className='md:h-32 md:w-32 w-12 hover:scale-105 duration-200 items-center md:text-center md:mx-auto'>
                            <img className='items-center md:text-center md:py-4 pt-5 md:pt-0 md:w-auto' src='./icons/4.png' alt='icons'/>
                        </div>
                        <p className='md:text-center md:pt-5 pt-3 ml-2 md:ml-0 py-2 text-left'>
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
