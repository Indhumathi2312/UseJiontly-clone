"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Import local images directly for Next.js Image component optimization
import AvatarOne from "../public/images/69a07934e40c7c34af9e081b_Female Memojis.png";
import AvatarTwo from "../public/images/69a0794475d6417c97fbefb1_Female Memojis-1.png";
import AvatarThree from "../public/images/69a0795fa62594e1e55db1aa_asdasd.png";
import Stars from "../public/images/684419ba0981e0d5607b0592_Stars.svg";


const marqueeImages = [
  { src: "/images/698605a6d960909565ea75ae_Frame 2147226767.avif", alt: "Brymec Social Posts", shape: "rect" },
  { src: "/images/698605a7c636e0b4740ef1da_Frame 2147226771.avif", alt: "Anybrief Landing Page Design", shape: "vert" },
  { src: "/images/698605a634d7a8dad332e9c3_photo-square-03.avif", alt: "Brymec Catalogue Mockup", shape: "square" },
  { src: "/images/698b1fe67ac93fb8d55bc088_posterinmage.avif", alt: "Brymec Poster Mockup", shape: "vert" },
  { src: "/images/698605a6b278ec8af13afdf5_Frame 2147227083.avif", alt: "Third Millennium Logo", shape: "rect" },
  { src: "/images/69f387eabd88f44891292c41_photo-square-03.avif", alt: "Keola Skincare Packaging", shape: "square" },
  { src: "/images/69f387e9dfbf847b65c6d965_Frame 235.avif", alt: "Cloudline Mobile Application Mockup", shape: "vert" },
  { src: "/images/698605a65928a4ffc19e190d_Frame 2147227084.avif", alt: "Brymec Email Campaign Designs", shape: "rect" },
];

export default function Hero() {
  // Mimicking the explicit Webflow dimensions for the marquee images
  const getShapeClasses = (shape) => {
    switch (shape) {
      case "rect":
        return "w-[280px] h-[160px] sm:w-[380px] sm:h-[220px] md:w-[480px] md:h-[280px] lg:w-[560px] lg:h-[320px]";
      case "vert":
        return "w-[160px] h-[220px] sm:w-[220px] sm:h-[300px] md:w-[260px] md:h-[360px] lg:w-[280px] lg:h-[400px]";
      case "square":
        return "w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px]";
      default:
        return "";
    }
  };

  return (
    <section className="bg-neutral-800 pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden flex flex-col items-center text-center">
      <div className=" mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Eyebrow / Trust Element */}
        <div className="inline-flex items-center space-x-4 mb-8 bg-neutral-700 border border-neutral-100/10 rounded-full pl-2 pr-6 py-1.5 shadow-sm">
          <div className="flex -space-x-2">
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-neutral-700 bg-secondary-100 overflow-hidden">
                <Image src={AvatarOne} alt="User 1" className="w-full h-full object-cover" placeholder="blur" />
            </div>
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-neutral-700 bg-secondary-200 overflow-hidden">
                <Image src={AvatarTwo} alt="User 2" className="w-full h-full object-cover" placeholder="blur" />
            </div>
            <div className="w-9 h-9 md:w-11 md:h-11 rounded-full border-2 border-neutral-700 bg-primary-100 overflow-hidden">
                <Image src={AvatarThree} alt="User 3" className="w-full h-full object-cover" placeholder="blur" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <Image src={Stars} alt="5 Stars" className="h-[14px] md:h-[18px] w-auto mb-0.5" />
            <span className="text-neutral-100/90 text-[10px] md:text-[14px] font-semibold leading-none tracking-wide">
                Trusted by busy marketing teams
            </span>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-extrabold text-neutral-100 tracking-[-0.02em] mb-6 max-w-[1400px]">
          Creative that wins specs.<br /> Built for the construction supply chain.
        </h1>
        
        <p className="text-lg md:text-[22px] text-neutral-200 max-w-2xl mb-12 font-medium leading-relaxed">
          Help architects, contractors, and specifiers choose you. Without adding to your workload.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full px-4 sm:px-0">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-primary-100 text-neutral-100 font-semibold text-[17px] hover:bg-primary-100/90 transition-colors w-full sm:w-auto min-w-[200px] flex justify-center">
            Get in touch
          </Link>
          <Link href="/work" className="px-8 py-4 rounded-full bg-transparent border border-neutral-100/30 text-neutral-100 font-semibold text-[17px] hover:bg-neutral-100/10 transition-colors w-full sm:w-auto min-w-[200px] flex justify-center">
            Our Work
          </Link>
        </div>
      </div>

      {/* Marquee Section with Framer Motion */}
      <div className="relative w-full overflow-hidden mask-edges mt-16 sm:mt-24 pt-4">
        <motion.div
          className="flex items-center w-max gap-4 sm:gap-6 md:gap-8"
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          {/* Duplicate images array to create a seamless loop */}
          {[...marqueeImages, ...marqueeImages].map((img, idx) => (
            <div key={idx} className={`flex-shrink-0 relative overflow-hidden rounded-2xl bg-black/10 ${getShapeClasses(img.shape)}`}>
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                priority={idx < 4}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
