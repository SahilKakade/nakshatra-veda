import {
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAFAF8] text-black py-24 md:py-32"
    >

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div>

            {/* Tag */}
            <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-8">
              About Nakshatra Veda
            </p>

            {/* Heading */}
            <h2 className="heading-font text-[48px] md:text-[72px] leading-[0.95] text-[#1A1A1A] max-w-[560px]">

              India&apos;s Modern

              <br />

              <span className="font-semibold">
                Property Intelligence
              </span>

              <br />

              Platform

            </h2>

            {/* Pills */}
            <div className="flex flex-wrap gap-4 mt-14">

              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white">
                <ShieldCheck
                  size={16}
                  className="text-[#D4AF37]"
                />

                <span className="text-sm text-black/70">
                  RERA Verified
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white">
                <BadgeCheck
                  size={16}
                  className="text-[#D4AF37]"
                />

                <span className="text-sm text-black/70">
                  20+ Years Excellence
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white">
                <TrendingUp
                  size={16}
                  className="text-[#D4AF37]"
                />

                <span className="text-sm text-black/70">
                  Investment Grade
                </span>
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 bg-white">
                <CircleDollarSign
                  size={16}
                  className="text-[#D4AF37]"
                />

                <span className="text-sm text-black/70">
                  Legal Assured
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:pt-6">

            <div className="space-y-8 text-black/55 text-lg leading-10">

              <p>
                At Nakshatra Veda, we redefine real estate investment through a sophisticated blend of market intelligence, curated opportunities, and unwavering commitment to client success.
              </p>

              <p>
                With over 20 years of deep market expertise across India&apos;s premium real estate landscape, we serve as trusted advisors to discerning investors seeking exceptional properties that deliver both prestige and performance.
              </p>

              <p>
                Our approach combines data-driven insights with personalized guidance, ensuring every investment decision is backed by comprehensive analysis and aligned with your long-term wealth creation goals.
              </p>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-16 mt-16">

              <div>

                <h3 className="heading-font text-5xl text-[#D4AF37] mb-3">
                  4000+
                </h3>

                <p className="text-black/55">
                  Premium Properties Delivered
                </p>

              </div>

              <div>

                <h3 className="heading-font text-5xl text-[#D4AF37] mb-3">
                  ₹1200Cr+
                </h3>

                <p className="text-black/55">
                  Investments Facilitated
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}