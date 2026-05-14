"use client";

import { motion } from "framer-motion";

const whatsappLink =
  "https://wa.me/2348000000000?text=Hello%20Triage%20Concierge%2C%20I%20would%20like%20assistance%20with%20healthcare%20services.";

const steps = [
  {
    icon: "/icons/first.png",
    title: "Dedicated Care Coordination",
    desc: "A single point of contact who understands your needs and handles everything for you.",
  },
  {
    icon: "/icons/vip-person.png",
    title: "Priority Access",
    desc: "Skip the waiting. Get immediate access to trusted professionals when it matters most.",
  },
  {
    icon: "/icons/courage.png",
    title: "Personalized Care Plans",
    desc: "Every decision is tailored to your lifestyle, your needs, and your preferences.",
  },
  {
    icon: "/icons/care.png",
    title: "Ongoing Support",
    desc: "We stay with you, from first request to long-term care and follow-ups.",
  },
  {
    icon: "/icons/shield.png",
    title: "Peace of Mind",
    desc: "Every detail is handled by experienced professionals you can trust.",
  },
];

export default function ConciergePage() {
  return (
    <main className="relative overflow-hidden text-white">

      {/* ===================================================== */}
      {/* 🟢 HERO */}
      {/* ===================================================== */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-6">

        {/* NAVY BACKGROUND */}
        <div className="absolute inset-0 bg-triage-navy" />

        {/* subtle lime glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(166,210,0,0.08),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-6xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold text-white md:text-6xl"
          >
            <span className="text-triage-teal">
              Healthcare,
            </span>
            <br />
            handled for you.
          </motion.h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            A dedicated healthcare concierge that manages your needs end-to-end, from booking care to ongoing support.
          </p>

          <p className="mt-4 italic text-white/50">
            Personal. Proactive. Always available.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-triage-orange px-8 py-4 font-medium text-white"
            >
              Speak on WhatsApp
            </a>

          </div>

          <p className="mt-6 text-sm text-white/50">
            Available 24/7 on WhatsApp • Instant response • Human support
          </p>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🔵 TIMELINE */}
      {/* ===================================================== */}

      <section className="relative px-4 py-20 md:px-6 md:py-32">

        {/* LIGHT BACKGROUND */}
        <div className="absolute inset-0 bg-triage-gray-50" />

        <div className="relative z-10 mx-auto max-w-6xl text-triage-navy">

          {/* HEADER */}
          <h2 className="mb-16 text-center text-3xl font-semibold md:mb-24 md:text-5xl">
            A smarter, more personal way to access care
          </h2>

          <div className="relative">

            {/* CENTER LINE (DESKTOP ONLY) */}
            <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-triage-orange/30 md:block" />

            <div className="space-y-12 md:space-y-24">

              {steps.map((step, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div key={i} className="relative">

                    {/* MOBILE LAYOUT */}
                    <div className="flex items-start gap-4 md:hidden">

                      {/* ICON */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-triage-orange shadow-md">

                        <img
                          src={step.icon}
                          alt={step.title}
                          className="h-5 w-5 object-contain brightness-0 invert"
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="w-full rounded-2xl border border-triage-gray-200 bg-white p-5 shadow-sm">

                        <h3 className="text-lg font-semibold text-black">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm text-triage-gray-600">
                          {step.desc}
                        </p>

                      </div>

                    </div>

                    {/* DESKTOP LAYOUT */}
                    <div className="hidden items-center md:grid md:grid-cols-2">

                      {/* LEFT / RIGHT CONTENT */}
                      <div
                        className={`${
                          isLeft
                            ? "text-right md:pr-12"
                            : "text-left md:order-2 md:pl-12"
                        }`}
                      >

                        <motion.div
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          className="inline-block rounded-2xl border border-triage-gray-200 bg-white p-6 shadow-sm"
                        >

                          <h3 className="text-xl font-semibold text-black">
                            {step.title}
                          </h3>

                          <p className="mt-3 text-triage-gray-600">
                            {step.desc}
                          </p>

                        </motion.div>

                      </div>

                      {/* CENTER ICON */}
                      <div className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-triage-orange shadow-md">

                          <img
                            src={step.icon}
                            alt={step.title}
                            className="h-6 w-6 object-contain brightness-0 invert"
                          />

                        </div>

                      </div>

                      {/* EMPTY SIDE */}
                      <div />

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* 🟣 FINAL CTA */}
      {/* ===================================================== */}

      <section className="relative px-6 py-32 text-center">

        {/* NAVY BACKGROUND */}
        <div className="absolute inset-0 bg-triage-navy" />

        <div className="relative z-10 mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Let us take care of everything
          </h2>

          <p className="mt-6 text-lg text-white/80">
            With TriageConcierge, healthcare becomes effortless, giving you more time, clarity, and confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full bg-triage-orange px-8 py-4 font-medium text-white"
            >
              Request Concierge Access
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="rounded-full border border-white/20 px-8 py-4 transition hover:border-triage-orange"
            >
              Speak to a Specialist
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}