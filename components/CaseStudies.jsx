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
    <section className="bg-ink py-24 text-white">
      <div className="max-w-container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-majorelle font-semibold uppercase tracking-widest text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Case studies</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-xl leading-tight">
            The work behind the results
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            A closer look at how we market construction brands with clarity
            and credibility.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="group flex flex-col h-full bg-[#181124] border border-white/10 rounded-[32px] overflow-hidden hover:border-majorelle/50 transition-colors">
              <Link href={study.link} className="relative block aspect-[4/3] overflow-hidden">
                <img 
                  src={study.imgSrc} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <Link href={study.link} className="block mb-6">
                  <h3 className="text-2xl font-bold leading-tight group-hover:text-majorelle transition-colors">
                    {study.title}
                  </h3>
                </Link>
                <Link href={study.link} className="inline-flex items-center text-white font-semibold group/link w-fit">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                    <path d="M1.75 6.5H11.5M7 1.25L12.25 6.5L7 11.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link href="/case-studies" className="px-8 py-4 rounded-full bg-white text-ink font-semibold text-lg hover:bg-lavender transition-all">
            View more
          </Link>
        </div>

      </div>
    </section>
  );
}
