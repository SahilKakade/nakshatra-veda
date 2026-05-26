"use client";

import Image from "next/image";

import {
  motion,
} from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  useEffect,
  useState,
} from "react";

const plans = [
  "/floorplans/plan1.jpg",
  "/floorplans/plan2.jpg",
  "/floorplans/plan3.jpg",
];

export default function FloorPlans() {

  const [isUnlocked, setIsUnlocked] =
    useState(false);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  /* UNLOCK AFTER FORM SUBMIT */
  useEffect(() => {

    const handleUnlock = () => {
      setIsUnlocked(true);
    };

    window.addEventListener(
      "unlock-floorplans",
      handleUnlock
    );

    return () => {
      window.removeEventListener(
        "unlock-floorplans",
        handleUnlock
      );
    };

  }, []);

  return (
    <>
      <section
        id="floorplans"
        className="
          bg-[#FAFAF8]
          py-24
          md:py-32
          overflow-hidden
          scroll-mt-32
        "
      >

        <div className="container-custom">

          {/* HEADING */}
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
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-center max-w-5xl mx-auto mb-20"
          >

            <p className="text-[#D4AF37] text-[12px] tracking-[0.25em] uppercase mb-5">
              Floor Plans
            </p>

            <h2 className="heading-font text-[34px] md:text-[54px] leading-[1.15] text-[#1A1A1A]">

              Our floor plans bring together{" "}

              <span className="font-semibold">
                intelligent layouts,
                natural ventilation,
              </span>

              {" "}and{" "}

              <span className="font-semibold">
                seamless flow
              </span>

              {" "}to create homes that truly feel like yours

            </h2>

          </motion.div>

          {/* FLOOR PLAN GRID */}
          <div
            className="
              relative
              grid
              md:grid-cols-3
              gap-5
            "
          >

            {plans.map((plan, index) => (
              <motion.div
                key={plan}
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
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="
                  relative
                  rounded-[12px]
                  overflow-hidden
                  bg-white
                  border
                  border-black/5
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                "
              >

                {/* IMAGE */}
                <button
                  onClick={() => {

                    if (isUnlocked) {
                      setSelectedImage(plan);
                    }

                  }}
                  className="w-full relative"
                >

                  <Image
                    src={plan}
                    alt="Floor Plan"
                    width={1000}
                    height={700}
                    className={`
                      w-full
                      h-[240px]
                      md:h-[320px]
                      object-cover
                      transition-all
                      duration-500
                      ${
                        !isUnlocked
                          ? "blur-[10px] brightness-75"
                          : ""
                      }
                    `}
                  />

                </button>

                {/* CENTER BUTTON OVER MIDDLE IMAGE */}
                {!isUnlocked && index === 1 && (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      bg-black/20
                    "
                  >

                    <button
                      onClick={() => {

                        window.dispatchEvent(
                          new CustomEvent(
                            "open-lead-form"
                          )
                        );

                      }}
                      className="
                        bg-[#D4AF37]
                        hover:bg-[#c59d28]
                        transition-all
                        duration-300
                        text-black
                        px-10
                        h-14
                        rounded-[4px]
                        text-sm
                        font-semibold
                        tracking-wide
                        shadow-[0_10px_30px_rgba(212,175,55,0.25)]
                      "
                    >

                      ENQUIRE NOW

                    </button>

                  </div>
                )}

              </motion.div>
            ))}

          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-10">

            {plans.map((_, index) => (
              <div
                key={index}
                className={`
                  rounded-full
                  transition-all
                  ${
                    index === 0
                      ? "w-8 h-2 bg-[#5E4A17]"
                      : "w-2 h-2 bg-[#D8C9A0]"
                  }
                `}
              />
            ))}

          </div>

        </div>

      </section>

      {/* FULLSCREEN IMAGE MODAL */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() =>
          setSelectedImage(null)
        }
      >

        <DialogContent
          className="
            bg-transparent
            border-none
            shadow-none
            max-w-6xl
            p-0
          "
        >

          <DialogTitle className="hidden">
            Floor Plan Preview
          </DialogTitle>

          {selectedImage && (

            <div className="relative">

              <Image
                src={selectedImage}
                alt="Floor Plan Full"
                width={1600}
                height={1200}
                className="
                  w-full
                  h-auto
                  rounded-[10px]
                "
              />

            </div>

          )}

        </DialogContent>

      </Dialog>
    </>
  );
}