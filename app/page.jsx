import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyJointly from "@/components/WhyJointly";
import HowWeWork from "@/components/HowWeWork";
import Section5 from "@/components/Section5";
import CaseStudies from "@/components/CaseStudies";
import Benefits from "@/components/Benefits";
import Section8 from "@/components/Section8";
import Blog from "@/components/Blog";
import Section10 from "@/components/Section10";
import Section11 from "@/components/Section11";
import Section12 from "@/components/Section12";
import React from "react";
export default function Page() {
  return (
    <div className="body-7">
      <Navbar />

      <Hero />

      <WhyJointly />

      <HowWeWork />

      <Section5 />

      <CaseStudies />

      <Benefits />

      <Section8 />

      <Blog />

      <Section10 />

      <Section11 />

      {/*  LINKEDIN TRACKING PIXEL  */}

      <Section12 />

      {/* --- */}
    </div>
  );
}
