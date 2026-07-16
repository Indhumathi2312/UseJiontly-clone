import React from "react";
import Link from "next/link";
const BlogImageOne = "/images/6a42263d2dbc95254f96d128_pexels-photo-5582597.jpeg";
const BlogImageTwo = "/images/6a38ebb6742eb7a169cb08ec_pexels-photo-11881295.jpeg";
const BlogImageThree = "/images/6a3e4af5e1138498590fc2aa_pexels-shvetsa-4312861.jpg";

const blogPosts = [
  {
    date: "July 14, 2026",
    title: "Technical brochure design for building product launches",
    description: "Most building product manufacturers treat launch brochures as sales literature, not specification tools...",
    imgSrc: BlogImageOne.src || BlogImageOne,
    link: "/blog/technical-brochure-design"
  },
  {
    date: "July 14, 2026",
    title: "Content marketing for building product manufacturers",
    description: "A content marketing strategy for building product manufacturers: what to publish, for whom, and how i...",
    imgSrc: BlogImageTwo.src || BlogImageTwo,
    link: "/blog/content-marketing"
  },
  {
    date: "July 14, 2026",
    title: "Building brand equity in a specification-driven market",
    description: "Why brand equity decides specifications in construction, and how building product brands build...",
    imgSrc: BlogImageThree.src || BlogImageThree,
    link: "/blog/building-brand-equity"
  }
];

export default function Blog() {
  return (
    <section className="bg-[#2B2733] py-20 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center space-x-2 text-[#9D71FD] font-bold uppercase tracking-wider text-[11px] md:text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Blog</h2>
          </div>
          <h2 className="text-[36px] md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-white mb-5 tracking-tight max-w-[800px]">
            Insights for the construction sector
          </h2>
          <p className="text-gray-300 text-[16px] md:text-lg leading-relaxed max-w-[800px] px-4">
            Practical marketing strategies for building product brands, distributors and construction companies across the built environment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {blogPosts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-[32px] p-5 md:p-6 flex flex-col group shadow-lg transition-transform duration-300 hover:-translate-y-2 h-full">
              <Link href={post.link} className="relative block aspect-[1.5] md:aspect-[1.6] rounded-2xl md:rounded-[20px] overflow-hidden mb-6 bg-gray-100 shrink-0">
                <img 
                  src={post.imgSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              
              <div className="flex flex-col flex-grow px-1 md:px-2 pb-2">
                <div className="flex items-center space-x-2 text-[#874FD4] font-bold text-[11px] md:text-[12px] mb-3 md:mb-4">
                  <svg width="6" height="6" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="currentColor" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                
                <Link href={post.link} className="block mb-3">
                  <h3 className="text-xl md:text-[22px] font-bold leading-tight text-[#2B2733] tracking-tight group-hover:text-[#874FD4] transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-[#645E76] text-[14px] md:text-[15px] leading-relaxed mb-6 font-medium flex-grow">
                  {post.description}
                </p>

                <div className="mt-auto">
                  <Link href={post.link} className="inline-flex items-center text-[#874FD4] text-sm md:text-[15px] font-semibold group/link w-fit">
                    <span>Read more</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-4">
          <Link href="/blog" className="px-10 py-3.5 md:py-4 rounded-full bg-[#874FD4] text-white font-semibold text-[14px] md:text-[15px] hover:bg-purple-700 transition-all shadow-lg hover:scale-105">
            View more
          </Link>
        </div>

      </div>
    </section>
  );
}
