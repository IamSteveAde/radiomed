"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Clock3,
  Globe2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+234 806 872 1266",
    description: "Speak with our healthcare support team.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@radiomed.com",
    description: "For inquiries, partnerships, and support.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ogun State, Nigeria",
    description: "Healthcare infrastructure for underserved communities.",
  },
];

const supportItems = [
  {
    icon: Clock3,
    title: "Fast Response",
    text: "Our team responds quickly to appointments, partnerships, and healthcare inquiries.",
  },
  {
    icon: Globe2,
    title: "Institutional Partnerships",
    text: "Collaborating with hospitals, HMOs, and healthcare organizations across Nigeria.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] text-[#071A3D]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* GRADIENT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%),linear-gradient(to_bottom,#FFFFFF,#F5F7FA,#FFFFFF)]" />

          {/* GRID */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* GLOW */}
          <motion.div
            animate={{
              y: [0, -40, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-3xl"
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-12">
          {/* TOP */}
          <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* LEFT */}
            <div>
              {/* LABEL */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-4"
              >
                <div className="h-[1px] w-14 bg-[#E50914]" />

                <span className="text-sm uppercase tracking-[0.35em] text-[#E50914]">
                  Contact RadioMed
                </span>
              </motion.div>

              {/* TITLE */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
                viewport={{ once: true }}
                className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl"
              >
                Let’s Build The
                <span className="block text-[#E50914]">
                  Future Of Healthcare
                </span>
                Together
              </motion.h1>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed text-slate-600 md:text-xl">
                Whether you are looking to book an appointment,
                explore institutional partnerships, or learn more
                about RadioMed’s healthcare infrastructure vision,
                our team is ready to connect with you.
              </p>

              
            </motion.div>
          </div>

          {/* CONTACT GRID */}
          <div className="mt-24 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)]" />

                    <div className="relative z-10 flex items-start gap-5">
                      {/* ICON */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
                        <Icon className="h-7 w-7 text-[#E50914]" />
                      </div>

                      {/* CONTENT */}
                      <div>
                        <h3 className="text-2xl text-black font-bold tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-lg font-medium text-[#071A3D]">
                          {item.value}
                        </p>

                        <p className="mt-3 leading-relaxed text-slate-600">
                          {item.description}
                        </p>

                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: "100%",
                          }}
                          transition={{
                            duration: 1,
                          }}
                          viewport={{ once: true }}
                          className="mt-6 h-[1px] bg-gradient-to-r from-[#E50914] to-transparent"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* SUPPORT BOX */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[32px] bg-[#071A3D] p-8 text-white"
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.18),transparent_35%)]" />

                <div className="relative z-10">
                  {supportItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className={`${
                          index !== 0
                            ? "mt-8 border-t border-white/10 pt-8"
                            : ""
                        }`}
                      >
                        <div className="flex items-start gap-5">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                            <Icon className="h-6 w-6 text-red-400" />
                          </div>

                          <div>
                            <h3 className="text-2xl font-bold">
                              {item.title}
                            </h3>

                            <p className="mt-4 leading-relaxed text-white/70">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* RIGHT - FORM */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] bg-white p-10 shadow-[0_30px_120px_rgba(15,23,42,0.06)]"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.06),transparent_35%)]" />

              <div className="relative z-10">
                {/* HEADER */}
                <div className="border-b border-slate-200 pb-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Contact Form
                  </p>

                  <h2 className="mt-4 text-4xl font-black tracking-tight">
                    Send Us A Message
                  </h2>
                </div>

                {/* FORM */}
                <form
  action="https://formsubmit.co/adediranstephen2000@gmail.com"
  method="POST"
  className="mt-10 space-y-6"
>
  {/* FORMSUBMIT CONFIG */}
  <input type="hidden" name="_captcha" value="false" />

  <input type="hidden" name="_template" value="table" />

  <input
    type="hidden"
    name="_subject"
    value="RadioMed Contact Form Submission"
  />

  {/* ROW */}
  <div className="grid gap-6 md:grid-cols-2">
    <div>
      <label className="mb-3 block text-sm font-medium text-slate-600">
        First Name
      </label>

      <input
        type="text"
        name="First Name"
        placeholder="John"
        required
        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 text-[#071A3D] outline-none transition-all duration-300 focus:border-[#E50914]"
      />
    </div>

    <div>
      <label className="mb-3 block text-sm font-medium text-slate-600">
        Last Name
      </label>

      <input
        type="text"
        name="Last Name"
        placeholder="Doe"
        required
        className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 text-[#071A3D] outline-none transition-all duration-300 focus:border-[#E50914]"
      />
    </div>
  </div>

  {/* EMAIL */}
  <div>
    <label className="mb-3 block text-sm font-medium text-slate-600">
      Email Address
    </label>

    <input
      type="email"
      name="Email Address"
      placeholder="you@example.com"
      required
      className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 text-[#071A3D] outline-none transition-all duration-300 focus:border-[#E50914]"
    />
  </div>

  {/* SUBJECT */}
  <div>
    <label className="mb-3 block text-sm font-medium text-slate-600">
      Subject
    </label>

    <input
      type="text"
      name="Subject"
      placeholder="Partnership Inquiry"
      required
      className="h-14 w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 text-[#071A3D] outline-none transition-all duration-300 focus:border-[#E50914]"
    />
  </div>

  {/* MESSAGE */}
  <div>
    <label className="mb-3 block text-sm font-medium text-slate-600">
      Message
    </label>

    <textarea
      rows={6}
      name="Message"
      placeholder="Tell us more about your inquiry..."
      required
      className="w-full rounded-3xl border border-slate-200 bg-[#F8FAFC] px-5 py-5 text-[#071A3D] outline-none transition-all duration-300 focus:border-[#E50914]"
    />
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="group flex items-center gap-3 rounded-full bg-[#071A3D] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-500 hover:bg-[#E50914]"
  >
    Send Message

    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
  </button>
</form>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM STATEMENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="mt-28 text-center"
          >
            <p className="mx-auto max-w-5xl text-3xl font-medium leading-relaxed tracking-tight text-slate-700 md:text-5xl">
              Connecting communities to
              <span className="text-[#E50914]">
                {" "}advanced healthcare infrastructure
              </span>
              designed for the future of diagnostic access.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}