import React from "react";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="bg-ink py-32 px-6 overflow-hidden">
      <div className="max-w-container mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center space-x-2 text-majorelle font-semibold uppercase tracking-widest text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>How we work</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Creative that wows in three simple steps
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            We keep things straightforward, so you can focus on running your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#181124] rounded-[32px] p-8 border border-white/10 relative flex flex-col justify-between h-[450px] overflow-hidden group hover:border-majorelle/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-majorelle/20 text-majorelle flex items-center justify-center font-bold text-lg mb-6">1</div>
              <h3 className="text-2xl font-bold text-white mb-4">Tell us what you need</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Share your brief or idea and we'll advise on approach, timings and cost. No commitment until you're happy with the plan.
              </p>
            </div>
            
            {/* Fake UI Graphic 1 */}
            <div className="absolute -bottom-10 -right-10 w-3/4 h-48 bg-white rounded-tl-2xl shadow-2xl p-4 transform rotate-[-5deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/6864dda07e32c65dfa2845f6_Frame-427322460.svg" alt="icon" className="w-6 h-6" />
                <div className="h-2 w-24 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-2 w-full bg-gray-100 rounded"></div>
                <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                <div className="h-2 w-3/5 bg-gray-100 rounded"></div>
              </div>
              <div className="flex space-x-2">
                <div className="h-6 w-16 bg-gray-200 rounded"></div>
                <div className="h-6 w-20 bg-majorelle rounded"></div>
              </div>
              {/* Fake Cursor */}
              <div className="absolute top-2 left-10 flex flex-col items-center">
                <div className="bg-majorelle text-white text-[10px] px-2 py-0.5 rounded shadow">You</div>
                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" className="text-majorelle mt-1">
                  <path d="M15.2536 13.3408C15.9009 13.9493 15.4925 15.0368 14.6046 15.0687L7.46032 15.3254C7.1932 15.335 6.94103 15.4512 6.76011 15.6479L1.73612 21.1119C1.11933 21.7827 0 21.3463 0 20.435V1.3127C0 0.436589 1.04666 -0.0159794 1.68497 0.584131L15.2536 13.3408Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#181124] rounded-[32px] p-8 border border-white/10 relative flex flex-col justify-between h-[450px] overflow-hidden group hover:border-lime/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-lime/20 text-lime flex items-center justify-center font-bold text-lg mb-6">2</div>
              <h3 className="text-2xl font-bold text-white mb-4">We get to work</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                Your project is handled by designers, Webflow specialists, and copywriters who understand construction marketing.
              </p>
            </div>

            {/* Fake UI Graphic 2 */}
            <div className="absolute -bottom-10 -right-4 w-[90%] h-56 bg-[#0C021C] rounded-tl-2xl shadow-2xl p-5 border border-white/10 transform rotate-[3deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500">
              <div className="flex -space-x-3 mb-6">
                 <img src="/images/687806ef65e2e9a1e2e4769a_29 6.avif" alt="Team" className="w-10 h-10 rounded-full border-2 border-[#0C021C] bg-blue-200" />
                 <img src="/images/687809f37ec05a0dae42a79f_27 1.avif" alt="Team" className="w-10 h-10 rounded-full border-2 border-[#0C021C] bg-yellow-200" />
                 <img src="/images/68780a02621f5c44cbc6bdbb_Female Memojis.avif" alt="Team" className="w-10 h-10 rounded-full border-2 border-[#0C021C] bg-green-200" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded bg-gray-700"></div>
                  <div className="h-2 w-32 bg-gray-700 rounded"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded bg-lime flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="#0C021C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <div className="h-2 w-24 bg-gray-500 rounded"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded bg-gray-700"></div>
                  <div className="h-2 w-28 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#181124] rounded-[32px] p-8 border border-white/10 relative flex flex-col justify-between h-[450px] overflow-hidden group hover:border-mauve/50 transition-colors">
            <div>
              <div className="w-10 h-10 rounded-full bg-mauve/20 text-mauve flex items-center justify-center font-bold text-lg mb-6">3</div>
              <h3 className="text-2xl font-bold text-white mb-4">Review, refine, launch</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[280px]">
                We present the work, gather feedback and refine until it's ready to roll. You get final files and built assets.
              </p>
            </div>
            
            <Link href="/contact" className="mt-4 px-6 py-3 rounded-full bg-white text-ink text-sm font-semibold hover:bg-lavender transition-all w-fit relative z-10 shadow-lg group-hover:scale-105">
              Get in touch
            </Link>

            {/* Fake UI Graphic 3 */}
            <div className="absolute -bottom-4 -right-10 w-[80%] h-48 bg-white rounded-tl-2xl shadow-2xl p-4 transform rotate-[-3deg] group-hover:rotate-0 group-hover:-translate-y-2 transition-all duration-500">
               <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.66634 4.66667L7.92267 3.17928C7.70861 2.7512 7.60161 2.53715 7.44194 2.38077C7.30074 2.24249 7.13054 2.13731 6.94374 2.07287C6.73247 2 6.49315 2 6.01453 2H3.46634C2.71961 2 2.34623 2 2.06102 2.14533C1.81013 2.27315 1.60616 2.47713 1.47833 2.72801C1.33301 3.01323 1.33301 3.3866 1.33301 4.13333V4.66667M1.33301 4.66667H11.4663C12.5865 4.66667 13.1465 4.66667 13.5743 4.88465C13.9507 5.0764 14.2566 5.38236 14.4483 5.75869C14.6663 6.18651 14.6663 6.74653 14.6663 7.86667V10.8C14.6663 11.9201 14.6663 12.4801 14.4483 12.908C14.2566 13.2843 13.9507 13.5903 13.5743 13.782C13.1465 14 12.5865 14 11.4663 14H4.53301C3.4129 14 2.85285 14 2.42503 13.782C2.0487 13.5903 1.74274 13.2843 1.55099 12.908C1.33301 12.4801 1.33301 11.9201 1.33301 10.8V4.66667Z" stroke="#874FD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <div>
                    <div className="text-ink font-semibold text-xs mb-1">Acme Rebrand</div>
                    <div className="h-1 w-16 bg-gray-200 rounded"></div>
                  </div>
               </div>
               
               <div className="bg-gray-50 rounded p-3 mt-4 relative">
                 <p className="text-[10px] text-gray-600 pr-6">Hey! Please find attached your artwork files. Let me know if you have any questions.</p>
                 <img src="/images/687806ef65e2e9a1e2e4769a_29 6.avif" alt="avatar" className="w-6 h-6 rounded-full absolute -right-3 -top-3 border-2 border-white shadow-sm" />
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
