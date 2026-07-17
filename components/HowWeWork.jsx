import React from "react";
import Link from "next/link";

export default function HowWeWork() {
  return (
    <section className="bg-neutral-800 py-24 md:py-32 px-4 md:px-6 overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center space-x-2 text-primary-100 font-semibold uppercase tracking-widest text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>How we work</h2>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-6 tracking-tight max-w-3xl">
            Creative that wows in three simple steps
          </h2>
          <p className="text-lg text-neutral-300 max-w-xl">
            We keep things straightforward, so you can focus on running your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <div className="bg-secondary-200/20 rounded-[32px] md:rounded-[40px] pt-12 px-6 md:px-10 overflow-hidden relative flex flex-col items-center text-center col-span-1 min-h-[450px] md:min-h-[500px]">
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-800 mb-6 shadow-sm relative z-10">1</div>
            <h3 className="text-2xl md:text-[28px] font-bold text-neutral-800 mb-4 relative z-10 tracking-tight">Tell us what you need</h3>
            <p className="text-neutral-600 text-sm md:text-[15px] leading-relaxed max-w-[280px] mb-12 relative z-10 font-medium">
              Share your brief or idea and we'll advise on approach, timings and cost. No commitment until you're happy with the plan.
            </p>
            
            {/* Background shape */}
            <div className="absolute -bottom-[30%] -left-[10%] w-[120%] h-[70%] rounded-t-[100%] bg-secondary-200/40 z-0 pointer-events-none"></div>

            {/* UI Graphic */}
            <div className="w-full max-w-[320px] bg-neutral-100 rounded-t-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 pb-12 relative z-10 mt-auto border border-neutral-300 translate-y-4">
              <div className="flex justify-between items-center mb-6">
                <div className="font-bold text-neutral-800 text-sm">Website Design Project</div>
                <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs">✕</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="h-3 w-full bg-neutral-300 rounded-full"></div>
                <div className="h-3 w-3/4 bg-neutral-300 rounded-full"></div>
                <div className="h-3 w-5/6 bg-neutral-300 rounded-full"></div>
              </div>
              <div className="flex space-x-3">
                <div className="h-[38px] flex-1 bg-neutral-200 rounded-full flex items-center justify-center text-[13px] font-bold text-neutral-600">Cancel</div>
                <div className="h-[38px] flex-1 bg-primary-100 rounded-full flex items-center justify-center text-[13px] font-bold text-neutral-100 relative">
                  Submit brief
                  {/* Cursor */}
                  <div className="absolute -bottom-7 right-0 transform translate-x-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary-100 drop-shadow-md">
                      <path d="M15.2536 13.3408C15.9009 13.9493 15.4925 15.0368 14.6046 15.0687L7.46032 15.3254C7.1932 15.335 6.94103 15.4512 6.76011 15.6479L1.73612 21.1119C1.11933 21.7827 0 21.3463 0 20.435V1.3127C0 0.436589 1.04666 -0.0159794 1.68497 0.584131L15.2536 13.3408Z" fill="currentColor"></path>
                    </svg>
                    <div className="bg-primary-100 text-neutral-100 text-[10px] font-bold px-2 py-0.5 rounded shadow absolute top-5 left-3">You</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-200 rounded-[32px] md:rounded-[40px] pt-12 px-6 md:px-10 overflow-hidden relative flex flex-col items-center text-center col-span-1 min-h-[450px] md:min-h-[500px]">
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-800 mb-6 shadow-sm relative z-10">2</div>
            <h3 className="text-2xl md:text-[28px] font-bold text-neutral-800 mb-4 relative z-10 tracking-tight">We get to work</h3>
            <p className="text-neutral-600 text-sm md:text-[15px] leading-relaxed max-w-[320px] mb-12 relative z-10 font-medium">
              Your project is handled by designers, Webflow specialists, and copywriters who understand construction marketing, plus a dedicated account manager who knows your goals.
            </p>
            
            {/* Background shape */}
            <div className="absolute -bottom-[30%] -right-[10%] w-[120%] h-[70%] rounded-t-[100%] bg-neutral-300/50 z-0 pointer-events-none"></div>

            {/* UI Graphic */}
            <div className="w-full max-w-[340px] bg-neutral-100 rounded-t-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-6 pb-12 relative z-10 mt-auto border border-neutral-300 translate-y-4">
              <div className="flex justify-between items-center mb-6">
                <div className="font-bold text-neutral-800 text-sm">Acme Corp Team</div>
                <div className="w-6 h-6 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-400 text-xs">✕</div>
              </div>
              
              <div className="flex justify-between items-end mb-8 px-1">
                <div className="flex flex-col items-center">
                   <div className="text-[8px] font-bold text-neutral-100 bg-primary-100 px-1.5 py-0.5 rounded-full mb-1">Manager</div>
                   <img src="/images/687806ef65e2e9a1e2e4769a_29 6.avif" alt="Manager" className="w-11 h-11 rounded-full bg-primary-100/20 border-2 border-neutral-100 shadow-sm object-cover" />
                </div>
                <div className="flex flex-col items-center">
                   <div className="text-[8px] font-bold text-neutral-800 bg-secondary-200 px-1.5 py-0.5 rounded-full mb-1">Designer</div>
                   <img src="/images/68780a02621f5c44cbc6bdbb_Female Memojis.avif" alt="Designer" className="w-11 h-11 rounded-full bg-secondary-200/20 border-2 border-neutral-100 shadow-sm object-cover" />
                </div>
                <div className="flex flex-col items-center">
                   <div className="text-[8px] font-bold text-neutral-100 bg-secondary-100 px-1.5 py-0.5 rounded-full mb-1">Developer</div>
                   <img src="/images/687809f37ec05a0dae42a79f_27 1.avif" alt="Developer" className="w-11 h-11 rounded-full bg-secondary-100/20 border-2 border-neutral-100 shadow-sm object-cover" />
                </div>
                <div className="flex flex-col items-center">
                   <div className="text-[8px] font-bold text-neutral-100 bg-secondary-200 px-1.5 py-0.5 rounded-full mb-1">Copywriter</div>
                   <img src="/images/68780a115d256d72ec4a1daa_Male Memojis.avif" alt="Copywriter" className="w-11 h-11 rounded-full bg-secondary-200/20 border-2 border-neutral-100 shadow-sm object-cover" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-[18px] h-[18px] rounded-[4px] border-2 border-neutral-300"></div>
                  <div className="h-[10px] w-32 bg-neutral-300 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-[18px] h-[18px] rounded-[4px] bg-secondary-100 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <div className="h-[10px] w-48 bg-neutral-300 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-[18px] h-[18px] rounded-[4px] border-2 border-neutral-300"></div>
                  <div className="h-[10px] w-28 bg-neutral-300 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-[18px] h-[18px] rounded-[4px] bg-secondary-100 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <div className="h-[10px] w-40 bg-neutral-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-primary-100/20 rounded-[32px] md:rounded-[40px] pt-12 px-6 lg:p-14 overflow-hidden relative flex flex-col lg:flex-row items-center lg:items-center col-span-1 lg:col-span-2 min-h-[500px] lg:min-h-[460px]">
            
            {/* Background shape */}
            <div className="absolute -bottom-[10%] lg:-bottom-[40%] -left-[10%] w-[120%] h-[50%] lg:h-[80%] rounded-t-[100%] bg-primary-100/40 z-0 pointer-events-none"></div>

            {/* Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10 w-full lg:w-[45%] mb-12 lg:mb-0 lg:pr-8">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center font-bold text-neutral-800 mb-6 shadow-sm">3</div>
              <h3 className="text-2xl md:text-[32px] font-bold text-neutral-800 mb-4 tracking-tight">Review, refine, launch</h3>
              <p className="text-neutral-600 text-sm md:text-[16px] leading-relaxed mb-8 max-w-[300px] lg:max-w-none font-medium">
                We present the work, gather feedback and refine until it's ready to roll. You get final files, built assets and the option for further support if you need it.
              </p>
              <Link href="/contact" className="px-8 py-[14px] rounded-full bg-primary-100 text-neutral-100 text-[15px] font-bold hover:bg-primary-100/90 transition-all shadow-lg hover:scale-105 inline-block">
                Get in touch
              </Link>
            </div>

            {/* Right Side Graphics Container */}
            <div className="w-full lg:w-[55%] relative z-10 h-[380px] lg:h-full mt-4 lg:mt-0 flex justify-center lg:justify-end">
              
              <div className="relative w-full max-w-[450px] h-full">
                {/* Dark App Image */}
                <div className="absolute bottom-4 left-0 lg:left-[-10%] w-[55%] h-[60%] lg:h-[75%] bg-neutral-800 rounded-[24px] overflow-hidden shadow-2xl z-10 border-[6px] border-primary-100/30">
                  <img src="/images/6980fc88908fd84d4e9991ae_Vector.avif" alt="App Preview" className="w-full h-full object-cover opacity-90 mix-blend-lighten" />
                </div>

                {/* Light Magazine Image */}
                <div className="absolute top-0 lg:top-[5%] right-0 lg:right-[5%] w-[60%] h-[75%] bg-neutral-100 rounded-[24px] overflow-hidden shadow-2xl z-0 border-[6px] border-primary-100/30">
                  <img src="/images/69823456ae794b49c6cbef95_Frame 2147226765.avif" alt="Magazine Mockup" className="w-full h-full object-cover" />
                </div>
                
                {/* Folder Widget */}
                <div className="absolute top-[35%] lg:top-[40%] left-[5%] lg:left-[-5%] bg-neutral-100 rounded-[16px] shadow-xl p-3 flex items-center space-x-12 z-20 transform -translate-y-1/2">
                  <div className="flex items-center space-x-3">
                    <div className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center bg-primary-100/20">
                       <svg className="text-primary-100" width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M8.66634 4.66667L7.92267 3.17928C7.70861 2.7512 7.60161 2.53715 7.44194 2.38077C7.30074 2.24249 7.13054 2.13731 6.94374 2.07287C6.73247 2 6.49315 2 6.01453 2H3.46634C2.71961 2 2.34623 2 2.06102 2.14533C1.81013 2.27315 1.60616 2.47713 1.47833 2.72801C1.33301 3.01323 1.33301 3.3866 1.33301 4.13333V4.66667M1.33301 4.66667H11.4663C12.5865 4.66667 13.1465 4.66667 13.5743 4.88465C13.9507 5.0764 14.2566 5.38236 14.4483 5.75869C14.6663 6.18651 14.6663 6.74653 14.6663 7.86667V10.8C14.6663 11.9201 14.6663 12.4801 14.4483 12.908C14.2566 13.2843 13.9507 13.5903 13.5743 13.782C13.1465 14 12.5865 14 11.4663 14H4.53301C3.4129 14 2.85285 14 2.42503 13.782C2.0487 13.5903 1.74274 13.2843 1.55099 12.908C1.33301 12.4801 1.33301 11.9201 1.33301 10.8V4.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[13px] text-neutral-800">Acme Rebrand</div>
                      <div className="h-[5px] w-[50px] bg-neutral-300 rounded-full mt-1.5"></div>
                    </div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </div>

                {/* Chat Message */}
                <div className="absolute top-[65%] lg:top-[60%] right-[5%] lg:right-[15%] bg-neutral-100 rounded-2xl shadow-xl p-3 pr-4 flex items-start space-x-3 max-w-[240px] z-30">
                  <p className="text-[10px] text-neutral-700 leading-[1.4] font-medium pt-0.5">Hey Ariana! Please find attached your artwork files. Let me know if you have any questions. Thanks!</p>
                  <img src="/images/687806ef65e2e9a1e2e4769a_29 6.avif" alt="avatar" className="w-8 h-8 rounded-full bg-neutral-200 shrink-0 object-cover" />
                </div>

                {/* Account Manager Cursor */}
                <div className="absolute top-[52%] left-[18%] lg:left-[12%] z-30">
                   <div className="bg-secondary-100 text-neutral-100 text-[10px] font-bold px-2 py-0.5 rounded-[4px] shadow-sm whitespace-nowrap">Account Manager</div>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-secondary-100 absolute -top-4 right-2 transform -scale-x-100 drop-shadow-sm">
                      <path d="M15.2536 13.3408C15.9009 13.9493 15.4925 15.0368 14.6046 15.0687L7.46032 15.3254C7.1932 15.335 6.94103 15.4512 6.76011 15.6479L1.73612 21.1119C1.11933 21.7827 0 21.3463 0 20.435V1.3127C0 0.436589 1.04666 -0.0159794 1.68497 0.584131L15.2536 13.3408Z" fill="currentColor"></path>
                   </svg>
                </div>

                {/* Designer Cursor */}
                <div className="absolute bottom-[2%] lg:bottom-[8%] right-[0%] lg:right-[-5%] z-30">
                   <div className="bg-secondary-200 text-neutral-800 text-[10px] font-bold px-2 py-0.5 rounded-[4px] shadow-sm">Designer</div>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-secondary-200 absolute -top-4 right-1 drop-shadow-sm">
                      <path d="M15.2536 13.3408C15.9009 13.9493 15.4925 15.0368 14.6046 15.0687L7.46032 15.3254C7.1932 15.335 6.94103 15.4512 6.76011 15.6479L1.73612 21.1119C1.11933 21.7827 0 21.3463 0 20.435V1.3127C0 0.436589 1.04666 -0.0159794 1.68497 0.584131L15.2536 13.3408Z" fill="currentColor"></path>
                   </svg>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

