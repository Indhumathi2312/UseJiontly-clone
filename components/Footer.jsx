import React from "react";
import Link from "next/link";
const FooterLogo = "/images/684861b5d128cfaad2a2b843_Jointly-Logotype-White-RGB-1.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-neutral-800 py-16 md:py-24 font-sans px-4 md:px-6">
        <div className="max-w-[1500px] mx-auto bg-neutral-100 rounded-[32px] md:rounded-[40px] p-6 md:p-12 lg:p-16">
          
          {/* Newsletter Section */}
          <div className="bg-primary-100/20 rounded-3xl md:rounded-[32px] p-8 md:p-14 mb-12 md:mb-16 flex flex-col items-center text-center">
            <h2 className="text-neutral-800 text-[28px] sm:text-[32px] md:text-5xl font-bold mb-4 tracking-tight max-w-[500px] leading-tight">
              Subscribe to our newsletter
            </h2>
            <p className="text-neutral-500 text-[14px] md:text-[16px] mb-8 max-w-[500px] leading-relaxed font-medium px-4">
              Subscribe to our newsletter to stay in the loop. We share regular insights, updates and expert tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-[500px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="flex-grow bg-neutral-100 border-none rounded-full px-6 py-4 md:py-[18px] text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[14px] md:text-[15px] font-medium"
              />
              <button 
                type="submit"
                className="bg-primary-100 text-neutral-100 font-bold rounded-full px-8 py-4 md:py-[18px] hover:bg-primary-100/90 transition-colors shadow-sm text-[14px] md:text-[15px]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links Area */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 pb-4 lg:pb-10">
            
            {/* Logo Column */}
            <div className="w-full lg:w-[30%] flex flex-col items-start">
              <Link href="/" className="mb-6 block">
                <div 
                  className="w-[110px] h-[33px] bg-primary-100" 
                  style={{ 
                    WebkitMaskImage: `url("${FooterLogo}")`, 
                    maskImage: `url("${FooterLogo}")`, 
                    WebkitMaskSize: 'contain', 
                    WebkitMaskRepeat: 'no-repeat', 
                    WebkitMaskPosition: 'left center' 
                  }} 
                />
              </Link>
              <p className="text-neutral-500 text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-[250px] font-medium">
                Design that sells. Smarter marketing creative, built for busy B2B teams.
              </p>
              
              <div className="flex space-x-3 mb-8 lg:mb-20">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-primary-100 hover:text-primary-100 transition-colors text-neutral-800 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-primary-100 hover:text-primary-100 transition-colors text-neutral-800 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.999 7.377a4.623 4.623 0 100 9.248 4.623 4.623 0 000-9.248zm0 7.627a3.004 3.004 0 110-6.008 3.004 3.004 0 010 6.008z"/>
                    <circle cx="16.806" cy="7.207" r="1.078"/>
                    <path d="M20.533 6.111A4.605 4.605 0 0017.9 3.479a6.606 6.606 0 00-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 00-2.184.42 4.6 4.6 0 00-2.633 2.632 6.585 6.585 0 00-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 002.186-.419 4.613 4.613 0 002.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 00-.421-2.21h.002zm-1.218 9.532a3.56 3.56 0 01-2.006 2.006c-.558.215-1.996.164-5.31.164-3.313 0-4.75.05-5.31-.164a3.563 3.563 0 01-2.006-2.006C4.468 15.084 4.518 13.647 4.518 10.334c0-3.313-.05-4.751.164-5.31a3.562 3.562 0 012.006-2.006c.558-.215 1.996-.164 5.31-.164 3.314 0 4.75-.05 5.31.164a3.562 3.562 0 012.006 2.006c.215.558.164 1.996.164 5.31 0 3.313.05 4.75-.164 5.31z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:border-primary-100 hover:text-primary-100 transition-colors text-neutral-800 shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5ZM0.5 23H4.5V8H0.5V23ZM24 23H20V15.5C20 13.5 19.5 11.5 17 11.5C14.5 11.5 14 13.5 14 15.5V23H10V8H14V10C15 8.5 16.5 7.5 19 7.5C22 7.5 24 9.5 24 14V23Z"/>
                  </svg>
                </a>
              </div>
              
              <p className="text-neutral-400 text-[12px] font-medium hidden lg:block">
                © 2026 JointlyCreative LLP
              </p>
            </div>

            {/* Links Grid */}
            <div className="w-full lg:w-[70%] flex flex-wrap md:flex-nowrap gap-y-10 justify-between lg:justify-end lg:gap-16 xl:gap-24">
              
              {/* Company */}
              <div className="w-full md:w-auto">
                <h4 className="font-bold text-neutral-800 text-[15px] mb-5">Company</h4>
                <ul className="space-y-3.5">
                  <li><Link href="/about-us" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">About Us</Link></li>
                  <li><Link href="/work" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Our Work</Link></li>
                  <li><Link href="/blog" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Blog</Link></li>
                  <li><Link href="/faq" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">FAQs</Link></li>
                </ul>
              </div>

              {/* Case Studies */}
              <div className="w-full md:w-auto">
                <h4 className="font-bold text-neutral-800 text-[15px] mb-5">Case Studies</h4>
                <ul className="space-y-3.5">
                  <li><Link href="/case-study/thx" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">THX</Link></li>
                  <li><Link href="/case-study/emc-gold" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">EMC Gold</Link></li>
                  <li><Link href="/case-study/brymec" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Brymec</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="w-[55%] sm:w-1/2 md:w-auto pr-2">
                <h4 className="font-bold text-neutral-800 text-[15px] mb-5">Services</h4>
                <ul className="space-y-3.5">
                  <li><Link href="/services/webflow-development" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Webflow<br className="hidden md:block"/> Development</Link></li>
                  <li><Link href="/services/presentations" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Presentations</Link></li>
                  <li><Link href="/services/social-media-graphics" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Social Media<br className="hidden md:block"/> Graphics</Link></li>
                  <li><Link href="/services/direct-mail" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Direct Mail</Link></li>
                  <li><Link href="/services/flyers" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Flyers</Link></li>
                  <li><Link href="/services/posters" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Posters</Link></li>
                  <li><Link href="/services/catalogues" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Catalogues</Link></li>
                  <li><Link href="/services/brochures" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Brochures</Link></li>
                  <li><Link href="/services/email-design" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Email Design</Link></li>
                  <li><Link href="/services/branding" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Branding</Link></li>
                  <li><Link href="/services/websites" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Website<br className="hidden md:block"/> Designs</Link></li>
                  <li><Link href="/services/logo-design" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Logo Design</Link></li>
                </ul>
              </div>

              {/* Other */}
              <div className="w-[45%] sm:w-1/2 md:w-auto">
                <h4 className="font-bold text-neutral-800 text-[15px] mb-5">Other</h4>
                <ul className="space-y-3.5">
                  <li><Link href="/privacy-policy" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Terms</Link></li>
                  <li><Link href="/careers" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Careers</Link></li>
                  <li><Link href="/contact" className="text-neutral-500 hover:text-primary-100 transition-colors text-[14px] md:text-[15px] font-medium">Contact</Link></li>
                </ul>
              </div>

            </div>
            
            {/* Mobile Copyright */}
            <p className="text-neutral-400 text-[12px] font-medium block lg:hidden w-full text-left mt-2">
              © 2026 JointlyCreative LLP
            </p>

          </div>
        </div>
      </footer>
      <noscript>
        <img
          height="1"
          width="1"
          style={{
            display: "none",
          }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=7813186&fmt=gif"
        />
      </noscript>
    </>
  );
}
