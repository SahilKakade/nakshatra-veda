"use client";

import Image from "next/image";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function ThankYouPage() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    /* GTM PAGE VIEW */
    window.dataLayer.push({
      event: "virtual_pageview",
      page_title: "Thank You",
      page_path: "/thank-you",
      page_location: window.location.href,
    });

    /* LEAD EVENT */
    window.dataLayer.push({
      event: "generate_lead",
    });

    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6">
      <div className="max-w-[700px] text-center">

        {/* Logo */}
        <div className="mb-10">
          <Image
            src="/logo.png"
            alt="Nakshatra Veda"
            width={120}
            height={120}
            className="mx-auto h-auto"
            priority
          />
        </div>

        {/* Success Icon */}
        <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-8">
          <span className="text-[#D4AF37] text-5xl">
            ✓
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
            heading-font
            text-[52px]
            md:text-[72px]
            leading-none
            text-[#D4AF37]
            mb-6
          "
        >
          Thank You
        </h1>

        {/* Text */}
        <p
          className="
            text-white/75
            text-lg
            md:text-xl
            leading-9
            max-w-[600px]
            mx-auto
            mb-10
          "
        >
          Your enquiry has been submitted successfully.
          <br />
          Our team will reach out to you shortly with
          complete project details and investment guidance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              h-[60px]
              px-10
              rounded-[16px]
              bg-[#D4AF37]
              text-black
              font-semibold
              tracking-[0.08em]
              hover:bg-[#c9a12f]
              transition-all
            "
          >
            BACK TO HOME
          </a>

          <a
            href="tel:+917090696000"
            className="
              inline-flex
              items-center
              justify-center
              h-[60px]
              px-10
              rounded-[16px]
              border
              border-[#D4AF37]
              text-[#D4AF37]
              font-semibold
              tracking-[0.08em]
              hover:bg-[#D4AF37]/10
              transition-all
            "
          >
            CALL NOW
          </a>

        </div>

        <p className="mt-8 text-sm text-white/40">
          Redirecting to homepage in 10 seconds...
        </p>

      </div>
    </main>
  );
}