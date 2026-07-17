"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NavbarLogo = "/images/684413c1e5bafea869d386d8_Jointly-Logotype-White-RGB 1.svg";

const services = [
  { name: "Webflow Development", path: "/services/webflow-development" },
  { name: "Presentations", path: "/services/presentations" },
  { name: "Social Media Graphics", path: "/services/social-media-graphics" },
  { name: "Direct Mail", path: "/services/direct-mail" },
  { name: "Flyers", path: "/services/flyers" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > lastScroll && currentScroll > 100);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <header 
        className={`fixed top-4 md:top-6 left-0 right-0 z-50 transition-transform duration-300 ${isScrolled ? '-translate-y-[150%]' : 'translate-y-0'} px-4 md:px-6`}
      >
        <div className="max-w-[1200px] mx-auto bg-neutral-100 rounded-full p-2 sm:p-2.5 flex items-center justify-between shadow-xl">
          
          {/* nav-left */}
          <div className="flex items-center shrink-0 pl-3 sm:pl-5">
            <Link href="/" className="flex items-center">
              {/* Purple Mask for Logo */}
              <div 
                className="w-[110px] h-[30px] sm:w-[125px] sm:h-[34px] bg-primary-100" 
                style={{ 
                  WebkitMaskImage: `url("${NavbarLogo}")`, 
                  maskImage: `url("${NavbarLogo}")`, 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'left center' 
                }} 
              />
            </Link>
          </div>
          
          {/* nav-menu-2 (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center space-x-7 flex-1 px-4 h-full">
            <Link href="/about-us" className="text-neutral-800 hover:text-primary-100 transition-colors text-[15px] font-medium leading-none">
              About
            </Link>
            
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-neutral-800 hover:text-primary-100 transition-colors text-[15px] font-medium leading-none group py-4">
                Services
                <svg className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 text-neutral-500 group-hover:text-primary-100 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
                  <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="currentColor" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[50px] left-1/2 -translate-x-1/2 pt-2 z-50"
                  >
                    <div className="w-[600px] bg-neutral-100 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-4 border border-neutral-300 cursor-default">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                        {services.map((service, idx) => (
                          <Link 
                            key={idx} 
                            href={service.path}
                            className="flex items-center p-3 rounded-xl hover:bg-neutral-200 transition-colors group/link"
                          >
                            <div className="w-10 h-10 shrink-0 rounded-[10px] bg-neutral-200 flex items-center justify-center mr-4 group-hover/link:bg-neutral-100 transition-all text-primary-100 shadow-sm">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1V15M13.25 2.75L2.75 13.25M15 8H1M13.25 13.25L2.75 2.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-neutral-800 font-bold text-[15px]">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="pt-2 border-t border-neutral-300">
                        <Link href="/services" className="w-full bg-neutral-200 text-neutral-800 rounded-[10px] py-4 px-5 flex justify-between items-center hover:bg-primary-100 hover:text-neutral-100 transition-colors group/btn">
                          <span className="font-bold text-[15px]">View all services</span>
                          <svg className="w-4 h-4 text-current transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 6.5H11.5M7 1.25L12.25 6.5L7 11.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/careers" className="text-neutral-800 hover:text-primary-100 transition-colors text-[15px] font-medium leading-none">Careers</Link>
            <Link href="/work" className="text-neutral-800 hover:text-primary-100 transition-colors text-[15px] font-medium leading-none">Portfolio</Link>
            <Link href="/case-studies" className="text-neutral-800 hover:text-primary-100 transition-colors text-[15px] font-medium leading-none">Case Studies</Link>
            <Link href="/blog" className="text-neutral-800 hover:text-primary-100 transition-colors text-[15px] font-medium leading-none">Blog</Link>
          </nav>
          
          {/* nav-right */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Desktop & Tablet Button */}
            <div className="hidden sm:flex items-center">
              <Link href="/contact" className="px-6 py-[14px] md:px-8 md:py-[16px] rounded-full bg-primary-100 text-neutral-100 hover:bg-primary-100/90 text-[14px] md:text-[15px] font-semibold transition-colors">
                Get in touch
              </Link>
            </div>
            
            {/* Mobile/Tablet Hamburger/Close Button */}
            <button 
              className={`lg:hidden relative w-12 h-12 md:w-[52px] md:h-[52px] flex justify-center items-center rounded-full transition-all border ${isMenuOpen ? 'bg-neutral-200 text-primary-100 border-transparent' : 'bg-neutral-100 border-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:border-neutral-200 hover:text-primary-100'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.460257 0.460257C1.07395 -0.153419 2.06891 -0.153419 2.68261 0.460257L11 8.7777L19.3174 0.460257C19.9311 -0.153419 20.9261 -0.153419 21.5398 0.460257C22.1534 1.07395 22.1534 2.06891 21.5398 2.68261L13.2223 11L21.5398 19.3174C22.1534 19.9311 22.1534 20.9261 21.5398 21.5398C20.9261 22.1534 19.9311 22.1534 19.3174 21.5398L11 13.2223L2.68261 21.5398C2.06891 22.1534 1.07395 22.1534 0.460257 21.5398C-0.153419 20.9261 -0.153419 19.9311 0.460257 19.3174L8.7777 11L0.460257 2.68261C-0.153419 2.06891 -0.153419 1.07395 0.460257 0.460257Z" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.75 12H21.25M2.75 5.75H21.25M2.75 18.25H11.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown Card */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden max-w-[1240px] mx-auto mt-3 bg-neutral-100 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-2 max-h-[calc(100vh-130px)] overflow-y-auto">
                <Link href="/about-us" className="text-neutral-800 text-[16px] font-bold py-3 border-b border-neutral-300" onClick={() => setIsMenuOpen(false)}>About</Link>
                
                <div className="flex flex-col border-b border-neutral-300">
                  <button 
                    className="flex justify-between items-center text-neutral-800 text-[16px] font-bold w-full text-left py-3"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Services
                    <svg className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none">
                      <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="currentColor" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col space-y-1 pb-3 pl-2"
                      >
                        {services.map((service, idx) => (
                          <Link 
                            key={idx} 
                            href={service.path} 
                            className="text-neutral-600 hover:text-primary-100 text-[15px] font-medium py-2 px-2 transition-colors" 
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/careers" className="text-neutral-800 text-[16px] font-bold py-3 border-b border-neutral-300" onClick={() => setIsMenuOpen(false)}>Careers</Link>
                <Link href="/work" className="text-neutral-800 text-[16px] font-bold py-3 border-b border-neutral-300" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                <Link href="/case-studies" className="text-neutral-800 text-[16px] font-bold py-3 border-b border-neutral-300" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                <Link href="/blog" className="text-neutral-800 text-[16px] font-bold py-3" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
