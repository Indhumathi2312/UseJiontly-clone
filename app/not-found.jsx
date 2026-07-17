import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="body-7">
      <Navbar />

      <section className="bg-neutral-800 pt-32 md:pt-40 pb-16 md:pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-[120px] sm:text-[150px] md:text-[200px] leading-[1] font-extrabold text-primary-100 tracking-[-0.02em] mb-4">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-6">
          Page not found
        </h2>

        <p className="text-lg md:text-[22px] text-neutral-200 max-w-2xl mb-12 font-medium leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full px-4 sm:px-0">
          <Link href="/" className="px-8 py-4 rounded-full bg-primary-100 text-neutral-100 font-semibold text-[17px] hover:bg-primary-100/90 transition-colors w-full sm:w-auto min-w-[200px] flex justify-center">
            Go to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
