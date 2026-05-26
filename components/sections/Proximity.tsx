"use client";

import { motion } from "framer-motion";

const proximityData = [
  {
    number: "01",
    title: "Restaurants",
    items: [
      "McDonald's (Evershine)",
      "Celebrity Family Restaurant",
      "Farmhouse Global Cuisine Restaurant",
    ],
  },
  {
    number: "02",
    title: "Lifestyle and Open-air food",
    items: [
      "Vasai Box Street",
      "Capital Mall",
      "Splash Aqua Park",
    ],
  },
  {
    number: "03",
    title: "Healthcare Facilities",
    items: [
      "Platinum Hospital Pvt Ltd",
      "Apollo Children's Hospital",
      "IASIS Hospital",
    ],
  },
  {
    number: "04",
    title: "Cinemas",
    items: [
      "Carnival Cinemas (Dreams Mall)",
      "MiraJ DattaJ Cinemas",
      "PVR in Capital Mall",
    ],
  },
  {
    number: "05",
    title: "Schools & Colleges",
    items: [
      "Divine Santo Nino International School",
      "Sheth Vidya Mandir English High School",
      "Vidya Vikasini School (ICSE)",
      "I Global School",
    ],
  },
  {
    number: "06",
    title: "Banks & ATM's",
    items: [
      "ICICI Bank & ATM",
      "HDFC Bank & ATM",
      "CSB Bank Ltd",
    ],
  },
];

export default function Proximity() {
  return (
    <section
      id="proximity"
      className="
        bg-[#FAFAF8]
        py-24
        md:py-32
        scroll-mt-32
      "
    >

      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="text-center max-w-4xl mx-auto mb-20"
        >

          <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-5">
            Proximity
          </p>

          <h2 className="heading-font text-[42px] md:text-[64px] leading-[1.08] text-[#1A1A1A]">
            The one location where work,
            life, and leisure all meet.
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {proximityData.map(
            (item, index) => (
              <motion.div
                key={item.number}
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
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  relative
                  bg-white
                  rounded-[12px]
                  p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  border
                  border-black/5
                  min-h-[260px]
                "
              >

                {/* Number */}
                <div className="absolute top-5 right-5 text-[#3D3118]/20 heading-font text-5xl">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-[#1A1A1A] text-[22px] heading-font mb-6 pr-12 leading-[1.2]">
                  {item.title}
                </h3>

                {/* List */}
                <ul className="space-y-3">

                  {item.items.map(
                    (listItem) => (
                      <li
                        key={listItem}
                        className="
                          text-[#4A4A4A]
                          text-[15px]
                          leading-7
                          flex
                          items-start
                          gap-3
                        "
                      >

                        <span className="mt-[11px] w-[5px] h-[5px] rounded-full bg-[#000000] flex-shrink-0" />

                        <span>
                          {listItem}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </motion.div>
            )
          )}

        </div>

      </div>

    </section>
  );
}