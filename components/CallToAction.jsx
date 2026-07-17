import React from "react";
import Link from "next/link";
const Section10AvatarMemojiOne = "/images/69a07934e40c7c34af9e081b_Female Memojis.png";
const Section10AvatarMemojiTwo = "/images/69a0794475d6417c97fbefb1_Female Memojis-1.png";
const Section10AvatarMemojiThree = "/images/69a0795fa62594e1e55db1aa_asdasd.png";
const Section10CreativeGraphic = "/images/698a083b1468c7a2800db9bd_Frame 398.avif";
const Section10DesignFlyer = "/images/698a083b254b889fd6a3117e_NCG Flyer.avif";
const MagazineMockup = "/images/69823456ae794b49c6cbef95_Frame 2147226765.avif";

export default function CallToAction() {
  return (
    <section className="bg-neutral-800 py-16 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto px-4 md:px-6">
        
        <div className="bg-primary-100 rounded-[32px] md:rounded-[40px] p-8 py-14 md:p-14 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center md:min-h-[550px]">
          
          {/* Background Circles (Desktop) */}
          <svg className="absolute top-0 right-0 w-[120%] h-[120%] pointer-events-none hidden md:block z-0 transform translate-x-[20%] -translate-y-[10%]" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="300" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
            <circle cx="500" cy="500" r="500" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
            <circle cx="500" cy="500" r="700" stroke="white" strokeOpacity="0.15" strokeWidth="1"/>
            <path d="M 100 -100 C 400 200 700 300 900 100" stroke="white" strokeOpacity="0.15" strokeWidth="1" fill="none"/>
          </svg>

          {/* Background Images Overlay (Mobile/Tablet) */}
          <div className="absolute inset-0 z-0 md:hidden overflow-hidden pointer-events-none flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-100/70 z-10 mix-blend-color"></div>
            <div className="absolute inset-0 bg-primary-100/30 z-10"></div>
            <div className="grid grid-cols-2 gap-4 w-[160%] h-[160%] transform rotate-[-15deg] opacity-40 scale-125">
              <img src={MagazineMockup} className="w-full h-full object-cover rounded-[24px]" alt="" />
              <img src={Section10DesignFlyer} className="w-full h-full object-cover rounded-[24px]" alt="" />
              <img src={Section10CreativeGraphic} className="w-full h-full object-cover rounded-[24px]" alt="" />
              <img src={MagazineMockup} className="w-full h-full object-cover rounded-[24px]" alt="" />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[60%] lg:w-[55%] relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Mobile/Tablet Trust Badge */}
            <div className="flex flex-col items-center mb-8 md:hidden">
              <div className="flex -space-x-2 mb-3">
                <img src={Section10AvatarMemojiOne} className="w-10 h-10 rounded-full border-2 border-primary-100 bg-secondary-200 shadow-sm object-cover" alt="User" />
                <img src={Section10AvatarMemojiTwo} className="w-10 h-10 rounded-full border-2 border-primary-100 bg-secondary-100/20 shadow-sm object-cover" alt="User" />
                <img src={Section10AvatarMemojiThree} className="w-10 h-10 rounded-full border-2 border-primary-100 bg-primary-100/20 shadow-sm object-cover" alt="User" />
              </div>
              <div className="flex text-secondary-200 mb-1.5 space-x-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span className="text-neutral-100 text-[13px] font-bold tracking-wide">Trusted by 23+ clients</span>
            </div>

            <h2 className="text-[38px] md:text-5xl lg:text-[60px] font-bold mb-6 text-neutral-100 leading-[1.05] tracking-tight max-w-[600px]">
              Got a project in mind?<br className="hidden lg:block"/> Let's talk.
            </h2>
            <p className="text-neutral-100/95 text-[15px] md:text-[17px] leading-relaxed mb-6 font-medium max-w-[500px]">
              Whether it's a one-off landing page, a run of campaigns or a
              full website designed and delivered in Webflow, we'll help
              you shape the brief, timeline and budget.
            </p>
            <p className="text-neutral-100/95 text-[15px] md:text-[17px] leading-relaxed mb-10 font-medium max-w-[500px]">
              Let's chat about what you're trying to get done and how we
              can support you.
            </p>

            <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
              <Link href="/contact" className="px-8 py-4 rounded-full bg-neutral-100 text-neutral-800 font-bold text-[16px] shadow-xl hover:scale-105 transition-transform w-fit whitespace-nowrap">
                Get in touch
              </Link>
              
              {/* Desktop Trust Badge */}
              <div className="hidden md:flex items-center space-x-3 ml-2">
                <div className="flex -space-x-2">
                  <img src={Section10AvatarMemojiOne} className="w-10 h-10 rounded-full border-2 border-primary-100 bg-secondary-200 shadow-sm object-cover" alt="User" />
                  <img src={Section10AvatarMemojiTwo} className="w-10 h-10 rounded-full border-2 border-primary-100 bg-secondary-100/20 shadow-sm object-cover" alt="User" />
                  <img src={Section10AvatarMemojiThree} className="w-10 h-10 rounded-full border-2 border-primary-100 bg-primary-100/20 shadow-sm object-cover" alt="User" />
                </div>
                <div className="flex flex-col">
                  <div className="flex text-secondary-200 mb-1 space-x-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <span className="text-neutral-100 text-[12px] font-bold tracking-wide">Trusted by busy marketing teams</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Right Side Floating Mockups */}
          <div className="hidden md:block absolute top-0 right-[-5%] w-[50%] h-full pointer-events-none z-10">
            {/* Green Magazine */}
            <img src={MagazineMockup} className="absolute top-[-5%] right-[10%] w-[55%] rounded-3xl shadow-2xl object-cover transform rotate-[-4deg]" alt="Mockup" />
            {/* Poster */}
            <img src={Section10DesignFlyer} className="absolute top-[35%] right-[5%] w-[50%] rounded-3xl shadow-2xl object-cover transform rotate-[2deg]" alt="Mockup" />
            {/* Dark UI */}
            <img src={Section10CreativeGraphic} className="absolute bottom-[-10%] right-[15%] w-[60%] rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] object-cover transform rotate-[-2deg]" alt="Mockup" />
          </div>

        </div>
      </div>
    </section>
  );
}
