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

              More Than 

              <br />

              <span className="font-semibold">
                Square Feet.
              </span>

              <br />

              Better Living by Design 

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
               Nakshatra Veda presents The Showstopper Edition — thoughtfully designed 2 & 3 BHK residences in Vasai East crafted for modern family living. Set within Madhuban, Yashwant Smart City, the project blends comfort, connectivity, and everyday convenience in one well-planned address.
              </p>

              <p>
                Spread across a grand township with a ready podium, Nakshatra Veda offers 55+ lifestyle amenities including a swimming pool, gym, clubhouse, landscaped spaces, and more — designed around the way you want to live.

              </p>

              <p>
                Located just minutes from Vasai Railway Station, with seamless access to schools, hospitals, and daily essentials, Nakshatra Veda brings together spacious living, thoughtful planning, and a lifestyle that simply feels complete.

              </p>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-16 mt-16">

              <div>

                <h3 className="text-[#D4AF37] text-4xl mb-3 font-semibold">
                  4000+
                </h3>

                <p className="text-black/55">
                  Premium Properties Delivered
                </p>

              </div>

              <div>

                <h3 className="text-[#D4AF37] text-4xl mb-3 font-semibold">
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