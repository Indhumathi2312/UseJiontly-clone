"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Section5ImgLogoDesigns = "/images/698232ec77821586872e7707_brymecaircond.avif";
const Section5LogoBrymec = "/images/6980fc88908fd84d4e9991ae_Vector.avif";
const Section5ImgBranding = "/images/69905434bf65dd3a4d7b90e7_Frame 2147226751.avif";
const Section5LogoIndustry = "/images/698231d4b64554cdcb69911b_logo 1.avif";
const Section5ImgWebsites = "/images/69a082b4f4b0304a0c1cb316_Frame 2147226752.avif";
const Section5LogoHID = "/images/698232370d7ff0a5a4975edf_HID.avif";
const Section5ImgEmails = "/images/698232a09bc362f8e205812a_brymecemails.avif";
const Section5ImgBrochures = "/images/699054366327178a6a757e28_Frame 2147226755.avif";
const Section5ImgCatalogues = "/images/699054351372d0661b3e2bcc_Frame 2147226766.avif";
const Section5ImgPosters = "/images/6982333e6946465d6899ec10_brymecpost.avif";
const Section5ImgFlyers = "/images/69810745c90683d6d42cd1f9_Frame 2147226758.avif";
const Section5ImgDirectMail = "/images/699054351d61b8c1f1719d36_Frame 2147226759.avif";
const Section5LogoNew = "/images/698a017d45fddd6be9349f19_Component 9.avif";
const Section5ImgSocial = "/images/699054356c99f26d8f0e6fa9_Frame 2147226760.avif";
const Section5ImgPresentations = "/images/69823456b64554cdcb6a21a5_Frame 2147226763.avif";
const Section5ImgWebflow = "/images/69823456ae794b49c6cbef95_Frame 2147226765.avif";

const tabsData = [
  {
    id: "Logo Designs",
    label: "Logo Designs",
    imgSrc: Section5ImgLogoDesigns.src || Section5ImgLogoDesigns,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/logo-design",
    btnText: "Explore Construction Logo Design"
  },
  {
    id: "Branding",
    label: "Branding",
    imgSrc: Section5ImgBranding.src || Section5ImgBranding,
    logoSrc: Section5LogoIndustry.src || Section5LogoIndustry,
    industry: "Industry",
    btnLink: "https://usejointly.com/services/branding",
    btnText: "See Construction Brand Systems"
  },
  {
    id: "Website Designs",
    label: "Website Designs",
    imgSrc: Section5ImgWebsites.src || Section5ImgWebsites,
    logoSrc: Section5LogoHID.src || Section5LogoHID,
    industry: "Security",
    btnLink: "https://usejointly.com/services/websites",
    btnText: "Explore Construction Web Design"
  },
  {
    id: "Email Designs",
    label: "Email Designs",
    imgSrc: Section5ImgEmails.src || Section5ImgEmails,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/email-design",
    btnText: "View Specifier Email Campaigns"
  },
  {
    id: "Brochures",
    label: "Brochures",
    imgSrc: Section5ImgBrochures.src || Section5ImgBrochures,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/brochures",
    btnText: "Explore Construction Brochures"
  },
  {
    id: "Catalogues",
    label: "Catalogues",
    imgSrc: Section5ImgCatalogues.src || Section5ImgCatalogues,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/catalogues",
    btnText: "Explore Construction Catalogues"
  },
  {
    id: "Posters",
    label: "Posters",
    imgSrc: Section5ImgPosters.src || Section5ImgPosters,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/posters",
    btnText: "Explore Trade Show Posters"
  },
  {
    id: "Flyers",
    label: "Flyers",
    imgSrc: Section5ImgFlyers.src || Section5ImgFlyers,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/flyers",
    btnText: "Explore Construction Flyer Design"
  },
  {
    id: "Direct Mail",
    label: "Direct Mail",
    imgSrc: Section5ImgDirectMail.src || Section5ImgDirectMail,
    logoSrc: Section5LogoNew.src || Section5LogoNew,
    industry: "Manufacturing",
    btnLink: "https://usejointly.com/services/direct-mail",
    btnText: "View Specifier Mail Campaigns"
  },
  {
    id: "Social Media Graphics",
    label: "Social Media Graphics",
    imgSrc: Section5ImgSocial.src || Section5ImgSocial,
    logoSrc: Section5LogoBrymec.src || Section5LogoBrymec,
    industry: "Manufacturing & Tech",
    btnLink: "https://usejointly.com/services/social-media-graphics",
    btnText: "Explore Construction Social Graphics"
  },
  {
    id: "Presentations",
    label: "Presentations",
    imgSrc: Section5ImgPresentations.src || Section5ImgPresentations,
    logoSrc: Section5LogoIndustry.src || Section5LogoIndustry,
    industry: "Industry",
    btnLink: "https://usejointly.com/services/presentations",
    btnText: "See Building Product Sales Decks"
  },
  {
    id: "Webflow Development",
    label: "Webflow Development",
    imgSrc: Section5ImgWebflow.src || Section5ImgWebflow,
    logoSrc: Section5LogoIndustry.src || Section5LogoIndustry,
    industry: "Industry",
    btnLink: "https://usejointly.com/services/webflow-development",
    btnText: "View Building Sector Webflow Builds"
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeTabData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <section id="services" className="w-full bg-white py-20 md:py-32 overflow-hidden font-sans">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center space-x-2 text-[#9D71FD] font-bold uppercase tracking-wider text-[11px] md:text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Services</h2>
          </div>
          <h2 className="text-[36px] md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-[#2B2733] mb-5 tracking-tight max-w-[650px]">
            Everything your team needs to market better
          </h2>
          <p className="text-[#645E76] text-[16px] md:text-lg leading-relaxed max-w-[620px]">
            From pitch decks to specification sheets, campaign landing pages
            to full brand refreshes: we're your in-house creative team,
            without the overheads.
          </p>
        </div>

        {/* Tab Menu - Slider on Mobile, Wrapping on Desktop */}
        <div className="w-full flex overflow-x-auto md:flex-wrap md:justify-center gap-2.5 md:gap-3 mb-12 max-w-[850px] mx-auto no-scrollbar snap-x pb-2 md:pb-0 px-2 md:px-0">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 snap-center px-5 py-[10px] rounded-full text-[13px] md:text-[14px] font-medium transition-all duration-300 border ${
                activeTab === tab.id
                  ? "bg-[#874FD4] text-white border-[#874FD4] shadow-sm"
                  : "bg-white text-[#645E76] border-gray-100 hover:border-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="w-full flex flex-col relative animate-fade-in">
          {/* Image */}
          <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[21/10] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 mb-6 bg-[#2B2733]">
            <img 
              src={activeTabData.imgSrc} 
              alt={activeTabData.label} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          {/* Logo and Industry Row */}
          <div className="flex justify-between items-center w-full px-2 mb-10">
            <Link href={activeTabData.btnLink} className="flex items-center group">
              <img 
                src={activeTabData.logoSrc} 
                alt="client logo" 
                className="h-5 md:h-7 w-auto object-contain mr-1 filter brightness-0" 
              />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#2B2733] group-hover:translate-x-1 transition-transform">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
            
            <div className="px-4 py-1.5 rounded-full border border-[#BBA4FF] text-[#874FD4] text-[11px] md:text-xs font-medium tracking-wide bg-[#FDFBFF]">
              {activeTabData.industry}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center w-full mt-2 md:mt-4">
            <Link 
              href={activeTabData.btnLink}
              className="inline-flex items-center justify-center px-8 md:px-10 py-3.5 md:py-4 rounded-full bg-[#874FD4] text-white text-[14px] md:text-[15px] font-semibold hover:bg-purple-700 transition-all shadow-lg hover:scale-105"
            >
              {activeTabData.btnText}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Hide Scrollbar Style & Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        `
      }} />
    </section>
  );
}
