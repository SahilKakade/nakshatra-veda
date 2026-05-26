"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const connectivityData = [
  {
    title: "Vasai Jetty to Mumbai",
    distance: "14.2 km",
  },
  {
    title: "Vasai West Railway Station",
    distance: "3.8 km",
  },
  {
    title: "Naigaon Railway Station",
    distance: "6.6 kms",
  },
  {
    title: "Mumbai-Ahmedabad highway (Vasai Phata Via Waliv)",
    distance: "4.3 km",
  },
];

export default function Connectivity() {
  return (
    <section
      id="connectivity"
      className="
        bg-[#ffffff]
        py-24
        md:py-32
        scroll-mt-32
        overflow-hidden
      "
    >

      <div className="container-custom">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-6">
              Connectivity
            </p>

            <h4 className="heading-font text-[26px] md:text-[36px] leading-[1.3] text-[#1A1A1A]">

              This Address offers excellent connectivity with quick access to{" "}

              <span className="font-semibold">
                major bus routes,
                railway stations,
                and highways.
              </span>

              {" "}Whether you're commuting within the city or heading beyond, everything is within easy reach.

              <br />
              <br />

              With{" "}

              <span className="font-semibold">
                upcoming metro lines and infrastructure developments,
              </span>

              {" "}living here means staying connected to everything that matters, today and in the future.

            </h4>

          </motion.div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-5">

            {connectivityData.map(
              (item, index) => (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    bg-white
                    rounded-[18px]
                    border
                    border-black/5
                    p-6
                    md:p-8
                    shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                    min-h-[220px]
                    flex
                    flex-col
                    justify-between
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-[10px]
                      bg-[#F5EFE2]
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <MapPin
                      className="text-[#3D3118]"
                      size={20}
                    />

                  </div>

                  {/* Content */}
                  <div className="mt-10">

                    <p className="text-[#555555] text-[15px] leading-6 mb-5">
                      {item.title}
                    </p>

                    <h3 className="heading-font text-[34px] md:text-[42px] leading-none text-[#1A1A1A]">
                      {item.distance}
                    </h3>

                  </div>

                </motion.div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}