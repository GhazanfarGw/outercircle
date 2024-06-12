// src/CustomCarousel.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 items at a time
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    appendDots: dots => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    { label: 'Career Coaching: Tailored one-on-one support to help identify your career interests, &  navigate the Apprenticeship journey.' },
    { label: 'Workshops: Interactive sessions focusing on essential skills like CV writing, Assessment Centre & interview preparation.' },
    { label: 'Industry Insights and Mentorship: Access to industry specific mentors who provide valuable advice, and guidance to help your succeed in their chosen field.' },
    { label: 'Networking Opportunities: Participate in networking events, seminars, and workshops to connect with potential employers, mentors, & peers, fostering valuable relationships & opportunities.' },
  ];

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <>
    <div className='bg-[#F5F3F1]'>
      <div className="max-w-screen-2xl justify-center md:text-center mx-auto overflow-hidden">
          <div className='md:mx-auto items-center md:px-10 px-5 md:py-20 py-12'>
              <div className='md:justify-center md:mx-auto md:text-center md:max-w-screen-md'>
                  <h1 className='md:text-5xl text-3xl text-wrap font-semibold text-black'>
                      How We're Here <br className='block md:hidden lg:hidden'/> To <br className='hidden md:block lg:block'/> Help
                  </h1>
              </div>
              <Slider ref={sliderRef} {...settings}>
                  {slides.map((slide, index) => (
                  <div key={index} className="md:py-20 py-8 md:pt-14 md:px-3">
                      <div className='mx-auto justify-center text-center bg-white py-8 lg:h-[32rem] md:h-[28rem] h-[29rem] shadow-lg hover:scale-105 duration-200 cursor-wait'>
                          <div id='herehelp' className='lg:w-80 lg:h-80 md:w-64 md:h-64 w-72 h-72 items-center mx-auto justify-center text-center'>
                            <div className='relative lg:h-[15.6rem] lg:w-[15.6rem] md:h-[12.5rem] md:w-[12.5rem] h-[14rem] w-[14rem] top-[2.1rem] md:top-[1.8rem] lg:top-[2.33rem] justify-center items-center mx-auto bg-[#1E4579] rounded-full'/>
                          </div>
                          <p className='lg:w-72 md:w-60 w-72 mx-auto justify-center text-center pt-5 text-black lg:text-base text-sm'>
                              {slide.label}
                          </p>
                      </div>
                  </div>
                  ))}
              </Slider>
              <div className="flex gap-2 justify-end py-5 block xl:hidden lg:hidden">
                  <PrevArrow onClick={goToPrev} />
                  <NextArrow onClick={goToNext} />
              </div>
          </div>
        </div>

    </div>
    </>
   
  );
};

export default CustomCarousel;