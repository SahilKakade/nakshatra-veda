"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import FormModal from "../forms/FormModal";

const configurations = [
  {
    title: "2 BHK",
    size: "600 Sq.Ft.",
  },
  {
    title: "3 BHK",
    size: "824 Sq.Ft. - 943 Sq.Ft.",
  },
];

export default function Configuration() {

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <section
        id="configuration"
        className="bg-[#FFFFFF] py-24 md:py-32 scroll-mt-32 overflow-hidden"
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
            className="max-w-6xl"
          >

            <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-6">
              Configuration
            </p>

            <h2 className="heading-font text-[50px] leading-[1.15] text-[#1A1A1A] max-w-6xl">

  One <span className="font-semibold">thoughtfully planned</span>{" "}
  configuration, designed to
  let <span className="font-semibold">the wind & light flow</span>{" "}
  and life <span className="font-semibold">breathe.</span>

</h2>

          </motion.div>

          {/* Cards */}
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
                  staggerChildren: 0.2,
                },
              },
            }}
            className="flex flex-wrap justify-center gap-10 mt-20"
          >

            {configurations.map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
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
                  bg-[#EFE8DB]
                  rounded-[8px]
                  p-6
                  w-full
                  max-w-[290px]
                  text-center
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                "
              >

                {/* Title */}
                <div className="border border-black/10 rounded-md py-4 mb-5">

                  <h3 className="heading-font text-4xl text-[#1A1A1A]">
                    {item.title}
                  </h3>

                </div>

                {/* Size */}
                <p className="text-[18px] font-medium text-[#1A1A1A] mb-8 tracking-tight">
  {item.size}
</p>

                {/* Button */}
                <button
                  onClick={() =>
                    setOpen(true)
                  }
                  className="
                    w-full
                    h-12
                    bg-[#D4AF37]
                    text-black
                    text-sm
                    font-semibold
                    hover:opacity-90
                    transition-all
                    duration-300
                  "
                >
                  ENQUIRE NOW →
                </button>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* Popup */}
      <FormModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}