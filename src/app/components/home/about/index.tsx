"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Zap,
  Activity,
} from "lucide-react";

export default function HealthcareGapSection() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-32 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(7,26,61,0.8),transparent_45%)]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* TOP */}
        <div className="grid gap-20 lg:grid-cols-[1.1fr_0.9fr]">
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
              <div className="h-[1px] w-16 bg-red-500" />

              <span className="text-sm uppercase tracking-[0.35em] text-red-400">
              ABOUT RADIOMED TECHNOLOGY
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="max-w-4xl text-white text-5xl font-black leading-[1] tracking-[-0.04em] md:text-4xl"
            >
              First Advanced
              <span className="block text-red-500">
                Diagnostic Platform
              </span>
              in Key Undeserved Cities
            </motion.h2>

            {/* TEXT */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mt-10 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-lg"
            >
              Across many Nigerian cities, patients still travel long
              distances for critical CT and MRI diagnostics,
              delaying treatment, increasing costs, and worsening
              healthcare outcomes.
              <br />
              <br />
              RadioMed is building modern diagnostic infrastructure
              designed to close this gap through advanced imaging,
              clean energy systems, and globally connected healthcare
              delivery.
            </motion.p>

            {/* CTA */}
            
<Link href="/about">
  <motion.button
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.9,
      delay: 0.2,
    }}
    viewport={{ once: true }}
    className="group mt-12 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
  >
    Discover The Vision

    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 group-hover:bg-red-500">
      <ArrowUpRight className="h-4 w-4" />
    </span>
  </motion.button>
</Link>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glass Panel */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              {/* Internal Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.2),transparent_35%)]" />

              {/* Content */}
              <div className="relative z-10">
                {/* Small Top */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                      Infrastructure Gap
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      The Healthcare Reality
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-red-500/10 p-4">
                    <Activity className="h-6 w-6 text-red-400" />
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-10 space-y-8">
                  {[
                    {
                      number: "7M+",
                      label: "Population Across Ogun State",
                    },
                    {
                      number: "0",
                      label: "Functional MRI Facilities In Key Areas",
                    },
                    {
                      number: "100KM+",
                      label: "Travel Distance For Diagnostics",
                    },
                    {
                      number: "15",
                      label: "Planned Diagnostic Facilities",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-end justify-between border-b border-white/5 pb-5"
                    >
                      <h4 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                        {item.number}
                      </h4>

                      <p className="max-w-[180px] text-right text-sm leading-relaxed text-slate-400">
                        {item.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Card */}
        
          </motion.div>
        </div>

        {/* BOTTOM TRUST GRID */}
        <div className="mt-28 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Reliable Infrastructure",
              text: "Advanced diagnostic systems designed for uninterrupted healthcare delivery.",
            },
            {
              icon: Zap,
              title: "100% Solar Powered",
              text: "Clean energy infrastructure eliminating diesel dependency and downtime.",
            },
            {
              icon: Globe2,
              title: "Global Healthcare Access",
              text: "International specialist connectivity through modern healthcare partnerships.",
            },
            {
              icon: Activity,
              title: "Faster Diagnosis",
              text: "Reducing delays in diagnosis through accessible advanced imaging services.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:border-red-500/20 hover:bg-white/[0.05]"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.15),transparent_40%)]" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                    <Icon className="h-6 w-6 text-red-400" />
                  </div>

                  <h3 className="text-xl text-white font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}