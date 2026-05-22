"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Globe2,
  Building2,
} from "lucide-react";

const locations = [
  {
    city: "Abeokuta",
    status: "Launch Location",
    top: "18%",
    left: "32%",
  },
  {
    city: "Ota",
    status: "Expansion Hub",
    top: "38%",
    left: "52%",
  },
  {
    city: "Sagamu",
    status: "Growth Corridor",
    top: "58%",
    left: "42%",
  },
];

const stats = [
  {
    number: "15+",
    label: "Planned Facilities",
  },
  {
    number: "6",
    label: "Geopolitical Zones",
  },
  {
    number: "7M+",
    label: "Target Population Reach",
  },
];

export default function ExpansionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* MAIN GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_30%),linear-gradient(to_bottom,#020617,#071A3D,#020617)]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* GLOW ORBS */}
        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-red-500/10 blur-3xl md:h-[500px] md:w-[500px]"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-[-15%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl md:h-[500px] md:w-[500px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* TOP GRID */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

              <span className="text-xs uppercase tracking-[0.3em] text-red-400 sm:text-sm sm:tracking-[0.35em]">
                Expansion Vision
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
              className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl"
            >
              Building Nigeria’s
              <span className="block text-red-500">
                Next Healthcare
              </span>
              Infrastructure Network
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
              className="mt-8 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl"
            >
              Radio Medicine Technology Limited is developing a scalable diagnostic
              healthcare network designed to expand advanced
              imaging infrastructure across underserved cities in
              Nigeria — beginning with Ogun State and expanding
              nationwide through a repeatable healthcare
              infrastructure model.
            </motion.p>

            {/* CTA */}
            <motion.button
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
              className="group mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            >
              Explore Expansion Strategy

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 group-hover:bg-red-500 sm:h-12 sm:w-12">
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </motion.button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* MAP CONTAINER */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl sm:rounded-[30px] sm:p-8 lg:rounded-[40px] lg:p-10"
            >
              {/* INTERNAL GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.12),transparent_35%)]" />

              {/* HEADER */}
              <div className="relative z-10 flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between sm:pb-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:text-xs sm:tracking-[0.3em]">
                    Expansion Network
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                    Ogun State Rollout
                  </h3>
                </div>

                <div className="w-fit rounded-2xl bg-red-500/10 p-3 sm:p-4">
                  <Globe2 className="h-5 w-5 text-red-400 sm:h-6 sm:w-6" />
                </div>
              </div>

              {/* MAP AREA */}
              <div className="relative mt-10 h-[420px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#071A3D]/80 to-[#020617] sm:mt-12 sm:h-[500px] sm:rounded-[30px]">
                {/* GRID */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />

                {/* PULSE LINE */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M32 18 C45 30, 50 40, 52 38 C48 48, 45 55, 42 58"
                    stroke="url(#gradient)"
                    strokeWidth="0.4"
                    fill="none"
                    initial={{
                      pathLength: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    transition={{
                      duration: 2,
                    }}
                  />

                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* LOCATIONS */}
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.2,
                    }}
                    viewport={{ once: true }}
                    style={{
                      top: location.top,
                      left: location.left,
                    }}
                    className="absolute"
                  >
                    {/* PULSE */}
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/30 sm:h-16 sm:w-16"
                    />

                    {/* DOT */}
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)] sm:h-14 sm:w-14 sm:shadow-[0_0_40px_rgba(239,68,68,0.5)]">
                      <MapPin className="h-4 w-4 text-white sm:h-6 sm:w-6" />
                    </div>

                    {/* LABEL */}
                    <div className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap sm:left-20">
                      <p className="text-sm font-bold text-white sm:text-lg">
                        {location.city}
                      </p>

                      <p className="text-[11px] text-slate-400 sm:text-sm">
                        {location.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FLOATING CARD */}
              </motion.div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-6 md:mt-28 md:grid-cols-3">
          {stats.map((stat, index) => (
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
              className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-10"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.12),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-5xl font-black tracking-tight text-white md:text-6xl">
                  {stat.number}
                </h3>

                <p className="mt-4 text-base text-slate-400 md:text-lg">
                  {stat.label}
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
                  className="mt-8 h-[1px] bg-gradient-to-r from-red-500 to-transparent"
                />
              </div>
            </motion.div>
          ))}
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
          className="mt-24 text-center md:mt-32"
        >
          <p className="mx-auto max-w-5xl text-2xl font-medium leading-relaxed tracking-tight text-slate-300 sm:text-3xl md:text-5xl">
            Creating a connected network of
            <span className="text-red-500">
              {" "}advanced diagnostic infrastructure
            </span>
            designed to transform healthcare access across
            underserved communities in Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}