"use client";

import { motion } from "framer-motion";
import {
  SunMedium,
  ShieldCheck,
  Globe2,
  Activity,
  Building2,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const features = [

  {
    icon: Activity,
    title: "Same-Day Reporting",
    description:
      "Fast diagnostic reporting workflows built to accelerate treatment decisions and improve healthcare outcomes.",
  },
  {
    icon: Globe2,
    title: "Global Healthcare Access",
    description:
      "International specialist partnerships connecting patients to world-class healthcare expertise and second opinions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Clinical Delivery",
    description:
      "Operational systems designed for consistency, speed, and institutional-grade healthcare reliability.",
  },
  {
    icon: Building2,
    title: "Institutional Partnerships",
    description:
      "Structured collaboration with hospitals, HMOs, and corporate healthcare providers across Nigeria.",
  },
  {
    icon: Zap,
    title: "First-Mover Advantage",
    description:
      "Building advanced diagnostic infrastructure in underserved cities where demand already exists.",
  },
];

export default function WhyRadiomedSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* MAIN GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071A3D,#020617)]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* GLOW ORBS */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"
        />

        {/* PULSE LINE */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[25%] h-[1px] w-[40%] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-40"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* TOP */}
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <div>
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8 flex items-center gap-4"
            >
              <div className="h-[1px] w-14 bg-red-500" />

              <span className="text-sm uppercase tracking-[0.35em] text-red-400">
                Why Radio Medicine Technology Limited
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
              }}
              viewport={{ once: true }}
              className="text-5xl font-black text-white leading-[0.95] tracking-[-0.05em] md:text-7xl"
            >
              Built
              <span className="block text-red-500">
                Differently
              </span>
              For The Future Of Healthcare
            </motion.h2>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mt-10 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl"
            >
              Radio Medicine Technology Limited combines healthcare infrastructure,
              advanced diagnostics, sustainability, and operational
              reliability into one integrated platform designed for
              modern African healthcare delivery.
            </motion.p>

            {/* FLOATING STATEMENT */}
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
                duration: 1,
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="mt-16 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 backdrop-blur-2xl"
            >
              <div className="h-3 w-3 rounded-full bg-red-500" />

              <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
                Infrastructure • Diagnostics • Sustainability
              </p>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            {/* CENTRAL PANEL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
            >
              {/* INTERNAL GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.18),transparent_35%)]" />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-center justify-between border-b border-white/10 pb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Integrated Platform
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">
                      Healthcare Infrastructure
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-red-500/10 p-4">
                    <ArrowUpRight className="h-6 w-6 text-red-400" />
                  </div>
                </div>

                {/* CENTER */}
                <div className="mt-12 space-y-8">
                  {[
                    "Advanced Diagnostic Imaging",
                    "Clean Energy Infrastructure",
                    "Global Specialist Connectivity",
                    "Institutional Healthcare Partnerships",
                    "Reliable Clinical Operations",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="group flex items-center justify-between border-b border-white/5 pb-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-red-500 transition-all duration-300 group-hover:scale-150" />

                        <p className="text-lg text-slate-200">
                          {item}
                        </p>
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:text-red-400 group-hover:rotate-45" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FLOATING CARD 1 */}
            
            {/* FLOATING CARD 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute -bottom-10 right-0 hidden rounded-3xl bg-gradient-to-br from-red-500 to-red-700 p-8 shadow-[0_20px_80px_rgba(239,68,68,0.25)] lg:block"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                Infrastructure Advantage
              </p>

              <h4 className="mt-3 text-5xl font-black leading-none">
                100%
              </h4>

              <p className="mt-3 text-sm text-white/80">
                Solar Powered Healthcare
              </p>
            </motion.div>
          </div>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-32 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

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
                className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-red-500/20 hover:bg-white/[0.05]"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.15),transparent_40%)]" />

                <div className="relative z-10">
                  {/* ICON */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05]">
                    <Icon className="h-7 w-7 text-red-400" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {feature.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-5 leading-relaxed text-slate-400">
                    {feature.description}
                  </p>

                  {/* BOTTOM LINE */}
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
                    className="mt-8 h-[1px] bg-gradient-to-r from-red-500 to-transparent"
                  />
                </div>
              </motion.div>
            );
          })}
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
          className="mt-32 text-center"
        >
          <p className="mx-auto max-w-5xl text-3xl font-medium leading-relaxed tracking-tight text-slate-300 md:text-5xl"
          >
            Radio Medicine Technology Limited is not simply building
            <span className="text-red-500">
              {" "}diagnostic centers.
            </span>
            <br />
            We are building the future infrastructure of
            healthcare access across Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}