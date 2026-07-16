import React from "react";

export default function Benefits() {
  return (
    <section className="bg-white py-20 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-[#9D71FD] font-bold uppercase tracking-wider text-[11px] md:text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Benefits</h2>
          </div>
          <h2 className="text-[36px] md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-[#2B2733] mb-5 tracking-tight max-w-[650px]">
            Everything you need, in one place
          </h2>
          <p className="text-[#645E76] text-[16px] md:text-lg leading-relaxed">
            Explore the Jointly advantage.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
          
          {/* Card 1: Specialist Support */}
          <div className="col-span-1 md:col-span-1 lg:col-span-7 bg-[#FCF6D6] rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row justify-between items-center overflow-hidden h-full">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col justify-center">
              <h3 className="text-[26px] md:text-[32px] font-bold mb-4 text-[#2B2733] tracking-tight leading-tight">Specialist support</h3>
              <p className="text-[#5A574E] text-[15px] leading-relaxed font-medium">
                Work with a team of creatives and an account manager who
                understand your audience: specifiers, contractors,
                distributors, and trades.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col space-y-4">
              {/* Pill 1 */}
              <div className="bg-white p-3 rounded-full flex justify-between items-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#D1F4E0] flex items-center justify-center overflow-hidden">
                    <img src="/images/68780a02621f5c44cbc6bdbb_Female Memojis.avif" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="h-1.5 w-16 bg-[#F3F4F6] rounded-full mb-1.5"></div>
                    <div className="text-[13px] font-bold text-[#2B2733]">Account Manager</div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mr-2">
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>
              {/* Pill 2 */}
              <div className="bg-white p-3 rounded-full flex justify-between items-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FCE588] flex items-center justify-center overflow-hidden">
                    <img src="/images/68780a115d256d72ec4a1daa_Male Memojis.avif" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="h-1.5 w-20 bg-[#F3F4F6] rounded-full mb-1.5"></div>
                    <div className="text-[13px] font-bold text-[#2B2733]">Webflow Developer</div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#F3F4F6] flex items-center justify-center mr-2 text-gray-400 font-bold text-xs pb-0.5">
                  +
                </div>
              </div>
              {/* Pill 3 */}
              <div className="bg-white p-3 rounded-full flex justify-between items-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#E9E1F5] flex items-center justify-center overflow-hidden">
                    <img src="/images/6984f1aa2323dabb8592e2a9_Male Memojis.png" alt="avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="h-1.5 w-14 bg-[#F3F4F6] rounded-full mb-1.5"></div>
                    <div className="text-[13px] font-bold text-[#2B2733]">Graphic Designer</div>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center mr-2">
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Strategic Design */}
          <div className="col-span-1 md:col-span-1 lg:col-span-5 bg-[#C7BAF8] rounded-[32px] p-8 md:p-10 flex flex-col items-center overflow-hidden relative h-[400px] md:h-full min-h-[400px]">
            <div className="text-center relative z-10 w-full mb-12">
              <h3 className="text-[26px] md:text-[32px] font-bold mb-4 text-[#2B2733] tracking-tight leading-tight">Strategic design</h3>
              <p className="text-[#4C4364] text-[15px] leading-relaxed font-medium max-w-[260px] mx-auto">
                Thoughtful, on-brand creative developed by experienced designers.
              </p>
            </div>
            
            <div className="absolute bottom-[-15%] md:bottom-[-25%] left-[-10%] w-[120%] pointer-events-none">
              <div className="grid grid-cols-4 gap-3 p-4">
                 {[
                   "/images/687fed8e870a62e045351671_figma-logo.avif",
                   "/images/687fed90b8228148b8755585_webflow-logo.avif",
                   "/images/687fed8ee3c0ac5355451a41_indesign-logo.avif",
                   "/images/687fed8e37b95fbb682bcc87_powerpoint-logo.avif",
                   "/images/69b4212c0e110dc8e67d6aa5_Widget Icon Box111.avif",
                   "/images/687fed8e37b95fbb682bcc87_powerpoint-logo.avif", // placeholder for 3d box
                   "/images/687fed8eff4c1f96f364a7a2_illistrator-logo.avif",
                   "/images/687fed8e36e7248ba0edb539_canva-logo.avif",
                 ].map((src, i) => (
                   <div key={i} className="aspect-square bg-white rounded-2xl md:rounded-3xl shadow-md overflow-hidden p-1.5 flex items-center justify-center">
                     <img src={src} className="w-full h-full object-cover rounded-xl md:rounded-2xl" alt="tool" />
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Card 3: One Simple Process */}
          <div className="col-span-1 md:col-span-1 lg:col-span-5 bg-[#C6F2D6] rounded-[32px] p-8 md:p-10 flex flex-col overflow-hidden relative h-[400px] md:h-full min-h-[400px]">
            <div className="relative z-10 w-full mb-10 text-left">
              <h3 className="text-[26px] md:text-[32px] font-bold mb-4 text-[#2B2733] tracking-tight leading-tight">One simple process</h3>
              <p className="text-[#43644F] text-[15px] leading-relaxed font-medium max-w-[260px]">
                Brief and track projects, and chat with us through our dedicated portal.
              </p>
            </div>
            
            {/* Acme Portal UI */}
            <div className="bg-white rounded-t-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 pt-5 absolute bottom-0 left-[5%] right-[5%] lg:-left-[5%] lg:right-[-5%] border border-gray-100 min-h-[250px]">
               <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F3F4F6]">
                 <div className="flex items-center space-x-2">
                   <div className="w-5 h-5 bg-[#3B82F6] text-white rounded flex items-center justify-center">
                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </div>
                   <span className="text-[13px] font-bold text-[#2B2733]">Acme Portal</span>
                 </div>
                 <div className="w-5 h-5 bg-[#F3F4F6] rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">✕</div>
               </div>
               <div className="flex space-x-4">
                 {/* To Do Col */}
                 <div className="flex-1 flex flex-col space-y-3">
                   <div className="flex items-center space-x-1.5 px-1 mb-1">
                     <div className="w-3 h-3 rounded-full border-2 border-gray-300"></div>
                     <span className="text-[11px] font-bold text-[#2B2733]">To do</span>
                   </div>
                   <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-100 h-14 space-y-2">
                      <div className="h-2 w-3/4 bg-[#E2E8F0] rounded-full"></div>
                      <div className="h-2 w-1/2 bg-[#E2E8F0] rounded-full"></div>
                   </div>
                   <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-100 h-12 space-y-2">
                      <div className="h-2 w-full bg-[#E2E8F0] rounded-full"></div>
                   </div>
                 </div>
                 {/* Complete Col */}
                 <div className="flex-1 flex flex-col space-y-3">
                   <div className="flex items-center space-x-1.5 px-1 mb-1">
                     <div className="w-3 h-3 rounded-full bg-[#10B981] flex items-center justify-center">
                       <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M8.33366 2.5L3.75033 7.08333L1.66699 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                     </div>
                     <span className="text-[11px] font-bold text-[#2B2733]">Complete</span>
                   </div>
                   <div className="bg-[#F8F9FA] p-3 rounded-xl border border-gray-100 h-14 space-y-2">
                      <div className="h-2 w-2/3 bg-[#E2E8F0] rounded-full"></div>
                      <div className="h-2 w-full bg-[#E2E8F0] rounded-full"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Card 4: Reliable Delivery */}
          <div className="col-span-1 md:col-span-1 lg:col-span-7 bg-[#FAD8D6] rounded-[32px] p-8 md:p-10 flex flex-col lg:flex-row justify-between items-center overflow-hidden relative">
            <div className="w-full lg:w-[45%] mb-12 lg:mb-0 lg:pr-4">
              <h3 className="text-[26px] md:text-[32px] font-bold mb-4 text-[#2B2733] tracking-tight leading-tight">Reliable delivery</h3>
              <p className="text-[#7D5A5A] text-[15px] leading-relaxed font-medium">
                Keep your pipeline moving with consistent turnarounds that hit deadlines, because launch dates don't move in construction.
              </p>
            </div>
            
            <div className="w-full lg:w-[55%] relative flex justify-center">
              {/* Chat UI */}
              <div className="bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 border border-gray-100 w-full max-w-[320px] relative z-10">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                  <span className="text-[13px] font-bold text-[#2B2733]">Project chat</span>
                  <div className="w-5 h-5 bg-[#F3F4F6] rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">✕</div>
                </div>
                
                <div className="flex space-x-3 mb-6">
                  <img src="/images/68780a115d256d72ec4a1daa_Male Memojis.avif" className="w-8 h-8 rounded-full bg-[#FCF6D6] shrink-0" alt="Matthew" />
                  <div className="bg-[#F3F4F6] rounded-2xl rounded-tl-none p-3 text-[11px] text-[#2B2733] leading-[1.4] font-medium flex-1">
                    Hey Ariana! Please find attached your artwork files. Let me know if you have any questions. Thanks!
                  </div>
                </div>
                
                <div className="flex space-x-3 justify-end items-end relative">
                  <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-tr-none p-3 text-[11px] leading-[1.4] text-[#2B2733] font-medium max-w-[75%]">
                    Looks great, happy to sign this off and crack on with the next task.
                  </div>
                  <img src="/images/68780a02621f5c44cbc6bdbb_Female Memojis.avif" className="w-8 h-8 rounded-full bg-[#FAD8D6] shrink-0" alt="Ariana" />
                  
                  {/* Ariana Cursor */}
                  <div className="absolute -bottom-6 right-8 z-30">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#FBBF24] drop-shadow-sm absolute -top-4 right-1">
                        <path d="M15.2536 13.3408C15.9009 13.9493 15.4925 15.0368 14.6046 15.0687L7.46032 15.3254C7.1932 15.335 6.94103 15.4512 6.76011 15.6479L1.73612 21.1119C1.11933 21.7827 0 21.3463 0 20.435V1.3127C0 0.436589 1.04666 -0.0159794 1.68497 0.584131L15.2536 13.3408Z" fill="currentColor"></path>
                     </svg>
                     <div className="bg-[#FBBF24] text-[#2B2733] text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-sm">Ariana</div>
                  </div>
                </div>
              </div>
              
              {/* Matthew Cursor */}
              <div className="absolute top-[25%] left-[-8%] z-30">
                 <div className="bg-[#10B981] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-sm whitespace-nowrap">Matthew</div>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#10B981] absolute -top-4 left-1 transform -scale-x-100 drop-shadow-sm">
                    <path d="M15.2536 13.3408C15.9009 13.9493 15.4925 15.0368 14.6046 15.0687L7.46032 15.3254C7.1932 15.335 6.94103 15.4512 6.76011 15.6479L1.73612 21.1119C1.11933 21.7827 0 21.3463 0 20.435V1.3127C0 0.436589 1.04666 -0.0159794 1.68497 0.584131L15.2536 13.3408Z" fill="currentColor"></path>
                 </svg>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
