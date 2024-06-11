import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Testimonials() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
              slidesToShow: 3,
              slidesToScroll: 1,
              centerPadding: "0px",
              autoplaySpeed: 3000,
              dots: true
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
              autoplaySpeed: 3000,
              initialSlide: 1
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              autoplaySpeed: 3000,
              centerPadding: "0px",
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='px-5 lg:px-10 justify-center max-w-screen-xl mx-auto lg:pt-20 sm:pt-0 pt-0 pb-16'>
        <div className='lg:pt-5 sm:pt-20 pt-16 text-center'>
            <h1 className='md:text-5xl text-3xl font-semibold pt-12 md:pb-10'>
                Aspiring Apprentice Testimonials
            </h1>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="300" className='items-center mx-auto'>
            <Slider {...settings} className='flex grid-cols-3 items-center gap-x-10 lg:pt-10 md:pt-4 pt-8'>
                <div id='testimonials' className='xl:w-96 xl:h-96 w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                    <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
                        <div className='xl:py-24 lg:mt-0 lg:py-16 md:py-2 mt-14 justify-center items-center mx-auto'>
                            <p className='xl:text-base text-sm lg:px-14 md:px-10 px-12'>
                                "Outercircle transformed my apprenticeship journey. Their coaching and workshops equipped me with the confidence and skills to secure my dream role.”
                            </p>
                            <h1 className='pt-5 md:font-bold font-semibold text-sm'>
                                Emily, Tech Degree Apprentice
                            </h1>
                        </div>
                    </Tooltip>
                </div>
                <div id='testimonials' className='xl:w-96 xl:h-96 w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                    <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
                        <div className='xl:py-24 lg:mt-0 lg:py-16 md:py-2 mt-14 justify-center items-center mx-auto'>
                            <p className='xl:text-base text-sm lg:px-14 md:px-10 px-12'>
                                "Outercircle revolutionised our school's apprenticeship guidance. Their tailored workshops and outreach increased student engagement and interest in apprenticeships.”
                            </p>
                            <h1 className='pt-5 md:font-bold font-semibold text-sm'>
                                David, Head of Sixth Form
                            </h1>
                        </div>
                    </Tooltip>
                </div>
                <div id='testimonials' className='xl:w-96 xl:h-96 w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                    <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
                        <div className='xl:py-24 lg:mt-0 lg:py-16 md:py-2 mt-14 justify-center items-center mx-auto'>
                            <p className='xl:text-base text-sm lg:px-14 md:px-8 px-12'>
                                "Outercircle's partnership boosted our recruitment. Their innovative approach and diverse talent pool helped us find exceptional apprentices who bring fresh skills and perspectives."
                            </p>
                            <h1 className='pt-5 md:font-bold font-semibold text-sm'>
                                Sarah, Early Careers Lead
                            </h1>
                        </div>
                    </Tooltip>
                </div>
            </Slider>
        </div>
    </div>
    </>
  )
}

export default Testimonials;
