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
    { label: 'Virtual & In-Person School Leaver/Attraction Events & Workshops.' },
    { label: 'School Outreach Sponsored Talks & Workshops.' },
    { label: 'Employer Branding, Social Media & Content Creation.' },
    { label: 'Parent, Teacher & Career Advisor Events/Workshops.' },
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
    <div className="max-w-screen-xl justify-center text-center mx-auto overflow-hidden">
        <div className='mx-auto items-center md:px-10 px-5 md:py-20 pt-16'>
            <div className='justify-center mx-auto text-center max-w-screen-md'>
                <h1 className='md:text-5xl text-3xl md:max-w-7xl text-center'>
                    Why Partner With Us
                </h1>
                <p className='md:pt-8 pt-5'>
                    Partnering with Outercircle offers access to a diverse talent pool of aspiring apprentices, tapping into untapped potential. We provide recruitment solutions,
                    enhancing employer brand visibility and supporting diversity and inclusion initiatives. With our grassroots approach and personalized services, we ensure
                    successful apprenticeship placements and long-term partnerships.
                </p>
            </div>
            <a href='./'>
                <h2 className='py-4 bg-[#1790E8] duration-200 text-white md:font-semibold my-5 max-w-screen-md text-center justify-center mx-auto hover:scale-105 text-sm md:text-xl'>
                    Maximise your school leaver opportunities with our tailored partnership solutions.
                </h2>
            </a>
        </div>
    </div>
    <div className="max-w-screen-2xl justify-center text-center mx-auto overflow-hidden md:px-10 px-5">
        <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
            <div key={index} className="md:pb-28 pb-10 md:px-2">
                <div className="w-full items-center mx-auto pt-5 px-2">
                    <div className="rounded-md hover:scale-105 duration-200 border-[#1790E8] border-2 items-center text-center mx-auto md:h-52">
                        <p className="text-black px-4 py-12 md:py-16 relative">{slide.label}</p>
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
</>
  );
};

export default CustomCarousel;