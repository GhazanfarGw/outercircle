import React from 'react';
import JobSearchBar from '../home/JobSearchBar';

const CustomCarousel = () => {
  return (
    <div  id='dataimage'>
      <div className="max-w-screen-xl min-screen-h justify-center text-center mx-auto overflow-hidden">
          <div className='mx-auto items-center md:px-10 px-5 md:py-32 py-10'>
              <div className='justify-center mx-auto text-center max-w-screen-md text-[#fff]'>
                  <h1 className='md:text-5xl text-3xl font-semibold text-[#fff]'>
                    Apprenticeship Opening
                  </h1>
                  <h1 className='md:text-5xl text-3xl font-semibold text-[#fff]'>Apply Today!</h1>
                  <p className='md:text-xl md:pt-8 pt-5 text-[#fff]'>
                      “Discover exciting apprenticeship opening wit top-tier employers through our exclusive recruitment spotlight”
                  </p>
              </div>
              <div className='pt-10'>
                <JobSearchBar/>
              </div>
          </div>
      </div>

    </div>
  );
};

export default CustomCarousel;