import React from "react";
import Link from "next/link";
const WhyJointlyLogoOne = "/images/69f0f39500ef26bc30b00d86_Group 46923.png";
const WhyJointlyLogoTwo = "/images/684450fe114beeb6006e49a3_Vector.png";
const WhyJointlyLogoThree = "/images/69f0f395217e25d1bbd1d57d_Vector.png";
const WhyJointlyLogoFour = "/images/684450ff77a499af83d1ed50_logo-black 1.svg";
const WhyJointlyLogoFive = "/images/69f0f395383c9e35ce8807b6_logo (1) 1.png";
const WhyJointlyLogoSix = "/images/6844510156638440f1e9b486_Layer_1.svg";
const WhyJointlyLogoSeven = "/images/698a017d45fddd6be9349f19_Component 9.avif";
const WhyJointlyLogoEight = "/images/698a017dd0dc205ef32091f9_Component 7.avif";
const WhyJointlyLogoNine = "/images/698a017d907354b6560459d1_Vector.avif";
const WhyJointlyCardOne = "/images/698b2799b57942d2c5dc8352_new.avif";
const WhyJointlyCardTwo = "/images/6980fb1c03798918667ceff5_Frame 2147226771.avif";
const WhyJointlyQuote = "/images/684461db8508ba660c8486d0_“.svg";
const WhyJointlyAvatar = "/images/68b30a03af033e748b414851_jarl.avif";
const WhyJointlyBrymecLogo = "/images/6980fc88908fd84d4e9991ae_Vector.avif";
const WhyJointlyFlyer = "/images/698b2d70477beb2adb9529dc_asdawe12232.avif";

const logos = [
  { src: WhyJointlyLogoOne.src || WhyJointlyLogoOne, alt: "Logo 1" },
  { src: WhyJointlyLogoTwo.src || WhyJointlyLogoTwo, alt: "HID Logo" },
  { src: WhyJointlyLogoThree.src || WhyJointlyLogoThree, alt: "Logo 3" },
  { src: WhyJointlyLogoFour.src || WhyJointlyLogoFour, alt: "Logo for manufacturing company" },
  { src: WhyJointlyLogoFive.src || WhyJointlyLogoFive, alt: "Logo 5" },
  { src: WhyJointlyLogoSix.src || WhyJointlyLogoSix, alt: "NCG Logo" },
  { src: WhyJointlyLogoSeven.src || WhyJointlyLogoSeven, alt: "NEW Logo" },
  { src: WhyJointlyLogoEight.src || WhyJointlyLogoEight, alt: "Emcgold Logo" },
  { src: WhyJointlyLogoNine.src || WhyJointlyLogoNine, alt: "Brymec Logo" }
];

export default function WhyJointly() {
  return (
    <section id="why-jointly" className="w-full bg-neutral-100 text-neutral-800 pt-20 pb-32">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        
        {/* Logo Wall Marquee */}
        <div className="relative w-full overflow-hidden mb-32 mask-edges-white border-y border-neutral-300 py-8">
          <div className="flex whitespace-nowrap animate-marquee-fast items-center gap-12">
            {[1, 2].map((group) => (
              <div key={group} className="flex gap-12 items-center flex-shrink-0">
                {logos.map((logo, idx) => (
                  <img key={idx} src={logo.src} alt={logo.alt} className="h-10 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain" />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side */}
          <div className="flex flex-col items-start max-w-xl">
            <div className="flex items-center space-x-2 text-primary-100 font-semibold uppercase tracking-widest text-xs mb-6">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
              <h2>Why Jointly?</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-800 mb-6">
              Your products deliver. <br/>
              <span className="text-neutral-500">Your marketing should too.</span>
            </h3>
            
            <p className="text-lg text-neutral-500 leading-relaxed mb-10">
              We're a creative agency built specifically for the construction
              supply chain: building product manufacturers, distributors, and
              tool hire. You know your market. We know how to reach them.
              <br /><br />
              We turn technical complexity into clear, credible positioning
              that gets you on specification lists, earns trade loyalty, and
              stands out in a sector where most competitors look the same.
            </p>
            
            <Link href="/contact" className="px-8 py-4 rounded-full bg-primary-100 text-neutral-100 font-semibold text-lg hover:bg-primary-100/90 transition-all shadow-lg shadow-primary-100/30">
              Get in touch
            </Link>
          </div>

          {/* Right Side (Masonry / Grid style layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Column 1 */}
            <div className="flex flex-col space-y-6 mt-0 sm:mt-12">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={WhyJointlyCardOne.src || WhyJointlyCardOne} alt="Thank you message" className="w-full h-auto object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={WhyJointlyCardTwo.src || WhyJointlyCardTwo} alt="Anybrief website" className="w-full h-auto object-cover" />
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col space-y-6">
              {/* Testimonial Card */}
              <div className="bg-neutral-200 rounded-3xl p-8 relative shadow-lg">
                <img src={WhyJointlyQuote.src || WhyJointlyQuote} alt="quote" className="absolute top-6 right-6 w-8 h-6 opacity-30" />
                <p className="text-neutral-800 font-medium text-lg leading-snug mb-6 relative z-10">
                  “Love the personal account relationship we have and we are
                  made to feel like the best customer. The enthusiasm,
                  cheerfulness, and speed of the team is awesome and the
                  communication is always incredible!”
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={WhyJointlyAvatar.src || WhyJointlyAvatar} alt="Jarl Hobbs" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-neutral-800 text-sm">Jarl Hobbs</h4>
                      <p className="text-neutral-500 text-xs">Head of Brand & Marketing</p>
                    </div>
                  </div>
                  <img src={WhyJointlyBrymecLogo.src || WhyJointlyBrymecLogo} alt="Brymec Logo" className="h-6 w-auto object-contain" />
                </div>
              </div>

              {/* Flyer Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={WhyJointlyFlyer.src || WhyJointlyFlyer} alt="Brymec Flyer" className="w-full h-auto object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
