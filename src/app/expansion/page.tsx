"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin,
  Globe2,
  Building2,
  Activity,
  Radar,
  ChevronRight,
  Network,
} from "lucide-react";

const rolloutLocations = [
  {
    city: "Abeokuta",
    status: "Primary Diagnostic Hub",
    top: "18%",
    left: "32%",
  },
  {
    city: "Ota",
    status: "Industrial Healthcare Corridor",
    top: "42%",
    left: "55%",
  },
  {
    city: "Sagamu",
    status: "Regional Expansion",
    top: "65%",
    left: "40%",
  },
];

const futureExpansion = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Enugu",
];

const visionMetrics = [
  {
    number: "15+",
    label: "Planned Diagnostic Facilities",
  },
  {
    number: "7M+",
    label: "Projected Population Reach",
  },
  {
    number: "36 States",
    label: "Long-Term Expansion Vision",
  },
  {
    number: "24/7",
    label: "Operational Infrastructure",
  },
];

const strategy = [
  "Scalable healthcare infrastructure deployment",
  "Regional diagnostic expansion hubs",
  "Technology-driven healthcare operations",
  "Integrated telemedicine and specialist access",
  "Solar-powered healthcare infrastructure",
];

export default function ExpansionVisionPage() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] text-[#071A3D]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 md:pt-44">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* MAIN GRADIENT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%),linear-gradient(to_bottom,#FFFFFF,#F5F7FA,#FFFFFF)]" />

          {/* GRID */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* GLOWS */}
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
            className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-12 md:pb-32">
          {/* HERO GRID */}
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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

                <span className="text-xs uppercase tracking-[0.35em] text-[#E50914] sm:text-sm">
                  Expansion Vision
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
                className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl"
              >
                Building Nigeria’s
                <span className="block text-[#E50914]">
                  Next Healthcare
                </span>
                Infrastructure Network
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
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                RadioMed’s long-term vision is centered around
                building a scalable network of diagnostic
                healthcare infrastructure across Nigeria —
                beginning with Ogun State and expanding into major
                healthcare growth corridors nationwide.
                <br />
                <br />
                Through advanced diagnostics, sustainable
                infrastructure, and operational scalability,
                RadioMed is creating a connected healthcare network
                designed for long-term national impact.
              </p>

              {/* CTA */}
              <Link
                href="/investors"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#071A3D]"
              >
                Explore Growth Strategy

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A3D] text-white transition-all duration-300 group-hover:bg-[#E50914]">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ROADMAP */}
          <div className="relative mt-20 md:mt-28">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071A3D] p-6 text-white shadow-[0_30px_120px_rgba(7,26,61,0.15)] md:rounded-[48px] md:p-10"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.18),transparent_35%)]" />

              {/* TOP */}
              <div className="relative z-10 flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Expansion Roadmap
                  </p>

                  <h3 className="mt-3 text-3xl font-black md:text-5xl">
                    Ogun State Rollout
                  </h3>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                  <Globe2 className="h-7 w-7 text-red-400" />
                </div>
              </div>

              {/* MAP */}
              <div className="relative mt-10 h-[500px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0F172A] to-[#020617] md:h-[700px] md:rounded-[36px]">
                {/* GRID */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* MAP IMAGE */}
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1800&auto=format&fit=crop"
                  alt="Expansion Map"
                  className="absolute inset-0 h-full w-full object-cover opacity-10"
                />

                {/* CONNECTING LINES */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* MAIN PATH */}
                  <motion.path
                    d="M32 18 C42 28, 48 35, 55 42 C48 52, 42 60, 40 65"
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
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

                  {/* FUTURE NETWORK */}
                  <motion.path
                    d="M55 42 C70 30, 78 25, 88 18"
                    stroke="url(#gradient2)"
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
                      delay: 0.4,
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

                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#06B6D4" />

                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* LOCATIONS */}
                {rolloutLocations.map((location, index) => (
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
                      className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/30"
                    />

                    {/* DOT */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-500 shadow-[0_0_40px_rgba(239,68,68,0.5)]">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>

                    {/* LABEL */}
                    <div className="absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap">
                      <p className="text-lg font-bold text-white">
                        {location.city}
                      </p>

                      <p className="text-sm text-slate-400">
                        {location.status}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* FUTURE EXPANSION */}
                <div className="absolute bottom-6 right-6 max-w-sm rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl md:bottom-10 md:right-10 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                      <Radar className="h-7 w-7 text-red-400" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Future Expansion
                      </p>

                      <h4 className="mt-3 text-2xl font-black text-white">
                        National Rollout
                      </h4>
                    </div>
                  </div>

                  {/* CITIES */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {futureExpansion.map((city, index) => (
                      <div
                        key={index}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/80"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {visionMetrics.map((metric, index) => (
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
              className="relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)]"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)]" />

              <div className="relative z-10">
                <h3 className="text-5xl font-black tracking-tight text-[#071A3D] md:text-6xl">
                  {metric.number}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {metric.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STRATEGY */}
      <section className="relative bg-[#071A3D] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
              Long-Term Strategy
            </p>

            <h2 className="mt-6 text-4xl text-white font-black leading-[1] tracking-tight md:text-6xl">
              Infrastructure Designed To Scale Nationally
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/70">
              RadioMed’s infrastructure model is designed around
              operational scalability, sustainable healthcare
              systems, and connected diagnostic networks capable
              of supporting long-term healthcare expansion across
              Nigeria.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10">
              <Network className="h-9 w-9 text-red-400" />
            </div>

            <div className="mt-10 space-y-5">
              {strategy.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10">
                    <ChevronRight className="h-4 w-4 text-red-400" />
                  </div>

                  <p className="flex-1 leading-relaxed text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* FLOATING CARD */}
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <Building2 className="h-7 w-7 text-red-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Infrastructure Vision
                  </p>

                  <h4 className="mt-3 text-3xl font-black text-white">
                    Connected National Network
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="relative pb-24 pt-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-12">
          <motion.p
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
            className="text-3xl font-medium leading-relaxed tracking-tight text-slate-700 md:text-5xl"
          >
            Creating a future where
            <span className="text-[#E50914]">
              {" "}advanced diagnostic healthcare
            </span>
            becomes more accessible, scalable, and connected
            across every major healthcare corridor in Nigeria.
          </motion.p>
        </div>
      </section>
    </main>
  );
}