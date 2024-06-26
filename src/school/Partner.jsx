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
    { label: 'Initial Apprenticeship Talks: Introduction to apprenticeship opportunities for students.' },
    { label: 'Apprenticeship Programme: Interactive sessions for successful apprentice applications.' },
    { label: 'Parent, Teacher & Career Advisor Workshops: Educating key influencers about apprenticeships.' },
    { label: 'Personalised Student Guidance: Tailored support for students apprenticeship journey.' },
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
    <div className='bg-[#1790E8] text-white'>
    <div className="max-w-screen-xl justify-center text-center mx-auto overflow-hidden">
        <div className='mx-auto items-center md:px-10 px-5 md:py-20 pt-16'>
            <div className='justify-center mx-auto text-center max-w-screen-md'>
                <h1 className='md:text-5xl text-3xl md:max-w-7xl text-center text-white'>
                    Why Partner With Us
                </h1>
                <p className='md:pt-8 pt-5 text-white'>
                    Partnering with Outercircle offers schools essential support in preparing students for apprenticeships. Our tailored programs include engaging workshops, insightful
                    talks, and personalized guidance, enhancing apprenticeship awareness and readiness. Schools benefit from innovative resources and strategies that help students explore
                    diverse career paths and make informed decisions about their futures.
                </p>
            </div>
            <a href='./'>
                <h2 className='py-4 bg-[#F5F3F1] duration-200 text-black md:font-semibold my-5 max-w-screen-md text-center justify-center mx-auto hover:scale-105 text-sm md:text-xl'>
                    Contact Us Now To Start A Partnership!
                </h2>
            </a>
        </div>
    </div>
    <div className="max-w-screen-2xl grid-cols-1 justify-center text-center mx-auto overflow-hidden md:px-10 px-5">
        <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
            <div key={index} className="md:pb-28 pb-10 md:px-2">
                <div className="w-full items-center mx-auto pt-5 px-2">
                    <div className="rounded-md hover:scale-105 duration-200 border-[#F5F3F1] border-2 items-center text-center mx-auto md:h-52">
                        <p className="text-white px-4 py-12 md:py-16 relative">{slide.label}</p>
                    </div>
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
</>
  );
};

export default CustomCarousel;