export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6">
      <div className="max-w-[700px] text-center">

        <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-8">
          <span className="text-[#D4AF37] text-5xl">
            ✓
          </span>
        </div>

        <h1
          className="
            heading-font
            text-[52px]
            md:text-[72px]
            leading-none
            text-[#D4AF37]
            mb-6
          "
        >
          Thank You
        </h1>

        <p
          className="
            text-white/75
            text-lg
            md:text-xl
            leading-9
            max-w-[600px]
            mx-auto
            mb-10
          "
        >
          Your enquiry has been submitted successfully.
          <br />
          Our team will reach out to you shortly with
          complete project details and investment guidance.
        </p>

        <a
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            h-[60px]
            px-10
            rounded-[16px]
            bg-[#D4AF37]
            text-black
            font-semibold
            tracking-[0.08em]
            hover:bg-[#c9a12f]
            transition-all
          "
        >
          BACK TO HOME
        </a>

      </div>
    </main>
  );
}