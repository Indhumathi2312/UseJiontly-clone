import React from "react";
import Link from "next/link";
const Section11FooterLogo = "/images/684861b5d128cfaad2a2b843_Jointly-Logotype-White-RGB-1.svg";

export default function Section11() {
  return (
    <footer className="bg-ink text-white py-20 border-t border-white/10">
      <div className="max-w-container mx-auto px-6">
        
        {/* Newsletter Section */}
        <div className="bg-[#181124] rounded-3xl p-10 md:p-14 mb-20 flex flex-col md:flex-row items-center justify-between border border-white/5 shadow-xl">
          <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-400 text-lg">
              Subscribe to our newsletter to stay in the loop. We share regular
              insights, updates and expert tips.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-majorelle transition-colors"
              />
              <button 
                type="submit"
                className="bg-white text-ink font-semibold rounded-full px-8 py-4 hover:bg-lavender transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <Link href="/" className="mb-6">
              <img 
                src={Section11FooterLogo.src || Section11FooterLogo} 
                alt="Jointly" 
                className="w-32"
              />
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm">
              Design that sells. Smarter marketing creative, built for busy B2B teams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-majorelle hover:border-majorelle transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.501 2C6.97813 2 2.50098 6.47715 2.50098 12C2.50098 16.9913 6.15783 21.1283 10.9385 21.8785V14.8906H8.39941V12H10.9385V9.79688C10.9385 7.29063 12.4314 5.90625 14.7156 5.90625C15.8097 5.90625 16.9541 6.10156 16.9541 6.10156V8.5625H15.6931C14.4509 8.5625 14.0635 9.33334 14.0635 10.1242V12H16.8369L16.3936 14.8906H14.0635V21.8785C18.8441 21.1283 22.501 16.9913 22.501 12C22.501 6.47715 18.0238 2 12.501 2Z" fill="currentColor"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-majorelle hover:border-majorelle transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5281 2.00098C14.6535 2.00284 15.2238 2.00879 15.7166 2.02346L15.9107 2.02981C16.1349 2.03778 16.3561 2.04778 16.6228 2.06028C17.6869 2.10944 18.4128 2.27778 19.0503 2.52528C19.7094 2.77944 20.2661 3.12278 20.8219 3.67861C21.3769 4.23444 21.7203 4.79278 21.9753 5.45028C22.2219 6.08694 22.3903 6.81361 22.4403 7.87778C22.4522 8.14444 22.4618 8.36564 22.4697 8.58989L22.476 8.78397C22.4906 9.27672 22.4973 9.8471 22.4994 10.9725L22.5002 11.7182C22.5003 11.8093 22.5003 11.9033 22.5003 12.0003L22.5002 12.2824L22.4996 13.0281C22.4977 14.1535 22.4918 14.7238 22.4771 15.2166L22.4707 15.4107C22.4628 15.6349 22.4528 15.8561 22.4403 16.1228C22.3911 17.1869 22.2219 17.9128 21.9753 18.5503C21.7211 19.2094 21.3769 19.7661 20.8219 20.3219C20.2661 20.8769 19.7069 21.2203 19.0503 21.4753C18.4128 21.7219 17.6869 21.8903 16.6228 21.9403C16.3561 21.9522 16.1349 21.9618 15.9107 21.9697L15.7166 21.976C15.2238 21.9906 14.6535 21.9973 13.5281 21.9994L12.7824 22.0002C12.6913 22.0003 12.5973 22.0003 12.5003 22.0003L12.2182 22.0002L11.4725 21.9996C10.3471 21.9977 9.77672 21.9918 9.28397 21.9771L9.08989 21.9707C8.86564 21.9628 8.64444 21.9528 8.37778 21.9403C7.31361 21.8911 6.58861 21.7219 5.95028 21.4753C5.29194 21.2211 4.73444 20.8769 4.17861 20.3219C3.62278 19.7661 3.28028 19.2069 3.02528 18.5503C2.77778 17.9128 2.61028 17.1869 2.56028 16.1228C2.5484 15.8561 2.53871 15.6349 2.53086 15.4107L2.52457 15.2166C2.50994 14.7238 2.50327 14.1535 2.50111 13.0281L2.50098 10.9725C2.50284 9.8471 2.50879 9.27672 2.52346 8.78397L2.52981 8.58989C2.53778 8.36564 2.54778 8.14444 2.56028 7.87778C2.60944 6.81278 2.77778 6.08778 3.02528 5.45028C3.27944 4.79194 3.62278 4.23444 4.17861 3.67861C4.73444 3.12278 5.29278 2.78028 5.95028 2.52528C6.58778 2.27778 7.31278 2.11028 8.37778 2.06028C8.64444 2.0484 8.86564 2.03871 9.08989 2.03086L9.28397 2.02457C9.77672 2.00994 10.3471 2.00327 11.4725 2.00111L13.5281 2.00098ZM12.5003 7.00028C9.73738 7.00028 7.50028 9.23981 7.50028 12.0003C7.50028 14.7632 9.73981 17.0003 12.5003 17.0003C15.2632 17.0003 17.5003 14.7607 17.5003 12.0003C17.5003 9.23738 15.2607 7.00028 12.5003 7.00028ZM12.5003 9.00028C14.1572 9.00028 15.5003 10.3429 15.5003 12.0003C15.5003 13.6572 14.1576 15.0003 12.5003 15.0003C10.8434 15.0003 9.50028 13.6576 9.50028 12.0003C9.50028 10.3434 10.8429 9.00028 12.5003 9.00028ZM17.7503 5.50028C17.061 5.50028 16.5003 6.06018 16.5003 6.74943C16.5003 7.43867 17.0602 7.99944 17.7503 7.99944C18.4395 7.99944 19.0003 7.43954 19.0003 6.74943C19.0003 6.06018 18.4386 5.49941 17.7503 5.50028Z" fill="currentColor"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-majorelle hover:border-majorelle transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8362 18.339H16.1707V14.1622C16.1707 13.1662 16.1505 11.8845 14.7817 11.8845C13.392 11.8845 13.1797 12.9683 13.1797 14.0887V18.339H10.5142V9.75H13.0747V10.9207H13.1092C13.467 10.2457 14.337 9.53325 15.6367 9.53325C18.3375 9.53325 18.837 11.3108 18.837 13.6245L18.8362 18.339ZM7.50373 8.57475C6.64573 8.57475 5.95648 7.88025 5.95648 7.026C5.95648 6.1725 6.64648 5.47875 7.50373 5.47875C8.35873 5.47875 9.05173 6.1725 9.05173 7.026C9.05173 7.88025 8.35798 8.57475 7.50373 8.57475ZM8.84023 18.339H6.16723V9.75H8.84023V18.339ZM20.1697 3H4.82923C4.09498 3 3.50098 3.5805 3.50098 4.29675V19.7033C3.50098 20.4202 4.09498 21 4.82923 21H20.1675C20.901 21 21.501 20.4202 21.501 19.7033V4.29675C21.501 3.5805 20.901 3 20.1675 3H20.1697Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/work" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Case Studies Column */}
          <div>
            <h4 className="font-semibold mb-6">Case Studies</h4>
            <ul className="space-y-4">
              <li><Link href="/case-study/thx" className="text-gray-400 hover:text-white transition-colors">THX</Link></li>
              <li><Link href="/case-study/emc-gold" className="text-gray-400 hover:text-white transition-colors">EMC Gold</Link></li>
              <li><Link href="/case-study/brymec" className="text-gray-400 hover:text-white transition-colors">Brymec</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/webflow-development" className="text-gray-400 hover:text-white transition-colors">Webflow Development</Link></li>
              <li><Link href="/services/presentations" className="text-gray-400 hover:text-white transition-colors">Presentations</Link></li>
              <li><Link href="/services/social-media-graphics" className="text-gray-400 hover:text-white transition-colors">Social Media Graphics</Link></li>
              <li><Link href="/services/direct-mail" className="text-gray-400 hover:text-white transition-colors">Direct Mail</Link></li>
              <li><Link href="/services/flyers" className="text-gray-400 hover:text-white transition-colors">Flyers</Link></li>
              <li><Link href="/services/posters" className="text-gray-400 hover:text-white transition-colors">Posters</Link></li>
              <li><Link href="/services/catalogues" className="text-gray-400 hover:text-white transition-colors">Catalogues</Link></li>
              <li><Link href="/services/brochures" className="text-gray-400 hover:text-white transition-colors">Brochures</Link></li>
              <li><Link href="/services/email-design" className="text-gray-400 hover:text-white transition-colors">Email Design</Link></li>
              <li><Link href="/services/branding" className="text-gray-400 hover:text-white transition-colors">Branding</Link></li>
              <li><Link href="/services/websites" className="text-gray-400 hover:text-white transition-colors">Website Designs</Link></li>
              <li><Link href="/services/logo-design" className="text-gray-400 hover:text-white transition-colors">Logo Design</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-sm text-gray-500">
          <p className="mb-4 md:mb-0">© 2026 JointlyCreative LLP</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
