"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  HeartPulse,
  Sparkles,
  Globe,
  X,
} from "lucide-react";

export default function HeroSection() {
  const [modal, setModal] = useState<
    null | "appointment" | "partner"
  >(null);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] text-[#071A3D]">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* Soft gradients */}
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#E50914]/10 blur-3xl" />

          <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#071A3D]/10 blur-3xl" />

          {/* Tiny Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* Floating Blur */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute right-[15%] top-[20%] h-40 w-40 rounded-full bg-red-500/10 blur-3xl"
          />

          {/* Animated line */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 h-[2px] bg-gradient-to-r from-[#071A3D] via-[#E50914] to-transparent"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-28 lg:flex-row lg:items-center lg:px-12">
          {/* LEFT */}
          <div className="w-full lg:w-[55%]">
            {/* MINI LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-[1px] w-12 bg-[#E50914]" />

              <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#E50914]">
                RadioMed Technology
              </span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              className="max-w-3xl text-[2.5rem] font-black leading-[0.95] tracking-[-0.04em] md:text-[4rem]"
            >
              Transforming Diagnostic
              <span className="relative block text-[#E50914]">
                Healthcare
              </span>
              in Nigeria
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-lg"
            >
              Advanced imaging, laboratory diagnostics, and
              technology-driven healthcare infrastructure built
              for underserved communities.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              {/* PRIMARY */}
              <button
                onClick={() => setModal("appointment")}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#071A3D] px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition-all duration-500 hover:bg-[#E50914]"
              >
                Book Appointment

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* SECONDARY */}
              <button
                onClick={() => setModal("partner")}
                className="group flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm uppercase tracking-[0.15em] text-[#071A3D] transition-all duration-500 hover:border-[#E50914] hover:text-[#E50914]"
              >
                Partner with us
              </button>
            </motion.div>

            {/* FLOATING INFO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="mt-16 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
                <HeartPulse className="h-5 w-5 text-[#E50914]" />

                <span className="text-sm font-medium text-slate-700">
                  Advanced Imaging
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
                <Sparkles className="h-5 w-5 text-[#E50914]" />

                <span className="text-sm font-medium text-slate-700">
                  100% Solar Powered
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.04)]">
                <Globe className="h-5 w-5 text-[#E50914]" />

                <span className="text-sm font-medium text-slate-700">
                  Global Partnerships
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative mt-24 flex w-full justify-center lg:mt-0 lg:w-[45%]">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="relative"
            >
              {/* IMAGE */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="relative overflow-hidden rounded-[36px]"
              >
                <img
                  src="/images/hero/herobg.webp"
                  alt="Radiomed"
                  className="h-[650px] w-[520px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/40 via-transparent to-transparent" />
              </motion.div>

              {/* FLOATING TOP CARD */}
              

              {/* FLOATING BOTTOM CARD */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-[-30px] right-[-30px] rounded-[28px] bg-[#071A3D] px-8 py-7 text-white shadow-[0_20px_60px_rgba(7,26,61,0.25)]"
              >
                <div className="text-5xl font-black leading-none">
                  100%
                </div>

                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
                  Reliable Operations
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-[32px] bg-white shadow-2xl"
            >
              {/* CLOSE */}
              <button
                onClick={() => setModal(null)}
                className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7FA]"
              >
                <X className="h-5 w-5 text-[#071A3D]" />
              </button>

              {/* HEADER */}
              <div className="border-b border-slate-100 px-8 py-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#E50914]">
                  RadioMed
                </p>

                <h3 className="mt-3 text-3xl font-black text-[#071A3D]">
                  {modal === "appointment"
                    ? "Book Appointment"
                    : "Partnership Inquiry"}
                </h3>

                <p className="mt-4 text-slate-600">
                  {modal === "appointment"
                    ? "Complete the form below and our healthcare team will contact you shortly."
                    : "Tell us about your organization and partnership interest."}
                </p>
              </div>

              {/* FORM */}
              <form
                action="https://formsubmit.co/adediranstephen2000@gmail.com"
                method="POST"
                className="space-y-6 px-8 py-8"
              >
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value={`RadioMed ${
                    modal === "appointment"
                      ? "Appointment Request"
                      : "Partnership Inquiry"
                  }`}
                />

                {/* APPOINTMENT FORM */}
                {modal === "appointment" ? (
                  <>
                    <div className="grid gap-6 md:grid-cols-2">
                      <input
                        type="text"
                        name="Full Name"
                        placeholder="Full Name"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                      />

                      <input
                        type="tel"
                        name="Phone Number"
                        placeholder="Phone Number"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <input
                      type="email"
                      name="Email Address"
                      placeholder="Email Address"
                      required
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                    />

                    <select
                      name="Service Required"
                      required
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                    >
                      <option value="">
                        Select Service
                      </option>

                      <option>CT Scan Imaging</option>

                      <option>MRI Imaging</option>

                      <option>Digital X-Ray</option>

                      <option>Ultrasound</option>

                      <option>Laboratory Diagnostics</option>
                    </select>

                    <textarea
                      rows={5}
                      name="Additional Information"
                      placeholder="Additional Information"
                      className="w-full rounded-3xl border border-slate-200 bg-[#F8FAFC] px-5 py-5 outline-none focus:border-[#E50914]"
                    />
                  </>
                ) : (
                  <>
                    {/* PARTNER FORM */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <input
                        type="text"
                        name="Full Name"
                        placeholder="Full Name"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                      />

                      <input
                        type="text"
                        name="Organization"
                        placeholder="Organization"
                        required
                        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                      />
                    </div>

                    <input
                      type="email"
                      name="Email Address"
                      placeholder="Email Address"
                      required
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                    />

                    <select
                      name="Partnership Type"
                      required
                      className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 outline-none focus:border-[#E50914]"
                    >
                      <option value="">
                        Select Partnership Type
                      </option>

                      <option>Hospital Partnership</option>

                      <option>HMO Partnership</option>

                      <option>Corporate Healthcare</option>

                      <option>Government Partnership</option>
                    </select>

                    <textarea
                      rows={5}
                      name="Message"
                      placeholder="Tell us about your partnership interest..."
                      required
                      className="w-full rounded-3xl border border-slate-200 bg-[#F8FAFC] px-5 py-5 outline-none focus:border-[#E50914]"
                    />
                  </>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#071A3D] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:bg-[#E50914]"
                >
                  Submit Request

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}