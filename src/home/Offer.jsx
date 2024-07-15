import React, { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const items = [
  {
    icon: './icons/icons8-student-100 copy.png',
    title: 'Aspiring Apprentice Network',
    description: 'Join a supportive community of aspiring apprentices, access mentorship, and connect with industry professionals to kickstart your apprenticeship journey.',
  },
  {
    icon: './icons/2.png',
    title: 'Outreach Initiative',
    description: 'Engage with schools and communities to raise awareness about apprenticeships, provide valuable insights, and inspire the next generation of apprentices.',
  },
  {
    icon: './icons/1.png',
    title: 'Recruitment Support for Employers',
    description: 'Partner with us to streamline your recruitment process, find the best apprentice talent, and ensure a seamless onboarding experience.',
  },
  {
    icon: './icons/3.png',
    title: 'Events and Socials',
    description: 'Participate in our exciting events and socials, from workshops and networking sessions to fun gatherings, designed to enrich your apprenticeship experience.',
  },
  {
    icon: './icons/4.png',
    title: 'Must-have Resources',
    description: 'Access a curated collection of essential resources, including guides, templates, and tools, to help you succeed in your apprenticeship journey.',
  }
];

export default function Offer() {
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refresh(); // Cleanup AOS on component unmount
    };
  }, []);

  return (
    <div className='max-w-screen-2xl justify-center text-center mx-auto'>
      <div className='mx-auto items-center md:px-10 px-5 md:pt-32 md:pb-20 py-16'>
        <img
          data-aos="zoom-in-up"
          data-aos-delay="100"
          className='justify-center mx-auto w-20 md:w-32'
          src='./outercircle.png'
          alt='logo'
        />
        <div
          data-aos="zoom-in-up"
          data-aos-delay="200"
          className='justify-center mx-auto text-center max-w-screen-md md:pt-8 pt-5'
        >
          <h1 className='md:text-5xl text-3xl text-[#191E28]'>What do we offer?</h1>
          <p className='md:pt-5 pt-3 text-[#5F5B77]'>
            “Offering tailored support and resources to students, schools, & employers fostering Apprenticeship opportunities & community growth”
          </p>
        </div>
        <div className='pt-28'>
          <div className='grid xl:grid-cols-5 lg:grid-cols-3 lg:gap-5 xl:gap-0 md:gap-5 md:grid-cols-3 md:pb-8'>
            {items.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                data-aos="zoom-in-up"
                data-aos-delay="100"
                className='relative duration-500 bg-[#F5F3F1] hover:bg-opacity-75 md:w-64 md:h-72 items-center md:mx-auto md:pt-5 py-3 md:py-10 md:border-0 border-x-2 border-t-2'
              >
                <div className='md:h-28 md:w-28 w-12 hover:scale-105 duration-200 items-center mx-auto'>
                  <img
                    className='items-center md:py-4 pt-5 md:my-5 w-full'
                    src={item.icon}
                    alt='icons'
                  />
                </div>
                <div className="flex items-center justify-center md:px-5">
                  <p className='md:text-center font-medium text-lg md:pt-10 pt-3 ml-2 md:ml-0 py-2 text-left'>
                    {hoveredItem === index ? item.briefs : item.title}
                  </p>
                </div>
                <svg className="block lg:hidden md:hidden w-4 pt-1 ml-2" version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="100.000000pt" viewBox="0 0 100.000000 100.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path d="M284 909 c-4 -7 76 -94 192 -210 l199 -199 -200 -200 c-159 -159 -197 -202 -187 -212 10 -10 55 31 225 200 l212 212 -210 210 c-115 115 -213 210 -217 210 -4 0 -10 -5 -14 -11z" />
                  </g>
                </svg>
                {hoveredItem === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#17437A] rounded-md p-5">
                    <p className="text-sm font-normal text-white">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
