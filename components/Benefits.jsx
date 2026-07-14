import React from "react";

export default function Benefits() {
  return (
    <section className="bg-white py-24 text-ink">
      <div className="max-w-container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-2 text-majorelle font-semibold uppercase tracking-widest text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Benefits</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Everything you need, in one place
          </h2>
          <p className="text-lg text-muted">
            Explore the Jointly advantage.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,_auto)]">
          
          {/* Card 1: Specialist Support (Col span 4) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-4 bg-[#F8F9FA] rounded-[32px] p-8 border border-gray-100 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-3 text-ink">Specialist support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Work with a team of creatives and an account manager who
                understand your audience: specifiers, contractors,
                distributors, and trades.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              {/* Team Item 1 */}
              <div className="bg-white p-3 rounded-2xl flex justify-between items-center shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <img src="/images/68780a02621f5c44cbc6bdbb_Female Memojis.avif" alt="avatar" className="w-8 h-8 rounded-full" />
                  </div>
                  <div>
                    <div className="h-1.5 w-16 bg-gray-200 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-ink">Account Manager</div>
                  </div>
                </div>
                <img src="/images/6844a629c42e265db5575edb_Check-Thick.svg" alt="check" className="w-4 h-4 text-green-500" />
              </div>
              {/* Team Item 2 */}
              <div className="bg-white p-3 rounded-2xl flex justify-between items-center shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <img src="/images/68780a115d256d72ec4a1daa_Male Memojis.avif" alt="avatar" className="w-8 h-8 rounded-full" />
                  </div>
                  <div>
                    <div className="h-1.5 w-20 bg-gray-200 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-ink">Webflow Developer</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
              </div>
              {/* Team Item 3 */}
              <div className="bg-white p-3 rounded-2xl flex justify-between items-center shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <img src="/images/6984f1aa2323dabb8592e2a9_Male Memojis.png" alt="avatar" className="w-8 h-8 rounded-full" />
                  </div>
                  <div>
                    <div className="h-1.5 w-14 bg-gray-200 rounded mb-1"></div>
                    <div className="text-xs font-semibold text-ink">Graphic Designer</div>
                  </div>
                </div>
                <img src="/images/6844a629c42e265db5575edb_Check-Thick.svg" alt="check" className="w-4 h-4 text-green-500" />
              </div>
            </div>
          </div>

          {/* Card 2: Strategic Design (Col span 8) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-8 bg-[#181124] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 max-w-sm mb-12 text-white">
              <h3 className="text-2xl font-bold mb-3">Strategic design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Thoughtful, on-brand creative developed by experienced designers.
              </p>
            </div>
            
            <div className="absolute right-0 md:-right-10 bottom-0 md:-bottom-10 w-[120%] md:w-3/4 transform rotate-[-5deg] opacity-50 md:opacity-100 pointer-events-none">
              <div className="grid grid-cols-4 gap-4 p-4">
                 {[
                   "/images/687fed8feda9bf8dd078e70a_photoshop-logo.avif",
                   "/images/687fed8e870a62e045351671_figma-logo.avif",
                   "/images/687fed90b8228148b8755585_webflow-logo.avif",
                   "/images/687fed8ee3c0ac5355451a41_indesign-logo.avif",
                   "/images/687fed8e37b95fbb682bcc87_powerpoint-logo.avif",
                   "/images/69b4212c0e110dc8e67d6aa5_Widget Icon Box111.avif",
                   "/images/687fed8eff4c1f96f364a7a2_illistrator-logo.avif",
                   "/images/687fed8e36e7248ba0edb539_canva-logo.avif",
                 ].map((src, i) => (
                   <img key={i} src={src} className="w-16 h-16 md:w-24 md:h-24 object-contain opacity-80" alt="tool" />
                 ))}
              </div>
            </div>
          </div>

          {/* Card 3: One Simple Process (Col span 7) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-7 bg-[#F8F9FA] rounded-[32px] p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 overflow-hidden relative">
            <div className="max-w-[250px] relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-ink">One simple process</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Brief and track projects, and chat with us through our dedicated portal.
              </p>
            </div>
            
            {/* Fake Kanban Board */}
            <div className="flex-grow bg-white rounded-xl shadow-lg border border-gray-100 p-4 transform md:rotate-[2deg] z-10 w-full h-[250px] overflow-hidden">
               <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                 <div className="flex items-center space-x-2">
                   <div className="w-6 h-6 bg-blue-100 text-blue-500 rounded flex items-center justify-center font-bold text-[10px]">A</div>
                   <span className="text-xs font-bold">Acme Portal</span>
                 </div>
                 <div className="w-4 h-4 bg-gray-100 rounded"></div>
               </div>
               <div className="flex space-x-4">
                 {/* Column 1 */}
                 <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col space-y-2">
                   <div className="text-[10px] font-semibold text-gray-500 uppercase px-1">To do</div>
                   <div className="bg-white p-2 rounded border border-gray-100 shadow-sm h-12"></div>
                   <div className="bg-white p-2 rounded border border-gray-100 shadow-sm h-10"></div>
                 </div>
                 {/* Column 2 */}
                 <div className="flex-1 bg-gray-50 rounded-lg p-2 flex flex-col space-y-2">
                   <div className="text-[10px] font-semibold text-gray-500 uppercase px-1">Complete</div>
                   <div className="bg-white p-2 rounded border border-gray-100 shadow-sm h-16"></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Card 4: Reliable Delivery (Col span 5) */}
          <div className="col-span-1 md:col-span-1 lg:col-span-5 bg-lavender rounded-[32px] p-8 border border-white/20 relative overflow-hidden flex flex-col justify-between group">
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-ink">Reliable delivery</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Keep your pipeline moving with consistent turnarounds that hit deadlines, because launch dates don't move in construction.
              </p>
            </div>
            
            {/* Chat UI */}
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 transform rotate-[-2deg] group-hover:rotate-0 transition-transform w-full relative z-10">
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-100">
                <span className="text-xs font-bold">Project chat</span>
              </div>
              
              <div className="flex space-x-3 mb-4">
                <img src="/images/6844a6299a5a3ede127d32e0_29-6.avif" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="Matthew" />
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 text-[11px] text-gray-700 leading-tight flex-1">
                  Hey Ariana! Please find attached your artwork files. Let me know if you have any questions. Thanks!
                </div>
              </div>
              
              <div className="flex space-x-3 justify-end">
                <div className="bg-majorelle text-white rounded-2xl rounded-tr-none p-3 text-[11px] leading-tight max-w-[80%]">
                  Looks great, happy to sign this off and crack on with the next task.
                </div>
                <img src="/images/6844a6298508ba660c9221bd_31-5.avif" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="Ariana" />
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
