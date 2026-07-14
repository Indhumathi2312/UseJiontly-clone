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

export default function Section5() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeTabData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <section id="services" className="w-full bg-[#181124] py-24 text-white overflow-hidden border-t border-white/10">
      <div className="max-w-container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-majorelle font-semibold uppercase tracking-widest text-xs mb-6">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="currentColor" />
            </svg>
            <h2>Services</h2>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything your team needs to market better
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            From pitch decks to specification sheets, campaign landing pages
            to full brand refreshes: we're your in-house creative team,
            without the overheads.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Tab Menu - horizontally scrollable */}
          <div className="w-full overflow-x-auto no-scrollbar mb-10 pb-4">
            <div className="flex space-x-2 md:justify-center w-max md:w-auto px-4 md:px-0">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-majorelle text-white shadow-lg shadow-majorelle/30"
                      : "bg-[#280F62] text-gray-300 hover:bg-[#3d1985] hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="w-full flex flex-col items-center relative animate-fade-in">
            {/* Image Wrapper */}
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl mb-8 group">
              <img 
                src={activeTabData.imgSrc} 
                alt={activeTabData.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Logo/Industry */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                   <img src={activeTabData.logoSrc} alt="logo" className="w-full h-full object-contain" />
                </div>
                <div className="text-white text-sm font-medium pr-4">
                  {activeTabData.industry}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href={activeTabData.btnLink}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-white text-ink font-semibold hover:bg-lavender transition-all"
            >
              <span>{activeTabData.btnText}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
      
      {/* Hide Scrollbar Style */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        `
      }} />
    </section>
  );
}
