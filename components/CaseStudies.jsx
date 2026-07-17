import React from "react";
import Link from "next/link";
const CaseStudiesBrymec = "/images/6a15e100bbbf11e873491617_img.png";
const CaseStudiesTHX = "/images/6a3ab2c4df48ce647f00aacd_leftintro.png";

const caseStudies = [
  {
    title: "Brymec brings a 400-page M&E catalogue to market",
    link: "/case-study/brymec",
    imgSrc: CaseStudiesBrymec.src || CaseStudiesBrymec,
  },
  {
    title: "THX turns an end-of-year thank you into a customer retention campaign",
    link: "/case-study/thx",
    imgSrc: CaseStudiesTHX.src || CaseStudiesTHX,
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-neutral-800 py-20 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-primary-100 font-bold uppercase tracking-wider text-[11px] md:text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Case studies</h2>
          </div>
          <h2 className="text-[36px] md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-neutral-100 mb-5 tracking-tight max-w-[650px]">
            The work behind the results
          </h2>
          <p className="text-neutral-300 text-[16px] md:text-lg leading-relaxed max-w-[600px]">
            A closer look at how we market construction brands with clarity and credibility.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-neutral-100 rounded-[32px] p-5 md:p-6 flex flex-col group shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <Link href={study.link} className="relative block aspect-[1.5] md:aspect-[1.6] rounded-2xl md:rounded-[20px] overflow-hidden mb-6 md:mb-8 bg-neutral-200">
                <img 
                  src={study.imgSrc} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-col justify-between flex-grow px-2 md:px-4 pb-2 md:pb-4">
                <Link href={study.link} className="block mb-8">
                  <h3 className="text-xl md:text-[26px] font-bold leading-tight text-neutral-800 tracking-tight group-hover:text-primary-100 transition-colors">
                    {study.title}
                  </h3>
                </Link>
                <Link href={study.link} className="inline-flex items-center text-primary-100 text-sm md:text-[15px] font-semibold group/link w-fit">
                  <span>Learn more</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-4">
          <Link href="/case-studies" className="px-10 py-3.5 md:py-4 rounded-full bg-primary-100 text-neutral-100 font-semibold text-[14px] md:text-[15px] hover:bg-primary-100/90 transition-all shadow-lg hover:scale-105">
            View more
          </Link>
        </div>

      </div>
    </section>
  );
}
