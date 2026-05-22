"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Activity,
  Globe2,
  ShieldCheck,
  SunMedium,
  Building2,
  Users2,
  Stethoscope,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

const values = [
  {
    icon: Activity,
    title: "Advanced Diagnostics",
    text: "Delivering modern imaging and diagnostic services designed around speed, precision, and improved healthcare outcomes.",
  },
  {
    icon: SunMedium,
    title: "Sustainable Infrastructure",
    text: "Building reliable healthcare systems powered by sustainable infrastructure for uninterrupted operations.",
  },
  {
    icon: Globe2,
    title: "Global Connectivity",
    text: "Connecting local healthcare delivery with international expertise and healthcare partnerships.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Access",
    text: "Improving access to high-quality diagnostics across underserved communities in Nigeria.",
  },
];

const expertise = [
  {
    icon: Building2,
    title: "Operational Infrastructure",
    text: "Radio Medicine Technology Limited combines healthcare operations, infrastructure planning, and technology-driven diagnostic delivery.",
  },
  {
    icon: Users2,
    title: "Leadership & Expertise",
    text: "Built by professionals with experience across healthcare operations, diagnostics, infrastructure, and business strategy.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Focus",
    text: "Focused on improving diagnostic speed, patient outcomes, and access to reliable healthcare systems.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Scalable Expansion",
    text: "Designed with a long-term infrastructure model capable of expanding across Nigeria and emerging markets.",
  },
];

const strategy = [
  "Establish flagship diagnostic hubs in key urban centers",
  "Expand into underserved healthcare regions across Nigeria",
  "Deploy scalable solar-powered healthcare infrastructure",
  "Integrate international specialist access and telemedicine",
  "Build long-term institutional healthcare partnerships",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] text-[#071A3D]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-40 md:pt-44">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* GRADIENT */}
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
          {/* TOP */}
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
                  About Radio Medicine Technology Limited
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
                  Next Diagnostic
                </span>
                Healthcare Network
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
                Radio Medicine Technology Limited is a healthcare infrastructure and
                diagnostic technology company focused on improving
                access to advanced imaging, laboratory
                diagnostics, and modern healthcare delivery across
                underserved communities in Nigeria.
                <br />
                <br />
                Through advanced diagnostics, sustainable
                infrastructure, operational expertise, and global
                healthcare connectivity, Radio Medicine Technology Limited is building a
                scalable healthcare network designed to deliver
                faster diagnosis, improved outcomes, and reliable
                access to quality healthcare.
              </p>

              {/* CTA */}
              <Link
                href="/services"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#071A3D]"
              >
                Explore Our Services

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A3D] text-white transition-all duration-300 group-hover:bg-[#E50914]">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* IMAGE SECTION */}
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
              src="/images/hero/mri.webp"
              alt="Radio Medicine Technology Limited Healthcare"
              className="h-[500px] w-full object-cover md:h-[700px]"
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
                Key Highlight
              </p>

              <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                Radio Medicine Technology Limited is building a scalable diagnostic
                healthcare network across Nigeria.
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                Delivering advanced imaging, laboratory
                diagnostics, and connected healthcare systems
                designed around accessibility, reliability, and
                long-term healthcare impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-12">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E50914]">
              Company Overview
            </p>

            <h2 className="mt-6 text-4xl font-black leading-[1] tracking-tight md:text-6xl">
              Solving The Diagnostic Healthcare Gap
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-lg leading-relaxed text-slate-600">
              Millions of people across Nigeria face delayed
              diagnosis, limited access to advanced imaging, and
              unreliable healthcare infrastructure.
              <br />
              <br />
              Radio Medicine Technology Limited exists to bridge this healthcare gap by
              building modern diagnostic centers supported by
              advanced imaging technology, laboratory systems,
              sustainable infrastructure, and globally connected
              healthcare expertise.
              <br />
              <br />
              The company is focused on creating scalable,
              technology-driven healthcare infrastructure capable
              of serving both urban and underserved communities
              efficiently and sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="relative bg-[#071A3D] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-12">
          {/* VISION */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Our Vision
            </p>

            <h3 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
              To become Africa’s leading connected diagnostic
              healthcare network.
            </h3>
          </div>

          {/* MISSION */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Our Mission
            </p>

            <h3 className="mt-6 text-3xl font-black leading-tight md:text-5xl">
              Delivering faster, more accessible, and reliable
              diagnostic healthcare infrastructure across Nigeria.
            </h3>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          {/* HEADER */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Built Around
              <span className="text-[#E50914]">
                {" "}Innovation,
              </span>
              Reliability & Access
            </h2>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2"
                >
                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)]" />

                  <div className="relative z-10">
                    {/* ICON */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
                      <Icon className="h-7 w-7 text-[#E50914]" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl text-black font-bold tracking-tight text-black">
                      {value.title}
                    </h3>

                    {/* TEXT */}
                    <p className="mt-5 leading-relaxed text-slate-600">
                      {value.text}
                    </p>

                    <div className="mt-8 h-[1px] bg-gradient-to-r from-[#E50914] to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="relative bg-[#F1F5F9] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          {/* HEADER */}
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E50914]">
              Leadership & Expertise
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              Operational Expertise Designed For Scale
            </h2>
          </div>

          {/* GRID */}
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] md:p-10"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
                    <Icon className="h-7 w-7 text-[#E50914]" />
                  </div>

                  <h3 className="mt-8 text-black text-3xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRACK RECORD + STRATEGY */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-12">
          {/* LEFT */}
          <div className="rounded-[36px] bg-[#071A3D] p-8 text-white md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Operational Track Record
            </p>

            <h2 className="mt-6 text-4xl text-white font-black leading-tight md:text-5xl">
              Existing Lagos Healthcare Operations
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/70">
              Radio Medicine Technology Limited's operational foundation is built on
              existing healthcare and diagnostic operational
              experience within Lagos, providing real-world
              understanding of healthcare infrastructure,
              diagnostic workflows, patient operations, and system
              scalability.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#E50914]">
              Long-Term Expansion Strategy
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Scalable National Expansion
            </h2>

            <div className="mt-10 space-y-5">
              {strategy.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl bg-[#F8FAFC] p-5"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#E50914]/10">
                    <ChevronRight className="h-4 w-4 text-[#E50914]" />
                  </div>

                  <p className="flex-1 leading-relaxed text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-6 lg:px-12">
          <p className="text-3xl font-medium leading-relaxed tracking-tight text-slate-700 md:text-5xl">
            Creating a future where
            <span className="text-[#E50914]">
              {" "}advanced healthcare diagnostics
            </span>
            are accessible, reliable, and closer to the people
            who need them most.
          </p>
        </div>
      </section>
    </main>
  );
}