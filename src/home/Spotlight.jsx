import React, { useRef } from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows';
import JobSearchBar from '../home/JobSearchBar';
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
    { label: 'BT' },
    { label: 'IBM' },
    { label: 'NSH' },
    { label: 'ARUP' },
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
    <div className="max-w-screen-xl justify-center text-center mx-auto overflow-hidden">
        <div className='mx-auto items-center md:px-10 px-5 md:py-20 py-10'>
            <div className='justify-center mx-auto text-center max-w-screen-md'>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                  Apprenticeship Opening
                </h1>
                <h1 className='md:text-5xl text-3xl font-semibold'>Apply Today!</h1>
                <p className='md:text-xl md:pt-8 pt-5'>
                    “Discover exciting apprenticeship opening wit top-tier employers through our exclusive recruitment spotlight”
                </p>
            </div>
            <JobSearchBar/>
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                <div key={index} className="md:py-20 py-8 md:pt-14 px-2">
                    <div className="bg-[#F5F3F1] shadow-xl rounded-sm border-2 border-opacity-20 py-16 w-auto mx-2 hover:scale-105 duration-200 hover:border-opacity-80 border-[#1E4579] text-center">
                        <div className="w-36 h-36 my-5 mx-auto rounded-full border-4 hover:border-opacity-80 border-[#1790E8] text-center">
                            <h1 className="py-11 text-4xl font-bold text-[#000000]">{slide.label}</h1>
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
  );
};

export default CustomCarousel;