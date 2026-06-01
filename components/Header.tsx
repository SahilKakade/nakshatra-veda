"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Menu,
  X,
} from "lucide-react";

import FormModal from "./forms/FormModal";

export default function Header() {

  const [open, setOpen] =
    useState(false);


    useEffect(() => {

  const handleOpen = () => {
    setOpen(true);
  };

  window.addEventListener(
    "open-lead-form",
    handleOpen
  );

  return () => {
    window.removeEventListener(
      "open-lead-form",
      handleOpen
    );
  };

}, []);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const navItems = [
    {
      label: "ABOUT US",
      id: "about",
    },
    {
      label: "AMENITIES",
      id: "amenities",
    },
    {
      label: "CONFIGURATION",
      id: "configuration",
    },
    {
      label: "GALLERY",
      id: "gallery",
    },
    {
      label: "PROXIMITY",
      id: "proximity",
    },
    {
      label: "CONNECTIVITY",
      id: "connectivity",
    },
    {
      label: "FLOOR PLANS",
      id: "floorplans",
    },
  ];

  const handleScroll = (
    id: string
  ) => {
    const section =
      document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setMobileMenu(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 pt-3 md:pt-4">

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-transparent backdrop-blur-[2px]" />

        <div className="relative z-10 container-custom">

          <div className="h-20 md:h-28 flex items-center justify-between">

            {/* LOGO */}
            <div className="relative w-22.5 h-22.5 md:w-35 md:h-35 shrink-0">

              <Image
                src="/logo-12.png"
                alt="Nakshatra Veda"
                fill
                priority
                className="object-contain"
              />

            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-8">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    handleScroll(item.id)
                  }
                  className="text-[13px] font-medium tracking-wide text-white hover:text-[#D4AF37] transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}

            </nav>

            {/* DESKTOP CTA */}
            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                hidden lg:flex
                items-center
                justify-center
                bg-white
                text-black
                px-8
                h-11
                text-[13px]
                font-semibold
                hover:bg-[#D4AF37]
                transition-all
                duration-300
              "
            >
              ENQUIRE NOW
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() =>
                setMobileMenu(true)
              }
              className="lg:hidden text-white"
            >
              <Menu size={30} />
            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-100
          bg-black/95
          backdrop-blur-xl
          transition-all duration-300
          
          ${
            mobileMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        {/* CLOSE */}
        <div className="flex justify-end p-6">

          <button
            onClick={() =>
              setMobileMenu(false)
            }
            className="text-white"
          >
            <X size={32} />
          </button>

        </div>

        {/* NAV ITEMS */}
        <div className="flex flex-col items-center justify-center gap-8 mt-10">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                handleScroll(item.id)
              }
              className="text-2xl heading-font text-white hover:text-[#D4AF37] transition-all duration-300"
            >
              {item.label}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => {
              setOpen(true);
              setMobileMenu(false);
            }}
            className="
              mt-6
              bg-[#D4AF37]
              text-black
              px-10
              h-14
              text-sm
              font-semibold
              rounded-xl
            "
          >
            ENQUIRE NOW
          </button>

        </div>

      </div>

      {/* FORM MODAL */}
      <FormModal
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}