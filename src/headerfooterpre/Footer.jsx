import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#002147]'>
            <div className='max-w-screen-xl mx-auto justify-center md:pt-20 md:pb-10 md:px-10 py-10'>
                <p className='text-[#a3a3a3] justify-center pb-5 px-5'>
                    Website last updated: July 16, 2024
                </p>
                <div className="py-2 md:px-0 px-2 w-52">
                    <a href="/">
                        <img src='./outercircle.png' className='md:w-28 w-24 pl-3' alt='favicon.png'/>
                    </a>
                </div>
                <div className='md:grid md:grid-cols-5 md:gap-16 max-w-screen-2xl mx-auto justify-center py-5 text-white px-7'>
                    <div className=''>
                        <h1 className='text-white text-base md:text-2xl justify-center font-bold'>
                            Outer Circle
                        </h1>
                        <p className='md:pt-4 pt-3 text-[#fff] text-sm'>
                            Start your learning journey today with our next generation of Apprentices.
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-bold'>
                            Contact Us
                        </h1>
                        <p className='text-[#fff] md:pt-4 pt-2 text-sm'>
                            outercircle@outer-circle.uk
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-bold'>
                            Address
                        </h1>
                        <p className='text-[#fff] md:pt-4 pt-2 text-sm'>
                            71-75 Shelton Street, London, WC2H 9JQ
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-bold'>
                            Quick Links
                        </h1>
                        <div className='pt-4'>
                            <div className='md:pt-1'><a className='text-sm text-[#fff] pl-2 hover:text-[#1790E8] hover:font-bold duration-150' href="/">Home</a></div>
                            <div className='md:pt-1'><a className='text-sm text-[#fff] pl-2 hover:text-[#1790E8] hover:font-bold duration-150' href="/students">Students</a></div>
                            <div className='md:pt-1'><a className='text-sm text-[#fff] pl-2 hover:text-[#1790E8] hover:font-bold duration-150' href="/schools">Schools</a></div>
                            <div className='md:pt-1'><a className='text-sm text-[#fff] pl-2 hover:text-[#1790E8] hover:font-bold duration-150' href="/grassroots">Grassroots</a></div>
                            <div className='md:pt-1'><a className='text-sm text-[#fff] pl-2 hover:text-[#1790E8] hover:font-bold duration-150' href="/contact-us">Contact Us</a></div>
                        </div>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-white text-base justify-center font-bold'>
                            Community
                        </h1>
                        <div className="flex grid-cols-4 lg:gap-x-4 md:gap-x-3 gap-x-5 pt-5">
                            <a 
                                target="_black" href="https://www.linkedin.com/company/0utercircle?trk=feed_main-feed-card_feed-actor-image" 
                                className="hover:text-[#1790E8] text-white
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:scale-125"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-6 w-6"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                                </svg>
                            </a>
                            <a  target="_black" href="https://www.instagram.com/outercirclehub/" 
                                className="hover:text-[#1790E8] text-white items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:scale-125"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-6 w-6"
                                    viewBox="0 0 100 100">
                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M273 930 c-60 -13 -94 -32 -140 -83 -64 -69 -68 -92 -68 -347 0 -258
                                    4 -279 72 -351 73 -78 100 -84 363 -84 263 0 290 6 363 84 68 72 72 93 72 351
                                    0 256 -4 278 -69 348 -72 79 -99 86 -341 89 -116 1 -229 -2 -252 -7z m500 -46
                                    c45 -23 86 -63 108 -106 17 -34 19 -61 19 -278 0 -265 -3 -283 -67 -341 -61
                                    -57 -72 -59 -333 -59 -261 0 -272 2 -333 59 -64 58 -67 76 -67 341 0 265 3
                                    283 67 341 61 57 68 58 331 59 204 0 248 -3 275 -16z"/>
                                    <path d="M714 756 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28
                                    -13 2 -25 -3 -28 -12z"/>
                                    <path d="M448 706 c-132 -35 -198 -177 -138 -301 56 -115 201 -152 311 -80
                                    131 86 117 298 -23 363 -60 28 -95 32 -150 18z m147 -49 c114 -65 114 -249 0
                                    -314 -55 -31 -135 -31 -190 0 -114 65 -114 249 0 314 28 16 56 23 95 23 39 0
                                    67 -7 95 -23z"/>
                                    </g>
                                </svg>
                            </a>
                            <a  target="_black" href="https://discord.com/invite/ocjoinnow" 
                                className="hover:text-[#1790E8] text-white items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:scale-125"
                                rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg"  
                                        viewBox="0 0 50 50" 
                                        width="100px" 
                                        height="100px"
                                        className="fill-current stroke-current h-6 w-6">
                                        <path d="M 18.90625 7 C 18.90625 7 12.539063 7.4375 8.375 10.78125 C 8.355469 10.789063 8.332031 10.800781 8.3125 10.8125 C 7.589844 11.480469 7.046875 12.515625 6.375 14 C 5.703125 15.484375 4.992188 17.394531 4.34375 19.53125 C 3.050781 23.808594 2 29.058594 2 34 C 1.996094 34.175781 2.039063 34.347656 2.125 34.5 C 3.585938 37.066406 6.273438 38.617188 8.78125 39.59375 C 11.289063 40.570313 13.605469 40.960938 14.78125 41 C 15.113281 41.011719 15.429688 40.859375 15.625 40.59375 L 18.0625 37.21875 C 20.027344 37.683594 22.332031 38 25 38 C 27.667969 38 29.972656 37.683594 31.9375 37.21875 L 34.375 40.59375 C 34.570313 40.859375 34.886719 41.011719 35.21875 41 C 36.394531 40.960938 38.710938 40.570313 41.21875 39.59375 C 43.726563 38.617188 46.414063 37.066406 47.875 34.5 C 47.960938 34.347656 48.003906 34.175781 48 34 C 48 29.058594 46.949219 23.808594 45.65625 19.53125 C 45.007813 17.394531 44.296875 15.484375 43.625 14 C 42.953125 12.515625 42.410156 11.480469 41.6875 10.8125 C 41.667969 10.800781 41.644531 10.789063 41.625 10.78125 C 37.460938 7.4375 31.09375 7 31.09375 7 C 31.019531 6.992188 30.949219 6.992188 30.875 7 C 30.527344 7.046875 30.234375 7.273438 30.09375 7.59375 C 30.09375 7.59375 29.753906 8.339844 29.53125 9.40625 C 27.582031 9.09375 25.941406 9 25 9 C 24.058594 9 22.417969 9.09375 20.46875 9.40625 C 20.246094 8.339844 19.90625 7.59375 19.90625 7.59375 C 19.734375 7.203125 19.332031 6.964844 18.90625 7 Z M 18.28125 9.15625 C 18.355469 9.359375 18.40625 9.550781 18.46875 9.78125 C 16.214844 10.304688 13.746094 11.160156 11.4375 12.59375 C 11.074219 12.746094 10.835938 13.097656 10.824219 13.492188 C 10.816406 13.882813 11.039063 14.246094 11.390625 14.417969 C 11.746094 14.585938 12.167969 14.535156 12.46875 14.28125 C 17.101563 11.410156 22.996094 11 25 11 C 27.003906 11 32.898438 11.410156 37.53125 14.28125 C 37.832031 14.535156 38.253906 14.585938 38.609375 14.417969 C 38.960938 14.246094 39.183594 13.882813 39.175781 13.492188 C 39.164063 13.097656 38.925781 12.746094 38.5625 12.59375 C 36.253906 11.160156 33.785156 10.304688 31.53125 9.78125 C 31.59375 9.550781 31.644531 9.359375 31.71875 9.15625 C 32.859375 9.296875 37.292969 9.894531 40.3125 12.28125 C 40.507813 12.460938 41.1875 13.460938 41.8125 14.84375 C 42.4375 16.226563 43.09375 18.027344 43.71875 20.09375 C 44.9375 24.125 45.921875 29.097656 45.96875 33.65625 C 44.832031 35.496094 42.699219 36.863281 40.5 37.71875 C 38.5 38.496094 36.632813 38.84375 35.65625 38.9375 L 33.96875 36.65625 C 34.828125 36.378906 35.601563 36.078125 36.28125 35.78125 C 38.804688 34.671875 40.15625 33.5 40.15625 33.5 C 40.570313 33.128906 40.605469 32.492188 40.234375 32.078125 C 39.863281 31.664063 39.226563 31.628906 38.8125 32 C 38.8125 32 37.765625 32.957031 35.46875 33.96875 C 34.625 34.339844 33.601563 34.707031 32.4375 35.03125 C 32.167969 35 31.898438 35.078125 31.6875 35.25 C 29.824219 35.703125 27.609375 36 25 36 C 22.371094 36 20.152344 35.675781 18.28125 35.21875 C 18.070313 35.078125 17.8125 35.019531 17.5625 35.0625 C 16.394531 34.738281 15.378906 34.339844 14.53125 33.96875 C 12.234375 32.957031 11.1875 32 11.1875 32 C 10.960938 31.789063 10.648438 31.699219 10.34375 31.75 C 9.957031 31.808594 9.636719 32.085938 9.53125 32.464844 C 9.421875 32.839844 9.546875 33.246094 9.84375 33.5 C 9.84375 33.5 11.195313 34.671875 13.71875 35.78125 C 14.398438 36.078125 15.171875 36.378906 16.03125 36.65625 L 14.34375 38.9375 C 13.367188 38.84375 11.5 38.496094 9.5 37.71875 C 7.300781 36.863281 5.167969 35.496094 4.03125 33.65625 C 4.078125 29.097656 5.0625 24.125 6.28125 20.09375 C 6.90625 18.027344 7.5625 16.226563 8.1875 14.84375 C 8.8125 13.460938 9.492188 12.460938 9.6875 12.28125 C 12.707031 9.894531 17.140625 9.296875 18.28125 9.15625 Z M 18.5 21 C 15.949219 21 14 23.316406 14 26 C 14 28.683594 15.949219 31 18.5 31 C 21.050781 31 23 28.683594 23 26 C 23 23.316406 21.050781 21 18.5 21 Z M 31.5 21 C 28.949219 21 27 23.316406 27 26 C 27 28.683594 28.949219 31 31.5 31 C 34.050781 31 36 28.683594 36 26 C 36 23.316406 34.050781 21 31.5 21 Z M 18.5 23 C 19.816406 23 21 24.265625 21 26 C 21 27.734375 19.816406 29 18.5 29 C 17.183594 29 16 27.734375 16 26 C 16 24.265625 17.183594 23 18.5 23 Z M 31.5 23 C 32.816406 23 34 24.265625 34 26 C 34 27.734375 32.816406 29 31.5 29 C 30.183594 29 29 27.734375 29 26 C 29 24.265625 30.183594 23 31.5 23 Z"/>
                                    </svg>
                            </a>
                            <a  target="_black" href="https://www.tiktok.com/@outercirclehub?_t=8l6jN69EUro&_r=1" 
                                className="hover:text-[#1790E8] text-white items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:scale-125"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-6 w-6"
                                    viewBox="0 0 100 100">
                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                    stroke="none">
                                    <path d="M153 909 c-67 -19 -68 -24 -68 -409 0 -389 0 -389 72 -409 50 -14
                                    636 -14 686 0 72 20 72 20 72 409 0 389 0 389 -72 409 -47 14 -645 13 -690 0z
                                    m715 -41 c9 -9 12 -104 12 -364 0 -307 -2 -355 -16 -368 -13 -14 -61 -16 -368
                                    -16 -260 0 -355 3 -364 12 -17 17 -17 719 0 736 17 17 719 17 736 0z"/>
                                    <path d="M516 788 c-3 -7 -7 -107 -11 -223 -5 -196 -7 -211 -26 -227 -46 -39
                                    -119 -8 -119 50 0 39 20 62 60 71 34 7 35 8 35 56 l0 50 -38 3 c-73 6 -150
                                    -62 -171 -150 -11 -47 13 -117 54 -158 86 -86 225 -68 286 37 25 41 28 59 32
                                    160 3 62 6 113 7 113 2 0 16 -7 31 -15 16 -8 44 -15 62 -15 l32 0 0 58 0 59
                                    -38 11 c-45 14 -63 31 -88 87 -17 36 -23 40 -62 43 -28 2 -44 -1 -46 -10z m90
                                    -63 c18 -40 55 -72 91 -81 18 -5 23 -13 23 -40 0 -24 -5 -34 -16 -34 -20 0
                                    -54 18 -82 43 -14 13 -26 17 -31 11 -5 -5 -11 -74 -13 -154 -3 -126 -6 -148
                                    -23 -172 -66 -87 -200 -82 -258 11 -27 45 -27 122 0 160 25 33 80 71 104 71
                                    33 0 24 -45 -11 -60 -98 -41 -69 -190 38 -190 50 0 88 29 102 78 5 20 10 117
                                    10 215 l0 177 25 0 c18 0 28 -9 41 -35z"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='justify-center mx-auto md:text-center px-5'>
                    <div className='border-b border-[#1790E8] py-3'/>
                        <p className='md:text-sm text-xs text-[#fff] md:pt-5 pt-5'>
                            Outer Circle &copy; 2024. All right reserved.
                        </p>
                    </div>
                </div>
        </div>
    );
}

export default Footer;
