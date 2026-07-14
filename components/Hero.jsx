import React from "react";
import Link from "next/link";

const HeroAvatarOne = "/images/69a07934e40c7c34af9e081b_Female Memojis.png";
const HeroAvatarTwo = "/images/69a0794475d6417c97fbefb1_Female Memojis-1.png";
const HeroAvatarThree = "/images/69a0795fa62594e1e55db1aa_asdasd.png";
const HeroStars = "/images/684419ba0981e0d5607b0592_Stars.svg";
const HeroMarqueeOne = "/images/698605a6d960909565ea75ae_Frame 2147226767.avif";
const HeroMarqueeTwo = "/images/698605a7c636e0b4740ef1da_Frame 2147226771.avif";
const HeroMarqueeThree = "/images/698605a634d7a8dad332e9c3_photo-square-03.avif";
const HeroMarqueeFour = "/images/698b1fe67ac93fb8d55bc088_posterinmage.avif";
const HeroMarqueeFive = "/images/698605a6b278ec8af13afdf5_Frame 2147227083.avif";
const HeroMarqueeSix = "/images/69f387eabd88f44891292c41_photo-square-03.avif";
const HeroMarqueeSeven = "/images/69f387e9dfbf847b65c6d965_Frame 235.avif";
const HeroMarqueeEight = "/images/698605a65928a4ffc19e190d_Frame 2147227084.avif";

const marqueeImages = [
  { src: HeroMarqueeOne, alt: "Brymec Social Posts", className: "w-[300px] h-auto rounded-xl object-cover" },
  { src: HeroMarqueeTwo, alt: "Anybrief Landing Page Design", className: "w-[200px] h-[300px] rounded-xl object-cover" },
  { src: HeroMarqueeThree, alt: "Brymec Catalogue Mockup", className: "w-[250px] h-[250px] rounded-xl object-cover" },
  { src: HeroMarqueeFour, alt: "Brymec Poster Mockup", className: "w-[200px] h-[300px] rounded-xl object-cover" },
  { src: HeroMarqueeFive, alt: "Third Millennium Logo", className: "w-[300px] h-auto rounded-xl object-cover" },
  { src: HeroMarqueeSix, alt: "Keola Skincare Packaging", className: "w-[250px] h-[250px] rounded-xl object-cover" },
  { src: HeroMarqueeSeven, alt: "Cloudline Mobile Application Mockup", className: "w-[200px] h-[300px] rounded-xl object-cover" },
  { src: HeroMarqueeEight, alt: "Brymec Email Campaign Designs", className: "w-[300px] h-auto rounded-xl object-cover" }
];

export default function Hero() {
  return (
    <section className="bg-[#2f282f] pt-40 pb-20 overflow-hidden flex flex-col items-center text-center">
      <div className="max-w-container mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Eyebrow / Trust Element */}
        <div className="inline-flex items-center space-x-4 bg-[#181124] border border-white/10 rounded-full pl-2 pr-6 py-1.5 mb-8">
          <div className="flex -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-[#181124] bg-pink-200" src={HeroAvatarOne.src || HeroAvatarOne} alt="" />
            <img className="w-8 h-8 rounded-full border-2 border-[#181124] bg-green-200" src={HeroAvatarTwo.src || HeroAvatarTwo} alt="" />
            <img className="w-8 h-8 rounded-full border-2 border-[#181124] bg-purple-200" src={HeroAvatarThree.src || HeroAvatarThree} alt="" />
          </div>
          <div className="flex items-center space-x-2">
            <img className="h-4" src={HeroStars.src || HeroStars} alt="5 Stars" />
            <span className="text-white text-sm font-medium">Trusted by busy marketing teams</span>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
          Creative that wins specs.<br />
          Built for the construction supply chain.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10">
          Help architects, contractors, and specifiers choose you. Without adding to your workload.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
          <Link href="/contact" className="px-8 py-4 rounded-full bg-majorelle text-white font-semibold text-lg hover:bg-opacity-90 transition-all w-full sm:w-auto">
            Get in touch
          </Link>
          <Link href="/work" className="px-8 py-4 rounded-full bg-white text-ink font-semibold text-lg hover:bg-lavender transition-all w-full sm:w-auto">
            Our Work
          </Link>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative w-full overflow-hidden mask-edges mt-8">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-6">
          {/* Duplicate groups for seamless loop */}
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-6 items-center flex-shrink-0">
              {marqueeImages.map((img, idx) => (
                <img key={idx} src={img.src} alt={img.alt} className={img.className} />
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
