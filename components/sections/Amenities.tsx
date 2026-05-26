"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const amenities = [
  {
    title: "Swimming Pool",
    description:
      "Strategic guidance tailored to your wealth creation goals",
    image: "/amenities/pool.jpg",
  },
  {
    title: "High-Tech Gym",
    description:
      "Strategic guidance tailored to your wealth creation goals",
    image: "/amenities/gym.jpg",
  },
  {
    title: "Landscape Garden",
    description:
      "Strategic guidance tailored to your wealth creation goals",
    image: "/amenities/garden.jpg",
  },
  {
    title: "Club House",
    description:
      "Strategic guidance tailored to your wealth creation goals",
    image: "/amenities/clubhouse.jpg",
  },
];

export default function Amenities() {
  return (
    <section
      id="amenities"
      className="bg-[#FAFAF8] py-24 md:py-32 scroll-mt-32 overflow-hidden"
    >

      <div className="container-custom">

        {/* Heading */}
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
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center mb-20"
        >

          <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-5">
            Amenities
          </p>

          <h2 className="heading-font text-[42px] md:text-[68px] leading-[1] text-[#1A1A1A]">
            Curated Luxury
            <br />
            Experiences
          </h2>

        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"
        >

          {amenities.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 60,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                h-[420px]
                rounded-[24px]
                overflow-hidden
                group
                cursor-pointer
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              "
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 text-white">

                <h3 className="heading-font text-4xl leading-none mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 max-w-[260px] leading-6">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}