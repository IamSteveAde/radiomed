"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import {
  Brain,
  ScanLine,
  Activity,
  Microscope,
  Waves,
  Globe2,
  ArrowUpRight,
  X,
  Clock3,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: ScanLine,
    title: "CT Scan Imaging",
    description:
      "Advanced CT imaging for neurological, trauma, cardiovascular, and emergency diagnostics with fast turnaround reporting.",

    image:
      "images/hero/ctscan.webp",

    what:
      "CT Scan Imaging uses advanced computed tomography technology to create highly detailed internal body images for accurate diagnosis.",

    why:
      "Fast imaging is critical for stroke diagnosis, trauma care, emergency medicine, and early disease detection.",

    benefits: [
      "Faster diagnosis and treatment",
      "Improved imaging precision",
      "Early detection of medical conditions",
      "Reduced diagnostic delays",
    ],

    turnaround:
      "Same-day scan interpretation and rapid reporting for urgent medical cases.",

    equipment:
      "Modern high-resolution CT imaging systems built for speed, precision, and patient comfort.",
  },

  {
    icon: Brain,
    title: "MRI Imaging",
    description:
      "High-precision MRI diagnostics delivering detailed imaging for complex medical conditions and specialist evaluations.",

    image:
      "/images/hero/mri.webp",

    what:
      "MRI Imaging uses magnetic resonance technology to produce highly detailed images of organs, tissues, joints, and the brain.",

    why:
      "MRI scans are essential for neurological, spinal, musculoskeletal, and cancer-related diagnostics.",

    benefits: [
      "Detailed soft tissue imaging",
      "Accurate neurological assessment",
      "Non-invasive diagnostics",
      "Radiation-free imaging",
    ],

    turnaround:
      "Fast appointment scheduling and efficient imaging interpretation.",

    equipment:
      "Advanced MRI systems delivering clearer imaging and enhanced patient care.",
  },

  {
    icon: Activity,
    title: "Digital X-Ray",
    description:
      "Reliable radiographic imaging designed for hospitals, emergency care, and routine diagnostics.",

    image:
      "/images/hero/digxray.webp",

    what:
      "Digital X-Ray imaging provides fast radiographic scans for bones, lungs, and internal medical evaluations.",

    why:
      "X-Ray remains one of the most important tools for emergency and routine healthcare diagnostics.",

    benefits: [
      "Fast imaging process",
      "Low radiation exposure",
      "Accurate digital imaging",
      "Efficient emergency support",
    ],

    turnaround:
      "Rapid imaging and same-day diagnostic support.",

    equipment:
      "Modern digital radiography systems optimized for speed and reliability.",
  },

  {
    icon: Waves,
    title: "Ultrasound",
    description:
      "Modern ultrasound services supporting early detection, pregnancy monitoring, and preventive healthcare.",

    image:
      "/images/hero/ultrasound.webp",

    what:
      "Ultrasound imaging uses sound wave technology to monitor internal organs, pregnancies, and soft tissues safely.",

    why:
      "Ultrasound supports preventive healthcare, pregnancy care, and real-time diagnostic evaluations.",

    benefits: [
      "Safe non-invasive imaging",
      "Pregnancy monitoring",
      "Real-time diagnostics",
      "Early condition detection",
    ],

    turnaround:
      "Efficient scanning with fast medical reporting.",

    equipment:
      "High-definition ultrasound systems delivering precise and reliable imaging.",
  },

  {
    icon: Microscope,
    title: "Laboratory Diagnostics",
    description:
      "Comprehensive laboratory testing with accurate results, modern systems, and faster reporting.",

    image:
      "/images/hero/laboratory.webp",

    what:
      "Laboratory Diagnostics includes blood testing, pathology, microbiology, and chemistry services.",

    why:
      "Accurate testing is critical for early disease detection and effective treatment planning.",

    benefits: [
      "Accurate medical testing",
      "Faster disease detection",
      "Reliable results",
      "Improved treatment planning",
    ],

    turnaround:
      "Fast sample processing and rapid reporting timelines.",

    equipment:
      "Automated laboratory systems ensuring precision and efficiency.",
  },

  {
    icon: Globe2,
    title: "Telemedicine & International Specialist Access",
    description:
      "International healthcare partnerships connecting patients to world-class specialist expertise and second opinions.",

    image:
      "/images/hero/tele.webp",

    what:
      "Global Specialist Access connects patients to international healthcare experts and advanced second-opinion services.",

    why:
      "Complex medical cases often require access to global expertise and specialist guidance.",

    benefits: [
      "Access to global specialists",
      "Second medical opinions",
      "Advanced treatment guidance",
      "Improved patient confidence",
    ],

    turnaround:
      "Seamless consultation coordination and efficient communication.",

    equipment:
      "Technology-enabled telemedicine and secure healthcare systems.",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F7FA] py-32 text-[#071A3D]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white blur-3xl" />

          <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#E5EAF2] blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          {/* HEADER */}
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 flex items-center gap-4"
              >
                <div className="h-[1px] w-14 bg-[#E50914]" />

                <span className="text-sm uppercase tracking-[0.35em] text-[#E50914]">
                  Diagnostic Services
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-black md:text-7xl"
              >
                Precision
                <span className="block text-[#E50914]">
                  Diagnostics
                </span>
                For Modern Healthcare
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Radio Medicine Technology Limited combines advanced medical imaging,
                laboratory diagnostics, and globally connected
                healthcare systems to deliver faster diagnosis,
                improved outcomes, and reliable patient care.
              </p>
            </motion.div>
          </div>

          {/* SERVICES */}
          <div className="mt-28 grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
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
                  onClick={() => setSelectedService(service)}
                  className="group relative cursor-pointer overflow-hidden rounded-[40px] bg-white shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition-all duration-700 hover:-translate-y-2"
                >
                  <div className="relative h-[340px] overflow-hidden">
                    <motion.img
                      whileHover={{
                        scale: 1.05,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/70 via-[#071A3D]/10 to-transparent" />

                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl">
                      <Icon className="h-7 w-7 text-[#E50914]" />
                    </div>
                  </div>

                  <div className="relative p-10">
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-500/5 blur-3xl transition-all duration-700 group-hover:bg-red-500/10" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="text-3xl font-bold tracking-tight text-black">
                          {service.title}
                        </h3>

                        <motion.div
                          whileHover={{
                            rotate: 45,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F7FA]"
                        >
                          <ArrowUpRight className="h-5 w-5 text-[#071A3D]" />
                        </motion.div>
                      </div>

                      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                        {service.description}
                      </p>

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: "100%",
                        }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="mt-8 h-[1px] bg-gradient-to-r from-[#E50914] to-transparent"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
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
            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-slate-700 md:text-4xl">
              Built to deliver faster diagnosis,
              <span className="text-[#E50914]">
                {" "}better healthcare outcomes,
              </span>{" "}
              and world-class diagnostic access across underserved
              communities.
            </p>

            
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-md"
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
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[40px] bg-white shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-[#071A3D]/20 to-transparent" />

                {/* CLOSE */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                {/* TITLE */}
                <div className="absolute bottom-10 left-10">
                  <h2 className="text-5xl font-bold tracking-tight text-white">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* CONTENT */}
              <div className="grid gap-12 p-10 md:grid-cols-2 md:p-14">
                <div className="space-y-8">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <Stethoscope className="h-5 w-5 text-[#E50914]" />

                      <h4 className="text-xl font-semibold text-[#071A3D]">
                        What It Is
                      </h4>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {selectedService.what}
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <ShieldCheck className="h-5 w-5 text-[#E50914]" />

                      <h4 className="text-xl font-semibold text-[#071A3D]">
                        Why It Matters
                      </h4>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {selectedService.why}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <Activity className="h-5 w-5 text-[#E50914]" />

                      <h4 className="text-xl font-semibold text-[#071A3D]">
                        Benefits To Patients
                      </h4>
                    </div>

                    <ul className="space-y-3">
                      {selectedService.benefits.map(
                        (item: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-600"
                          >
                            <div className="mt-2 h-2 w-2 rounded-full bg-[#E50914]" />

                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <Clock3 className="h-5 w-5 text-[#E50914]" />

                      <h4 className="text-xl font-semibold text-[#071A3D]">
                        Fast Turnaround Times
                      </h4>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {selectedService.turnaround}
                    </p>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <Microscope className="h-5 w-5 text-[#E50914]" />

                      <h4 className="text-xl font-semibold text-[#071A3D]">
                        Modern Equipment
                      </h4>
                    </div>

                    <p className="leading-relaxed text-slate-600">
                      {selectedService.equipment}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}