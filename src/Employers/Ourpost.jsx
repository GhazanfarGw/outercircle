import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Post() {
  useEffect (() => {
      Aos.init ();
  }, [])

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
              slidesToShow: 2,
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
    <div className='px-5 lg:px-10 justify-center max-w-screen-xl mx-auto lg:pt-20 pt-0 border-t-2'>
      <div className='lg:pt-5 sm:pt-20 pt-16 text-center'>
        <h1 className='md:text-5xl text-3xl md:max-w-7xl text-center'>
          Our Past Events/Workshops
        </h1>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='items-center mx-auto pb-14'>
        <Slider {...settings} className='flex mx-auto items-center gap-4 lg:pt-10 md:pt-4 pt-3'>
          <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
            <img className='border-[#1091E9] border-8' src='./unnamed (5).jpg' alt='Image'/>
            <div className='lg:px-3 md:px-3 sm:px-2'>
              <h1 className='text-black text-xl pt-5 font-semibold'>
                AI Industry Insight Event
              </h1>
            </div>
          </Tooltip>
          <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
            <img className='border-[#1091E9] border-8' src='./unnamed.jpg' alt='Image'/>
            <div className='lg:px-3 md:px-3 sm:px-2'>
              <h1 className='text-black text-xl pt-5 font-semibold'>
                Mock-Interview Workshop
              </h1>
            </div>
          </Tooltip>
          <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
            <img className='border-[#1091E9] border-8' src='./unnamed (4).jpg' alt='Image'/>
            <div className='lg:px-3 md:px-3 sm:px-2'>
              <h1 className='text-black text-xl pt-5 font-semibold'>
                New Years Black-Tie Gala
              </h1>
            </div>
          </Tooltip>
          <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
            <img className='border-[#1091E9] border-8' src='./unnamed (3).jpg' alt='Image'/>
            <div className='lg:px-3 md:px-3 sm:px-2'>
              <h1 className='text-black text-xl pt-5 font-semibold'>
                Navigating Apprenticeship Workshop
              </h1>
            </div>
          </Tooltip>
          <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
            <img className='border-[#1091E9] border-8' src='./unnamed (2).jpg' alt='Image'/>
            <div className='lg:px-3 md:px-3 sm:px-2'>
              <h1 className='text-black text-xl pt-5 font-semibold'>
                Apprentice Networking Event
              </h1>
            </div>
          </Tooltip>
          <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
            <img className='border-[#1091E9] border-8' src='./unnamed (1).jpg' alt='Image'/>
            <div className='lg:px-3 md:px-3 sm:px-2'>
              <h1 className='text-black text-xl pt-5 font-semibold'>
                Apprentice Paintballing Social
              </h1>
            </div>
          </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Post;