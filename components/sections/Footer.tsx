"use client";

import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com/jsbhomemakers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/jsbhomemakers/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm10.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/jsb-group/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1 8h4v13H1V8zm7 0h3.8v1.8h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6v7.3h-4v-6.5c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4V21H8V8z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@JSBHomemakers/shorts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2C2C2E] text-white">
      {/* GOLDEN GLOW */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9A961]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {/* TOP SECTION */}
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <Image
              src="/logo2.png"
              alt="Nakshatra Veda"
              width={180}
              height={180}
              className="mb-8 h-auto w-[130px] md:w-[150px]"
            />

            <p className="max-w-2xl text-[15px] leading-[1.95] text-white/65 md:text-[17px]">
              Every story has a beginning. Ours is built on a powerful belief —
              that a home is not just made of walls, but shaped by aspirations,
              experiences, and the journey it holds.
              <br />
              <br />
              For over 20 years, JSB Group has brought this belief to life,
              delivering thoughtfully envisioned communities crafted with
              purpose, precision, and timeless design.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-9">
            <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#C9A961]">
              Contact Information
            </p>

            <div className="space-y-5">
              <a
                href="tel:+917090696000"
                className="flex items-center justify-between border-b border-white/10 pb-4 transition-all duration-300 hover:border-[#C9A961]/40"
              >
                <span className="text-white/50">Phone</span>

                <span className="text-[17px] tracking-wide text-white">
                  +91 70906 96000
                </span>
              </a>

              <a
                href="mailto:support@jsbgroup.co.in"
                className="flex items-center justify-between border-b border-white/10 pb-4 transition-all duration-300 hover:border-[#C9A961]/40"
              >
                <span className="text-white/50">Support</span>

                <span className="text-[15px] text-white">
                  support@jsbgroup.co.in
                </span>
              </a>

              <div className="pt-2">
                <p className="mb-2 text-white/50">Address</p>

                <p className="text-[15px] leading-[1.8] text-white/85">
                  JSB Group Madhuban Township,
                  <br />
                  Yashwant Smart City,
                  <br />
                  Vasai (E)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL + APPROVALS */}
        <div className="grid gap-10 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          {/* SOCIALS */}
          <div>
            <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-[#C9A961]">
              Connect With Us
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A961]/50 hover:bg-[#C9A961] hover:text-[#2C2C2E]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* APPROVALS */}
          <div className="grid gap-5 md:grid-cols-3">
            {/* CARD 1 */}
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
              <Image
                src="/footer/qr-1.jpg"
                alt="QR"
                width={120}
                height={120}
                className="mx-auto mb-5 w-[90px] rounded-xl"
              />

              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                MahaRERA
              </p>

              <p className="text-[20px] font-light tracking-wide text-[#C9A961]">
                P99000047826
              </p>
            </div>

            {/* CENTER CARD */}
            <div className="flex flex-col items-center justify-center rounded-[24px] border border-[#C9A961]/20 bg-[#C9A961]/[0.05] p-5 text-center">
              <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#C9A961]">
                Approved By
              </p>

              <Image
                src="/footer/bajaj-logo.jpg"
                alt="Bajaj"
                width={240}
                height={120}
                className="h-auto w-[180px] rounded-lg"
              />
            </div>

            {/* CARD 3 */}
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
              <Image
                src="/footer/qr-2.jpg"
                alt="QR"
                width={120}
                height={120}
                className="mx-auto mb-5 w-[90px] rounded-xl"
              />

              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/45">
                MahaRERA
              </p>

              <p className="text-[20px] font-light tracking-wide text-[#C9A961]">
                P99000048852
              </p>
            </div>
          </div>
        </div>

        {/* DISCLAIMER */}
        <div className="border-t border-white/10 pt-10">
          <p className="mx-auto max-w-6xl text-center text-[12px] leading-[2] text-white/40 md:text-[13px]">
            Disclaimer: The information, specifications, amenities, layouts,
            and visuals contained herein are indicative only and subject to
            approvals from concerned authorities. The developer reserves the
            right to amend plans, specifications, features, and layouts without
            prior notice.
          </p>
        </div>
      </div>
    </footer>
  );
}