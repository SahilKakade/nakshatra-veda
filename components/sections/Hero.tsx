"use client";

import Image from "next/image";

import LeadForm from "../forms/LeadForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 container-custom min-h-screen flex items-center pt-28 pb-10">

        <div className="grid lg:grid-cols-[0.95fr_0.75fr] gap-16 items-center w-full">

          {/* LEFT CONTENT */}
          <div>

            {/* Tag */}
            <div className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-[11px] tracking-[0.18em] text-white/80 mb-8">
              PREMIUM INVESTMENT INTELLIGENCE
            </div>

            {/* Heading */}
            <h1 className="heading-font text-[50px] md:text-[60px] leading-[0.95] font-light text-white mb-8 max-w-[700px]">
                Invest Beyond
                <br />
                Property.
                <br />
                <span className="font-semibold">
                  Build Legacy.
                </span>
              </h1>

            {/* Description */}
            <p className="text-white/80 text-lg leading-9 max-w-[560px] mb-12">
              Exclusive real estate opportunities curated for modern investors seeking security, growth, and prestige.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-16">

              <div>
                <h3 className="text-[#D4AF37] text-4xl heading-font mb-2">
                  500+
                </h3>

                <p className="text-white/60 text-sm">
                  Premium Properties
                </p>
              </div>

              <div>
                <h3 className="text-[#D4AF37] text-4xl heading-font mb-2">
                  1000+
                </h3>

                <p className="text-white/60 text-sm">
                  Trust Investors
                </p>
              </div>

            </div>

            {/* Showstopper Logo */}
            <div className="relative w-[360px] h-[150px] mt-14">

              <Image
                src="/showstopper.png"
                alt="Showstopper"
                fill
                className="object-contain object-left"
                priority
              />

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="lg:justify-self-end w-full max-w-[500px]">

            <LeadForm variant="hero" />

          </div>

        </div>

      </div>
    </section>
  );
}