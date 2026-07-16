import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyJointly from "@/components/WhyJointly";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Benefits from "@/components/Benefits";
import Section8 from "@/components/Section8";
import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import React from "react";
export default function Page() {
  return (
    <div className="body-7">
      <Navbar />

      <Hero />

      <WhyJointly />

      <HowWeWork />

      <Services />

      <CaseStudies />

      <Benefits />

      <Section8 />

      <Blog />

      <CallToAction />

      <Footer />
    </div>
  );
}
