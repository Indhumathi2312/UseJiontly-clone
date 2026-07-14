import React from "react";
import Link from "next/link";
const BlogImageOne = "/images/6a42263d2dbc95254f96d128_pexels-photo-5582597.jpeg";
const BlogImageTwo = "/images/6a38ebb6742eb7a169cb08ec_pexels-photo-11881295.jpeg";
const BlogImageThree = "/images/6a3e4af5e1138498590fc2aa_pexels-shvetsa-4312861.jpg";

const blogPosts = [
  {
    date: "July 10, 2026",
    title: "Content marketing for building product manufacturers",
    description: "Most building product manufacturers publish content without a strategy, wasting budget on blogs and videos that never reach specifiers or drive specifications. We explain how to build a content plan that aligns with the specification journey and delivers measurable results.",
    imgSrc: BlogImageOne.src || BlogImageOne,
    link: "/blog/how-to-build-a-content-marketing-strategy-for-building-product-manufacturers"
  },
  {
    date: "July 10, 2026",
    title: "Building brand equity in a specification-driven market",
    description: "Most construction supply chain businesses underestimate the role of brand when technical compliance drives the sale. We explore how building product manufacturers and distributors can build brand equity that influences specifiers and contractors before the technical comparison even begins.",
    imgSrc: BlogImageTwo.src || BlogImageTwo,
    link: "/blog/building-brand-equity-in-a-specification-driven-market"
  },
  {
    date: "July 10, 2026",
    title: "Rebuild or refresh your construction website?",
    description: "Not every outdated manufacturer website needs a full rebuild. We explain the difference between a refresh and a rebuild, and how to decide which approach actually solves your problem.",
    imgSrc: BlogImageThree.src || BlogImageThree,
    link: "/blog/when-to-rebuild-your-construction-product-website-and-when-to-refresh-it"
  }
];

export default function Blog() {
  return (
    <section className="bg-ink py-24 text-white">
      <div className="max-w-container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center space-x-2 text-majorelle font-semibold uppercase tracking-widest text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Blog</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights for the construction sector
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Practical marketing advice for building product brands,
            distributors and trades.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, idx) => (
            <Link key={idx} href={post.link} className="group flex flex-col h-full bg-[#181124] border border-white/10 rounded-[32px] overflow-hidden hover:border-majorelle/50 transition-colors">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img 
                  src={post.imgSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-gray-400 font-semibold uppercase tracking-widest text-[10px] mb-4">
                  <svg width="6" height="6" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="currentColor" />
                  </svg>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-majorelle transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center text-white font-semibold group/link text-sm">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                      <path d="M1.75 6.5H11.5M7 1.25L12.25 6.5L7 11.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square"></path>
                    </svg>
                  </div>
                  <div className="text-gray-500 text-xs font-medium hidden sm:block">
                    {post.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <Link href="/blog" className="px-8 py-4 rounded-full bg-white text-ink font-semibold text-lg hover:bg-lavender transition-all">
            View more
          </Link>
        </div>

      </div>
    </section>
  );
}
