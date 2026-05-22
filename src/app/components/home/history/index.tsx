"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Leaf,
  Zap,
  ShieldCheck,
  Activity,
  ArrowUpRight,
} from "lucide-react";

const sustainabilityItems = [
  
  {
    icon: Zap,
    title: "Reliable Operations",
    description:
      "Advanced energy systems eliminate downtime and reduce dependence on unstable power infrastructure.",
  },
  {
    icon: Leaf,
    title: "Reduced Carbon Footprint",
    description:
      "Sustainable infrastructure designed to lower emissions while supporting modern healthcare delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Infrastructure",
    description:
      "Built for scalability, operational resilience, and future healthcare expansion across Nigeria.",
  },
];

export default function SustainabilitySection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-32 text-[#071A3D]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* SILVER GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(203,213,225,0.35),transparent_35%),linear-gradient(to_bottom,#F8FAFC,#EEF2F7,#F8FAFC)]" />

        {/* GREEN GLOW */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-3xl"
        />

        {/* CYAN GLOW */}
        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl"
        />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* NOISE */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* TOP */}
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
              <div className="h-[1px] w-14 bg-emerald-500" />

              <span className="text-sm uppercase tracking-[0.35em] text-emerald-600">
                Sustainability / ESG
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
              className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl"
            >
              Sustainable
              <span className="block text-emerald-500">
                Infrastructure
              </span>
              For Modern Healthcare
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
              className="mt-10 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              Radio Medicine Technology Limited integrates clean energy systems, reliable
              infrastructure, and advanced healthcare technology to
              create a more resilient and sustainable future for
              diagnostic healthcare delivery across Nigeria.
            </motion.p>

            {/* MINI METRICS */}
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
              className="mt-14 flex flex-wrap gap-4"
            >
              {[
               
                "Zero Diesel Dependency",
                "Reliable Operations",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_10px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
  {/* MAIN PANEL */}
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
    className="relative overflow-hidden rounded-[28px] bg-white/70 p-5 shadow-[0_30px_120px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:rounded-[40px] md:p-10"
  >
    {/* INTERNAL GLOW */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_35%)]" />

    {/* CONTENT */}
    <div className="relative z-10">
      {/* TOP */}
      <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between md:pb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400 md:text-xs">
            Clean Energy Infrastructure
          </p>

          <h3 className="mt-3 text-2xl text-black font-bold leading-tight md:text-3xl">
            Reliable Healthcare Systems
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 md:h-auto md:w-auto md:p-4">
          <Sun className="h-6 w-6 text-emerald-600" />
        </div>
      </div>

      {/* CENTER VISUAL */}
      <div className="relative mt-12 flex flex-col items-center md:mt-16">
        {/* VISUAL AREA */}
        <div className="relative flex h-[280px] w-full items-center justify-center md:h-[420px]">
          {/* OUTER RINGS */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute h-[220px] w-[220px] rounded-full border border-emerald-200 md:h-[340px] md:w-[340px]"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute h-[170px] w-[170px] rounded-full border border-cyan-200 md:h-[260px] md:w-[260px]"
          />

          {/* CENTER CORE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-[0_20px_80px_rgba(16,185,129,0.25)] md:h-40 md:w-40"
          >
            <Activity className="h-10 w-10 text-white md:h-16 md:w-16" />
          </motion.div>

          {/* DESKTOP FLOATING CARD 1 */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute left-0 top-10 hidden rounded-3xl bg-white px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Infrastructure
            </p>

            <h4 className="mt-2 text-3xl font-black text-[#071A3D]">
              100%
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Solar Powered
            </p>
          </motion.div>

          {/* DESKTOP FLOATING CARD 2 */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-0 right-0 hidden rounded-3xl bg-[#071A3D] px-7 py-6 text-white shadow-[0_20px_80px_rgba(7,26,61,0.15)] md:block"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">
              Operations
            </p>

            <h4 className="mt-2 text-4xl font-black text-white">
              24/7
            </h4>

            <p className="mt-1 text-sm text-white/70">
              Reliable Healthcare Delivery
            </p>
          </motion.div>
        </div>

        {/* MOBILE METRICS */}
        <div className="mt-8 grid w-full gap-4 md:hidden">
          {/* MOBILE CARD 1 */}
          <div className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400">
              Infrastructure
            </p>

            <h4 className="mt-2 text-3xl font-black text-[#071A3D]">
              100%
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Solar Powered
            </p>
          </div>

          {/* MOBILE CARD 2 */}
          <div className="rounded-3xl bg-[#071A3D] p-5 text-white shadow-[0_20px_80px_rgba(7,26,61,0.12)]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
              Operations
            </p>

            <h4 className="mt-2 text-3xl font-black text-white">
              24/7
            </h4>

            <p className="mt-1 text-sm text-white/70">
              Reliable Healthcare Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</div>
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-32 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sustainabilityItems.map((item, index) => {
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
                className="group relative overflow-hidden rounded-[32px] bg-white/70 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_40%)]" />

                <div className="relative z-10">
                  {/* ICON */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                    <Icon className="h-7 w-7 text-emerald-600" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl text-black font-bold tracking-tight">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-5 leading-relaxed text-slate-600">
                    {item.description}
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
                    className="mt-8 h-[1px] bg-gradient-to-r from-emerald-500 to-transparent"
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
          <p className="mx-auto max-w-5xl text-3xl font-medium leading-relaxed tracking-tight text-slate-700 md:text-5xl">
            Building healthcare infrastructure that is
            <span className="text-emerald-500">
              {" "}sustainable,
            </span>
            reliable, and designed for the future of
            diagnostic care across Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
}