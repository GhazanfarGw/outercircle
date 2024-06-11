// src/CustomCarousel.js
import React, { useRef } from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../home/Arrows';
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
          slidesToShow: 2,
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
    <div className="max-w-screen-2xl justify-center text-center mx-auto">
        <div className='mx-auto items-center md:px-10 px-5 md:py-20 py-0'>
            <div className='justify-center mx-auto text-center max-w-screen-md'>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                    How We're Here To <br/> Help
                </h1>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                <div key={index} className="md:py-20 py-8 md:pt-14 px-2">
                    <div className='mx-auto justify-center text-center'>
                        <div id='herehelp' className='w-80 h-80 items-center mx-auto justify-center text-center hover:scale-105 duration-200 cursor-wait'>
                            <div className='relative h-[15.6rem] w-[15.6rem] top-[2.33rem] justify-center items-center mx-auto bg-[#1E4579] rounded-full'/>
                        </div>
                        <p className='w-72 mx-auto justify-center text-center pt-5'>
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
  );
};

export default CustomCarousel;