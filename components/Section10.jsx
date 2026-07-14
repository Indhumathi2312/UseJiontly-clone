import React from "react";
import Link from "next/link";
const Section10AvatarMemojiOne = "/images/69a07934e40c7c34af9e081b_Female Memojis.png";
const Section10AvatarMemojiTwo = "/images/69a0794475d6417c97fbefb1_Female Memojis-1.png";
const Section10AvatarMemojiThree = "/images/69a0795fa62594e1e55db1aa_asdasd.png";
const Section10CreativeGraphic = "/images/698a083b1468c7a2800db9bd_Frame 398.avif";
const Section10DesignFlyer = "/images/698a083b254b889fd6a3117e_NCG Flyer.avif";

export default function Section10() {
  return (
    <section className="bg-ink py-24 text-white relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 relative z-10">
        
        <div className="bg-[#181124] border border-white/10 rounded-[32px] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          
          {/* CTA Content */}
          <div className="w-full md:w-1/2 relative z-10 mb-10 md:mb-0">
            <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 backdrop-blur-md w-fit">
              <div className="flex -space-x-2">
                <img src={Section10AvatarMemojiOne.src || Section10AvatarMemojiOne} alt="User 1" className="w-8 h-8 rounded-full border-2 border-[#181124] bg-pink-100" />
                <img src={Section10AvatarMemojiTwo.src || Section10AvatarMemojiTwo} alt="User 2" className="w-8 h-8 rounded-full border-2 border-[#181124] bg-green-100" />
                <img src={Section10AvatarMemojiThree.src || Section10AvatarMemojiThree} alt="User 3" className="w-8 h-8 rounded-full border-2 border-[#181124] bg-purple-100" />
              </div>
              <div className="flex flex-col items-start ml-2 border-l border-white/20 pl-3">
                <div className="flex text-majorelle text-xs mb-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <span className="text-white text-[10px] uppercase font-semibold tracking-wider">Trusted by 23+ clients</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Got a project in mind? Let's talk.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Whether it's a one-off landing page, a run of campaigns or a
              full website designed and delivered in Webflow, we'll help
              you shape the brief, timeline and budget.
              <br /><br />
              Let's chat about what you're trying to get done and how we
              can support you.
            </p>

            <Link href="/contact" className="inline-flex px-8 py-4 rounded-full bg-white text-ink font-semibold text-lg hover:bg-lavender transition-all shadow-lg hover:scale-105 transform">
              Get in touch
            </Link>
          </div>

          {/* Decorative Images Overlay - replacing Webflow image grid logic */}
          <div className="w-full md:w-1/2 h-[300px] md:h-full relative opacity-50 md:opacity-80">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#181124] z-10 md:hidden"></div>
            <div className="grid grid-cols-2 gap-4 transform rotate-12 scale-125 translate-x-12">
               <img src={Section10CreativeGraphic.src || Section10CreativeGraphic} alt="Creative Graphic" className="rounded-xl shadow-2xl object-cover h-48 w-full border border-white/10" />
               <img src={Section10DesignFlyer.src || Section10DesignFlyer} alt="Design Flyer" className="rounded-xl shadow-2xl object-cover h-64 w-full border border-white/10 -mt-12" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
