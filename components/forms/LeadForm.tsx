"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

interface LeadFormProps {
  variant?: "hero" | "popup";
  onSuccess?: () => void;
}

export default function LeadForm({
  variant = "hero",
  onSuccess,
}: LeadFormProps) {
  const isPopup = variant === "popup";

  const [loading, setLoading] =
    useState(false);



  const [showSuccess, setShowSuccess] =
  useState(false);

  const [formData, setFormData] =
    useState({
      full_name: "",
      phone: "",
      email: "",
      property_interest: "",
      consent: false,
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const target =
  e.target as HTMLInputElement;

      const {
        name,
        value,
        type,
        checked,
      } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !formData.full_name ||
      !formData.phone ||
      !formData.email ||
      !formData.property_interest ||
      !formData.consent
    ) {
      alert(
        "Please fill all fields and accept consent."
      );
      return;
    }

    try {
      setLoading(true);

      /* SAVE TO SUPABASE */
     const params =
  new URLSearchParams(
    window.location.search
  );

const { error } =
  await supabase
    .from("leads")
    .insert([
      {
        ...formData,

        page_url:
          window.location.href,

        utm_source:
          params.get("utm_source"),

        utm_medium:
          params.get("utm_medium"),

        utm_campaign:
          params.get("utm_campaign"),

        utm_term:
          params.get("utm_term"),

        utm_content:
          params.get("utm_content"),
      },
    ]);

      if (error) {
        console.log(error);
        alert(
          "Something went wrong."
        );
        return;
      }

      /* SEND EMAIL */
      await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
  ...formData,

  page_url:
    window.location.href,

  utm_source:
    params.get("utm_source"),

  utm_medium:
    params.get("utm_medium"),

  utm_campaign:
    params.get("utm_campaign"),

  utm_term:
    params.get("utm_term"),

  utm_content:
    params.get("utm_content"),
}),
      });

      /* UNLOCK FLOOR PLANS */
      window.dispatchEvent(
        new CustomEvent(
          "unlock-floorplans"
        )
      );

      setShowSuccess(true);
      window.history.pushState(
          {},
          "",
          "/thankyou"
        );

      /* RESET FORM */
      setFormData({
        full_name: "",
        phone: "",
        email: "",
        property_interest: "",
        consent: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`
        bg-[#FAFAF8]
        border border-[#E5E5E0]
        rounded-[12px]
        w-full
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        
        ${
          isPopup
            ? "p-6 md:p-10"
            : "p-6 md:p-8"
        }
      `}
    >
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div
            className={
              isPopup
                ? "grid grid-cols-2 gap-4"
                : "space-y-5"
            }
          >
            {/* Full Name */}
            <div>
              <label className="text-[11px] tracking-[0.2em] text-[#B8922E] font-medium block mb-2">
                FULL NAME
              </label>

              <input
                required
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full h-14 bg-white border border-[#DCDCD7] rounded-2xl px-5 text-sm text-black outline-none placeholder:text-black/35 focus:border-[#D4AF37] transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-[11px] tracking-[0.2em] text-[#B8922E] font-medium block mb-2">
                PHONE NUMBER
              </label>

              <input
                required
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full h-14 bg-white border border-[#DCDCD7] rounded-2xl px-5 text-sm text-black outline-none placeholder:text-black/35 focus:border-[#D4AF37] transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[11px] tracking-[0.2em] text-[#B8922E] font-medium block mb-2">
              EMAIL ADDRESS
            </label>

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full h-14 bg-white border border-[#DCDCD7] rounded-2xl px-5 text-sm text-black outline-none placeholder:text-black/35 focus:border-[#D4AF37] transition-all"
            />
          </div>

          {/* Property */}
          <div>
            <label className="text-[11px] tracking-[0.2em] text-[#B8922E] font-medium block mb-2">
              PROPERTY INTEREST
            </label>

            <select
              required
              name="property_interest"
              value={
                formData.property_interest
              }
              onChange={handleChange}
              className="w-full h-14 bg-white border border-[#DCDCD7] rounded-2xl px-5 text-sm text-black outline-none focus:border-[#D4AF37] transition-all"
            >
              <option value="">
                Select Property Type
              </option>

              <option value="1 BHK">
                1 BHK
              </option>

              <option value="2 BHK">
                2 BHK
              </option>

              <option value="3 BHK">
                3 BHK
              </option>
            </select>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 text-xs text-black/60 leading-6">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 accent-[#D4AF37]"
            />

            <p>
              I authorize JSB Group |
              Nakshatra Veda & its
              representatives to contact
              me with updates and
              notifications via
              Email/SMS/WhatsApp/Call.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={
              loading ||
              !formData.full_name ||
              !formData.phone ||
              !formData.email ||
              !formData.property_interest ||
              !formData.consent
            }
            className={`
              w-full h-14 text-sm font-semibold rounded-2xl transition-all
              ${
                loading ||
                !formData.full_name ||
                !formData.phone ||
                !formData.email ||
                !formData.property_interest ||
                !formData.consent
                  ? "bg-[#D4AF37]/40 text-black/40 cursor-not-allowed"
                  : "bg-[#D4AF37] text-black hover:opacity-90"
              }
            `}
          >
            {loading
              ? "Submitting..."
              : "SUBMIT"}
          </button>
          {/* SUCCESS POPUP */}
{showSuccess && (

  <div
    className="
      fixed
      inset-0
      z-[9999]
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      px-5
    "
  >

    <div
      className="
        bg-[#1A1A1A]
        border
        border-[#D4AF37]/20
        rounded-[24px]
        p-8
        md:p-10
        max-w-[480px]
        w-full
        text-center
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
      "
    >

      {/* ICON */}
      <div
        className="
          w-20
          h-20
          rounded-full
          bg-[#D4AF37]/10
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        "
      >

        <span className="text-[#D4AF37] text-4xl">
          ✓
        </span>

      </div>

      {/* TITLE */}
      <h3
        className="
          heading-font
          text-[36px]
          leading-none
          text-[#D4AF37]
          mb-5
        "
      >

        Thank You

      </h3>

      {/* TEXT */}
      <p
        className="
          text-white/75
          text-[16px]
          leading-8
          mb-8
        "
      >

        Your enquiry has been submitted successfully.

        Our team will reach out to you shortly with complete project details.

      </p>

      {/* BUTTON */}
      <button
          onClick={() => {
            setShowSuccess(false);

                window.history.pushState(
                  {},
                  "",
                  "/"
                );

                onSuccess?.();
          }}
        className="
          w-full
          h-[58px]
          rounded-[16px]
          bg-[#D4AF37]
          hover:bg-[#c9a12f]
          transition-all
          duration-300
          text-black
          font-semibold
          tracking-[0.08em]
        "
      >

        CLOSE

      </button>

    </div>

  </div>
)}
        </form>
      </div>
    </div>
  );
}