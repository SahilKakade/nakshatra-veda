"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    number: "01",
    title: "Elevation Front View",
    description:
      "A striking architectural facade designed to blend timeless elegance with modern luxury living.",
    image: "/gallery/gallery1.jpg",
  },
  {
    number: "02",
    title: "Elevation Bird View",
    description:
      "Experience thoughtfully planned spaces crafted for openness, comfort, and refined living.",
    image: "/gallery/gallery2.jpg",
  },
  {
    number: "03",
    title: "Elevation Back View",
    description:
      "A sophisticated blend of design, landscape, and premium construction detail.",
    image: "/gallery/gallery3.jpg",
  },
  {
    number: "04",
    title: "Bedroom",
    description:
      "Designed to offer calmness, warmth, and luxury for your everyday lifestyle.",
    image: "/gallery/gallery4.jpg",
  },
  {
    number: "05",
    title: "Living Room",
    description:
      "Expansive interiors thoughtfully curated for modern family living and entertainment.",
    image: "/gallery/gallery5.jpg",
  },
  {
    number: "06",
    title: "Library",
    description:
      "Elegant private spaces crafted to inspire productivity, focus, and relaxation.",
    image: "/gallery/gallery6.jpg",
  },
  {
  number: "07",
  title: "Luxury Kitchen",
  description:
    "Crafted for modern living with elegant finishes, warm lighting, and functional beauty in every detail.",
  image: "/gallery/gallery7.jpg",
},

{
  number: "08",
  title: "Elegant Bathroom",
  description:
    "A calming retreat designed with premium textures, ambient lighting, and timeless sophistication.",
  image: "/gallery/gallery8.jpg",
},
];

export default function Gallery() {
  return (
    <>
      {/* DESKTOP */}
      <section
        id="gallery"
        className="
          hidden
          lg:block
          bg-[#FFFFFF]
          py-24
          overflow-hidden
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
            className="text-center max-w-5xl mx-auto mb-24"
          >

            <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-5">
              Gallery
            </p>

            <h2 className="heading-font text-[52px] leading-[1.05] text-[#1A1A1A]">
              Take a closer look,
              every frame captures the life you&apos;re about to live
            </h2>

          </motion.div>

          {/* Gallery */}
          <div className="space-y-24">

            {galleryItems.map(
              (item, index) => {

                const imageRight =
                  index % 2 === 0;

                return (
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
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="
                      grid
                      grid-cols-2
                      gap-16
                      items-center
                    "
                  >

                    {/* TEXT */}
                    <div
                      className={`
                        ${
                          imageRight
                            ? "pr-8 text-right"
                            : "order-2 pl-8 text-left"
                        }
                      `}
                    >

                      <p className="text-[#D4AF37] heading-font text-5xl mb-5">
                        {item.number}
                      </p>

                      <h3 className="heading-font text-[42px] leading-[1.05] text-[#1A1A1A] mb-6">
                        {item.title}
                      </h3>

                      <p className="text-[#4A4A4A] text-[17px] leading-8 max-w-[460px] inline-block">
                        {item.description}
                      </p>

                    </div>

                    {/* IMAGE */}
                    <div
                      className={`
                        ${
                          imageRight
                            ? "pl-8"
                            : "order-1 pr-8"
                        }
                      `}
                    >

                      <motion.div
                        whileHover={{
                          y: -6,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          relative
                          overflow-hidden
                          rounded-[10px]
                          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                        "
                      >

                        <Image
                          src={item.image}
                          alt={item.title}
                          width={900}
                          height={700}
                          className="
                            w-full
                            h-[520px]
                            object-cover
                            transition-transform
                            duration-700
                            hover:scale-105
                          "
                        />

                      </motion.div>

                    </div>

                  </motion.div>
                );
              }
            )}

          </div>

        </div>

      </section>

            {/* MOBILE */}
      <section className="lg:hidden bg-[#F7F5F2] py-16 overflow-hidden">

        {/* Heading */}
        <div className="px-5 mb-10">

          <p className="text-[#D4AF37] text-[11px] tracking-[0.25em] uppercase mb-3">
            Gallery
          </p>

          <h2 className="heading-font text-[34px] leading-[1.1] text-[#1A1A1A]">
            Take a closer look,
            every frame captures the life you&apos;re about to live
          </h2>

        </div>

        {/* Horizontal Scroll */}
        <div
          className="
            flex
            gap-4
            overflow-x-auto
            no-scrollbar
            pl-5
            pr-5
          "
        >

          {galleryItems.map((item) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.5,
              }}
              className="
                min-w-[68%]
                flex-shrink-0
              "
            >

              <div
                className="
                  relative
                  h-[420px]
                  rounded-[22px]
                  overflow-hidden
                  shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                "
              >

                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/30
                    to-transparent
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-5
                    text-white
                  "
                >

                  <p className="text-[#D4AF37] heading-font text-[26px] mb-2">
                    {item.number}
                  </p>

                  <h3 className="heading-font text-[24px] leading-[1.1] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/85 text-[13px] leading-5">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>
    </>
  );
}