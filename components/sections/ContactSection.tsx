"use client";

import { motion } from "framer-motion";

import LeadForm from "../forms/LeadForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        bg-[#ffffff]
        py-24
        md:py-32
        scroll-mt-32
        overflow-hidden
      "
    >

      <div className="container-custom">

        <div
          className="
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-14
            lg:gap-24
            items-start
          "
        >

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
            className="lg:sticky"
          >

            <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-5">
              Get In Touch
            </p>

            <h2 className="heading-font text-[42px] md:text-[68px] leading-[1.02] text-[#1A1A1A] mb-8">

              Let&apos;s Start
              <br />
              Your Property Journey

            </h2>

            <p className="text-[#555555] text-[17px] leading-8 max-w-[420px]">

              Have questions? Our team is here to help you find the perfect investment opportunity.

            </p>

          </motion.div>

          {/* RIGHT FORM */}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <div
              
            >

              <LeadForm />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}