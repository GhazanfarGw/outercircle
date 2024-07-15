import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Testimonials() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding: "0px",
              autoplaySpeed: 2000,
              dots: true,
              cssEase: "linear"
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: "0px",
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              initialSlide: 1,
              cssEase: "linear"
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 2000,
              centerPadding: "0px",
              dots: true,
              cssEase: "linear"
            }
          }
        ]
      };

    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div id="testimonialsbg">
        <div className='px-5 lg:px-10 justify-center max-w-screen-xl mx-auto lg:pt-20 pt-0 pb-16 text-white'>
            <div className='lg:pt-5 md:pt-0 text-center'>
                <h1 className='md:text-5xl text-3xl font-semibold pt-12 md:pb-10 text-white'>
                    Employer Partner Testimonials
                </h1>
            </div>
            <div data-aos="zoom-in-up" data-aos-delay="100" className='items-center mx-auto'>
                <Slider {...settings} className='items-center lg:pt-10 md:pt-4 pt-8'>
                    <div id='testimonials' className='xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-80 md:h-[25rem] w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                        <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
                            <div className='xl:py-20 lg:mt-10 xl:mt-0 lg:py-16 md:py-16 mt-14 justify-center items-center mx-auto'>
                                <p className='xl:text-sm text-xs lg:px-14 md:px-12 px-12 text-white'>
                                    "OuterCircle's virtual recruitment events exceeded our expectations. Their seamless organisation and targeted approach attracted high-quality candidates who were well-prepared and aligned with our company values. We look forward to continuing this fruitful partnership."
                                </p>
                                <h1 className='pt-5 md:font-bold font-semibold text-sm text-white'>
                                    Faizah, Talent Acquisition Manager
                                </h1>
                            </div>
                        </Tooltip>
                    </div>
                    <div id='testimonials' className='xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-80 md:h-[25rem] w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                        <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
                            <div className='xl:py-20 lg:mt-10 xl:mt-0 lg:py-16 md:py-16 mt-14 justify-center items-center mx-auto'>
                                <p className='xl:text-sm text-xs lg:px-14 md:px-12 px-12 text-white'>
                                "The Employer Branding Insight Session with OuterCircle was enlightening. They helped us refine our messaging to resonate better with aspiring apprentices. As a result, we've seen increased interest from talented individuals who are eager to join our apprenticeship programs."
                                </p>
                                <h1 className='pt-5 md:font-bold font-semibold text-sm text-white'>
                                    Emma, HR Director
                                </h1>
                            </div>
                        </Tooltip>
                    </div>
                    <div id='testimonials' className='xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-80 md:h-[25rem] w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                        <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
                            <div className='xl:py-20 lg:mt-10 xl:mt-0 lg:py-16 md:py-16 mt-14 justify-center items-center mx-auto'>
                                <p className='xl:text-sm text-xs lg:px-14 md:px-12 px-12 text-white'>
                                    "OuterCircle's partnership boosted our recruitment. Their innovative approach and diverse talent pool helped us find exceptional apprentices who bring fresh skills and perspectives."
                                </p>
                                <h1 className='pt-5 md:font-bold font-semibold text-sm text-white'>
                                    Sarah, early careers lead
                                </h1>
                            </div>
                        </Tooltip>
                    </div>
                </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials;
