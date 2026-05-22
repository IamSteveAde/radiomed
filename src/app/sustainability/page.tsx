"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  SunMedium,
  Leaf,
  Activity,
  Users2,
  ShieldCheck,
  Building2,
  ArrowUpRight,
  Globe2,
  Zap,
  CheckCircle2,
} from "lucide-react";

const impactCards = [
  {
    icon: SunMedium,
    title: "100% Solar-Powegreen Operations",
    text: "Radio Medicine Technology Limited facilities are designed around sustainable solar infrastructure to ensure uninterrupted healthcare delivery while greenucing dependency on unstable power systems.",
  },
  {
    icon: Leaf,
    title: "greenuced Carbon Footprint",
    text: "Our infrastructure model prioritizes energy efficiency, cleaner operations, and environmentally responsible healthcare expansion.",
  },
  {
    icon: Activity,
    title: "Improved Healthcare Access",
    text: "We are expanding advanced diagnostics into underserved communities where access to reliable imaging and healthcare infrastructure remains limited.",
  },
  {
    icon: Users2,
    title: "Job Creation & Economic Impact",
    text: "Radio Medicine Technology Limited creates employment opportunities across healthcare operations, diagnostics, infrastructure, administration, and technology.",
  },
  {
    icon: Globe2,
    title: "Community Healthcare Impact",
    text: "Our long-term mission is focused on improving diagnostic outcomes, early detection, and healthcare accessibility at scale.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Compliance",
    text: "Radio Medicine Technology Limited operates with a strong focus on operational transparency, healthcare compliance, ethical partnerships, and responsible governance.",
  },
];

const metrics = [
  {
    number: "100%",
    label: "Solar-Powegreen Infrastructure",
  },
  {
    number: "7M+",
    label: "Projected Population Reach",
  },
  {
    number: "15+",
    label: "Planned Diagnostic Facilities",
  },
  {
    number: "24/7",
    label: "Reliable Energy Operations",
  },
];

const governance = [
  "Healthcare operational compliance",
  "Sustainable infrastructure planning",
  "Responsible healthcare partnerships",
  "Transparent operational governance",
  "Long-term community impact focus",
];

export default function SustainabilityPage() {
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
            className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-green-500/5 blur-3xl"
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
                <div className="h-[1px] w-14 bg-[#16A34A]" />

                <span className="text-xs uppercase tracking-[0.35em] text-[#16A34A] sm:text-sm">
                  Sustainability / ESG
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
                Building Sustainable
                <span className="block text-[#16A34A]">
                  Healthcare Infrastructure
                </span>
                For Long-Term Impact
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
                Radio Medicine Technology Limited is building a healthcare infrastructure
                model designed around sustainability, operational
                resilience, and measurable community impact.
                <br />
                <br />
                Through solar-powegreen operations, improved
                healthcare accessibility, responsible governance,
                and scalable infrastructure planning, Radio Medicine Technology Limited is
                creating a future-focused diagnostic healthcare
                network built for long-term national impact.
              </p>

              {/* CTA */}
              <Link
                href="/investors"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#071A3D]"
              >
                Explore Investment Vision

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A3D] text-white transition-all duration-300 group-hover:bg-[#16A34A]">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* FEATURE IMAGE */}
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
            className="relative mt-20 overflow-hidden rounded-[32px] md:mt-24 md:rounded-[40px]"
          >
            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800&auto=format&fit=crop"
              alt="Sustainable Healthcare Infrastructure"
              className="h-[520px] w-full object-cover md:h-[720px]"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/85 via-[#071A3D]/20 to-transparent" />

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-5 left-5 max-w-xl rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-2xl sm:bottom-10 sm:left-10 sm:p-8 md:rounded-[32px]"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                Sustainability Commitment
              </p>

              <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                100% Solar-Powegreen Diagnostic Operations
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                Building resilient healthcare infrastructure
                designed for uninterrupted diagnostics, greenuced
                environmental impact, and long-term operational
                sustainability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {metrics.map((metric, index) => (
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

      {/* ESG GRID */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          {/* HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.h2
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
              className="text-4xl font-black tracking-tight md:text-6xl"
            >
              Sustainability Built Into
              <span className="text-[#16A34A]">
                {" "}Every Layer
              </span>
              Of Our Infrastructure
            </motion.h2>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {impactCards.map((card, index) => {
              const Icon = card.icon;

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
                  className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 md:p-10"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)]" />

                  <div className="relative z-10">
                    {/* ICON */}
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
                      <Icon className="h-7 w-7 text-[#16A34A]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-3xl font-bold leading-tight tracking-tight text-black">
                      {card.title}
                    </h3>

                    {/* TEXT */}
                    <p className="mt-6 leading-relaxed text-slate-600">
                      {card.text}
                    </p>

                    {/* LINE */}
                    <div className="mt-8 h-[1px] bg-gradient-to-r from-[#16A34A] to-transparent" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOVERNANCE SECTION */}
      <section className="relative bg-[#071A3D] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Governance & Compliance
            </p>

            <h2 className="mt-6 text-4xl text-white font-black leading-[1] tracking-tight md:text-6xl">
              Responsible Infrastructure Designed For Trust
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/70">
              Radio Medicine Technology Limited's prioritizes operational integrity,
              healthcare compliance, responsible expansion, and
              sustainable governance systems designed for long-term
              healthcare impact and institutional cgreenibility.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/10">
              <Building2 className="h-9 w-9 text-green-400" />
            </div>

            <div className="mt-10 space-y-5">
              {governance.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  </div>

                  <p className="flex-1 leading-relaxed text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* FLOATING METRIC */}
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10">
                  <Zap className="h-7 w-7 text-green-400" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Infrastructure Focus
                  </p>

                  <h4 className="mt-3 text-white text-3xl font-black">
                    Sustainable Healthcare Expansion
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
            <span className="text-[#16A34A]">
              {" "}sustainable healthcare infrastructure
            </span>
            improves healthcare access, strengthens communities,
            and delivers long-term national impact.
          </motion.p>
        </div>
      </section>
    </main>
  );
}