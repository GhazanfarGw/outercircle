import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header">
            <Logo isScrolled={isScrolled} />
            {/* Add your navigation items here */}
        </div>
    );
}

function Logo({ isScrolled }) {
    const [open, setOpen] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const location = useLocation();

  return (
    <>
        {isScrolled ? (
        <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center py-2 bg-white border-b shadow-lg">
            <div className="mx-auto items-center duration-500 md:pt-2">
                <div className="flex items-center">
                    <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
                        <div className="z-30 flex-shrink-0 pb-0 md:pb-2 pt-3 md:pt-0 items-center duration-500">
                            <a href="/">
                                <img width={80} className='hidden md:block lg:block items-center duration-500' src='./outercircle.png' alt='Logo'/>
                                <img width={80} className='block md:hidden lg:hidden items-center duration-500' src='./outercircle.png' alt='Logo'/>
                            </a>
                        </div>
                        <div className="z-20 text-3xl md:hidden pt-3 px-3 text-black" onClick={() => setOpen(!open)}>
                            <ion-icon className="" name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                        <div className="hidden lg:block w-full duration-500 scroll-smooth z-40">
                            <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                                <div className='flex items-center'>
                                    <a
                                      href="/"
                                      className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide ${location.pathname === '/' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                       Home
                                    </a>
                                    <a
                                        href="/students"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide ${location.pathname === '/students' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Students
                                    </a>
                                    <a
                                        href="/schools"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide ${location.pathname === '/schools' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Schools
                                    </a>
                                    <a
                                        href="/employers"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide ${location.pathname === '/employers' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Employers
                                    </a>
                                    <a
                                        href="/grassroots"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide ${location.pathname === '/grassroots' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Grassroots
                                    </a>
                                    <a
                                        href="/contact-us"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide ${location.pathname === '/contact-us' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                      href="/register"
                                      className="
                                      items-center text-base md:text-sm border-[#1790E8] border hover:border-opacity-80 rounded-lg relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#1790E8] font-semibold tracking-wide"
                                    >
                                      Join the Communty
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile nav */}
            <ul className={`md:hidden overflow-x-hidden bg-[#fff] fixed w-full overflow-y-visible bottom-0 top-20 mt-2 border-t duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                <li>
                  <Link to="/" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/students" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/students' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Students
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/schools' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Schools
                  </Link>
                </li>
                <li>
                  <Link to="/employers" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/employers' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Employers
                  </Link>
                </li>
                <li>
                  <Link to="/grassroots" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/grassroots' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Grassroots
                  </Link>
                </li>
                <p className='text-sm px-8 text-[#403f68] pt-8'>
                    Start your learning journey today with our next generation of Apprentices.
                </p>
                <li> 
                  <Link to="/contact-us" className="hover:bg-[#1790E8] border border-[#1790E8] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:bg-[#1790E8] border border-[#1790E8] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Join the Communty
                  </Link>
                </li>
            </ul>
        </header>
      ) : (
        <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:py-2">
            <div className="mx-auto items-center duration-500 md:pt-2">
                <div className="flex items-center">
                    <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
                    <div className="z-30 flex-shrink-0 pb-2 pt-5 md:pt-0  items-center duration-500">
                            <a href="/">
                                <img width={110} className='hidden md:block lg:block items-center duration-500' src='./outercircle.png' alt='Logo'/>
                                <img width={100} className='block md:hidden lg:hidden items-center duration-500' src='./outercircle.png' alt='Logo'/>
                            </a>
                        </div>
                        <div className="z-20 text-3xl md:hidden pt-5 px-3 text-white" onClick={() => setOpen(!open)}>
                            <ion-icon className="" name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                        <div className="hidden lg:block w-full duration-500 scroll-smooth z-40">
                            <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                                <div className='flex items-center'>
                                    <a
                                      href="/"
                                      className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide ${location.pathname === '/' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                       Home
                                    </a>
                                    <a
                                        href="/students"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide ${location.pathname === '/students' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Students
                                    </a>
                                    <a
                                        href="/schools"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide ${location.pathname === '/schools' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Schools
                                    </a>
                                    <a
                                        href="/employers"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide ${location.pathname === '/employers' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Employers
                                    </a>
                                    <a
                                        href="/grassroots"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide ${location.pathname === '/grassroots' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Grassroots
                                    </a>
                                    <a
                                        href="/contact-us"
                                        className={`items-center text-base md:text-sm relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide ${location.pathname === '/contact-us' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000] hover:border-b-4 hover:border-[#1790E8]'}`}
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                      href="/register"
                                      className="
                                      items-center text-base md:text-sm border-[#1790E8] bg-black bg-opacity-20 rounded-lg border hover:border-opacity-80 relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#f1f1f1] font-semibold tracking-wide"
                                    >
                                      Join the Communty
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile nav */}
            <ul className={`md:hidden overflow-x-hidden bg-[#fff] fixed w-full overflow-y-visible bottom-0 top-20 mt-2 border-t duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                <li>
                  <Link to="/" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/students" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/students' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Students
                  </Link>
                </li>
                <li>
                  <Link to="/schools" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/schools' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Schools
                  </Link>
                </li>
                <li>
                  <Link to="/employers" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/employers' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Employers
                  </Link>
                </li>
                <li>
                  <Link to="/grassroots" className={`tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#1790E8] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold ${location.pathname === '/grassroots' ? 'text-[#000] border-b-4 border-[#1790E8]' : 'text-[#000]'}`}>
                    Grassroots
                  </Link>
                </li>
                <p className='text-sm px-8 text-[#403f68] pt-8'>
                    Start your learning journey today with our next generation of Apprentices.
                </p>
                <li> 
                  <Link to="/contact-us" className="hover:bg-[#1790E8] border border-[#1790E8] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:bg-[#1790E8] border border-[#1790E8] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Join the Communty
                  </Link>
                </li>
            </ul>
        </header>
        )}
    </>
  )};
export default Navbar;





// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from "react-router-dom";

// function Navbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="header">
//             <Logo isScrolled={isScrolled} />
//             {/* Add your navigation items here */}
//         </div>
//     );
// }

// function Logo({ isScrolled }) {
//     const [open, setOpen] = useState(false);
//     const handleScrollToTop = () => {
//         window.scrollTo(0, 0);
//     };
//     const location = useLocation();

//     return (
//         <>
//             {isScrolled ? (
//                 <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center border-[#1790E8] border md:py-bordermd:border-b">
//                     {/* Your existing header content */}
//                     {/* Mobile nav */}
//                     <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
//                         <li>
//                             <Link to="/" className={`tracking-wider px-8 py-3 flex flex-row items-center duration-200 border-b text-sm font-semibold ${location.pathname === '/' ? 'text-[#1790E8] border-[#1790E8]' : 'text-[#403f68] border-[#403f68] border-opacity-10 hover:bg-[#f1f1f1] hover:text-[#1790E8]'}`}>
//                                 Home
//                             </Link>
//                         </li>
//                         {/* Add similar logic for other menu items */}
//                     </ul>
//                 </header>
//             ) : (
//                 <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:py-2">
//                     {/* Your existing header content */}
//                     {/* Mobile nav */}
//                     <ul className={`md:hidden bg-[#111316] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
//                         <li>
//                             <Link to="/" className={`tracking-wider px-8 py-3 flex flex-row items-center duration-200 border-b text-sm font-semibold ${location.pathname === '/' ? 'text-[#1790E8] border-[#1790E8]' : 'text-[#000] border-[#ffffff] border-opacity-10 hover:bg-[#1a1e24] hover:text-[#1790E8]'}`}>
//                                 Home
//                             </Link>
//                         </li>
//                         {/* Add similar logic for other menu items */}
//                     </ul>
//                 </header>
//             )}
//         </>
//     );
// }

// export default Navbar;
