"use client";

import { motion } from "framer-motion";
import Service from "../components/home/property-option";
import {
  ArrowUpRight,
  Brain,
  ScanLine,
  Activity,
  Waves,
  Microscope,
  Globe2,
  ShieldCheck,
  Clock3,
  SunMedium,
} from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "CT Scan Imaging",
    description:
      "Advanced CT imaging solutions for neurological, trauma, cardiovascular, and emergency diagnostics with high-speed reporting.",
    image:
      "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Brain,
    title: "MRI Imaging",
    description:
      "High-resolution MRI diagnostics designed for precision imaging, specialist evaluations, and complex medical analysis.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Activity,
    title: "Digital X-Ray",
    description:
      "Fast and reliable radiographic imaging for hospitals, emergency care, orthopedic diagnostics, and preventive healthcare.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Waves,
    title: "Ultrasound & Sonography",
    description:
      "Modern ultrasound services supporting early diagnosis, pregnancy monitoring, and routine healthcare assessments.",
    image:
      "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Microscope,
    title: "Laboratory Diagnostics",
    description:
      "Comprehensive laboratory testing supported by advanced systems for accurate reporting and faster clinical decisions.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1600&auto=format&fit=crop",
  },
  {
    icon: Globe2,
    title: "Global Specialist Access",
    description:
      "Connecting patients and healthcare providers to international medical expertise and second-opinion consultations.",
    image:
      "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=1600&auto=format&fit=crop",
  },
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Reliable Healthcare Infrastructure",
  },
  {
    icon: Clock3,
    title: "Same-Day Diagnostic Reporting",
  },
  {
    icon: SunMedium,
    title: "100% Solar-Powered Operations",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] text-[#071A3D]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* MAIN GRADIENT */}
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
                  Advanced Diagnostic Services
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
                Precision
                <span className="block text-[#E50914]">
                  Diagnostics
                </span>
                For Modern Healthcare
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
            

              {/* ADVANTAGES */}
              <div className="mt-10 flex flex-wrap gap-4">
                {advantages.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
                    >
                      <Icon className="h-5 w-5 text-[#E50914]" />

                      <span className="text-sm text-black font-medium text-slate-700">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* IMAGE */}
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
            className="relative mt-24 overflow-hidden rounded-[40px]"
          >
            <img
              src="/images/hero/ctscan.webp"
              alt="RadioMed Diagnostics"
              className="h-[750px] w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/80 via-[#071A3D]/20 to-transparent" />

            {/* FLOATING PANEL */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-10 left-10 max-w-lg rounded-[32px] border border-white/10 bg-white/[0.08] p-8 backdrop-blur-2xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Diagnostic Infrastructure
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight text-white">
                Faster Diagnostics. Better Healthcare Outcomes.
              </h3>

              <p className="mt-5 leading-relaxed text-white/70">
                Designed around precision imaging, operational
                reliability, and accessible healthcare delivery for
                modern communities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
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
              World-Class
              <span className="text-[#E50914]">
                {" "}Diagnostic Services
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600"
            >
              Advanced healthcare solutions designed around speed,
              precision, sustainability, and modern diagnostic
              infrastructure.
            </motion.p>
          </div>

          {/* GRID */}
          <Service />

          
        </div>
      </section>
    </main>
  );
}