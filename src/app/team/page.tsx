"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ShieldCheck,
  Compass,
  Users2,
  Plus,
  X,
  Radio,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  UTILITIES                                                          */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function initialsFromName(name: string) {
  const words = name.replace(/,/g, "").split(" ").filter(Boolean);
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

type Person = {
  id: string;
  name: string;
  credentials?: string;
  title: string;
  photo?: string;
  bio: string[];
};

const boardOfDirectors: Person[] = [
  {
    id: "tosin-majekodunmi",
    name: "Dr Tosin Majekodunmi",
    title: "Chairman",
    photo: "/images/team/tosin-majekodunmi.jpg",
    bio: [
      "Dr Majekodunmi completed his medical and surgical internship in London and Basingstoke before returning to London to complete his residency in internal medicine, achieving membership of the Royal College of Physicians in 2006. He went on to secure 1 of 5 nationally recognised UK training positions in adult congenital heart disease, training at Royal Brompton, Guys and St. Thomas', and Great Ormond Street Hospital before an interventional fellowship at Toronto General Hospital, completed in 2013.",
      "He is fully trained in minimally invasive structural and valvular heart disease interventions, and has pioneered several innovations in interventional cardiology in Nigeria, including trans-catheter aortic valve implantation and device closure of patent foramen ovale.",
      "He has served as Medical Director of Euracare Multi-Specialist Hospital since its inception in 2016, growing it into one of Nigeria's premier healthcare facilities. Following its acquisition by Iwosan Investment Group in March 2025, he was elevated to interim CEO in addition to his role as medical director.",
    ],
  },
  {
    id: "rotimi-babalola",
    name: "Dr. Rotimi Babalola",
    credentials: "MBBS, MPH",
    title: "Director",
    photo: "/images/team/rotimi-babalola.jpg",
    bio: [
      "Dr. Babalola is an accomplished physician, cardiologist, and healthcare executive with extensive experience in clinical medicine, occupational health, and corporate healthcare management, built within Nigeria's oil and gas sector.",
      "He previously served as Chief Medical Director of Chevron Nigeria Limited, leading strategic planning, administration, and delivery of comprehensive medical services for employees, contractors, and host communities. He holds an MPH from the University of Liverpool.",
    ],
  },
  {
    id: "amina-baloni",
    name: "Dr. Amina Mohammed Baloni",
    credentials: "MBBS, FWACP, MPH",
    title: "Director",
    photo: "/images/team/amina-baloni.jpg",
    bio: [
      "A Nigerian physician and public health leader with over 25 years of experience spanning clinical medicine, health policy, and health systems governance. She trained at Ahmadu Bello University Teaching Hospital, Kaduna, with executive credentials from Harvard Kennedy School, INSEAD, and the London School of Hygiene and Tropical Medicine.",
      "She served as Commissioner for Health in Kaduna State (2019–2023), leading the state's COVID-19 response and a drone-based medical supply partnership with Zipline. She currently chairs the Board of Bauchi State Specialist Hospital and serves as an Independent Non-Executive Director of Fidson Healthcare Plc.",
    ],
  },
  {
    id: "olukayode-fabunmi",
    name: "Dr. Olukayode B.A. Fabunmi",
    credentials: "LL.B (Hons), LL.M",
    title: "Director",
    photo: "/images/team/olukayode-fabunmi.jpg",
    bio: [
      "A distinguished legal practitioner and infrastructure expert with over two decades of experience in international business law, project finance, and Public-Private Partnerships. As Managing Partner of J.O. Fabunmi & Co., he advises governments, development institutions, and investors on complex infrastructure and project finance transactions.",
      "He has advised the Federal Government of Nigeria on PPP governance frameworks and is Director of the Business Law Academy, regularly publishing on infrastructure policy in The Guardian Nigeria and BusinessDay.",
    ],
  },
  {
    id: "uju-ofomata-aderemi",
    name: "Uju Ofomata-Aderemi",
    title: "Director",
    photo: "/images/team/uju-ofomata-aderemi.jpg",
    bio: [
      "An accomplished international development executive with over 20 years of experience leading global programmes, strategic partnerships, and portfolio management across Africa and Asia. She currently leads Save the Children UK's international programme partnerships, fundraising, and risk functions.",
      "Prior roles include Director of Programme Management at CARE International UK and Global Programme Director at OneWorld UK. She holds a Bachelor of Pharmacy, an MPH, and an MBA in Public Administration.",
    ],
  },
  {
    id: "abdulakeem-balogun-board",
    name: "Abdulakeem Balogun",
    title: "Director",
    photo: "/images/team/abdulakeem-balogun.jpg",
    bio: [
      "An accomplished investment and corporate finance professional with over 12 years of experience spanning project finance, investment banking, capital markets, and strategic business development across healthcare, infrastructure, and renewable energy.",
      "A member of the Association of Chartered Certified Accountants, he holds an MBA in Finance and Investment from Ahmadu Bello University. He previously held investment banking and corporate finance roles at Greenwich Capital Limited and Woodhall Capital.",
    ],
  },
];

const advisoryBoard: Person[] = [
  {
    id: "bola-jones",
    name: "Dr. Bola Jones",
    title: "Advisory Board",
    bio: [
      "A globally accomplished pharmaceutical executive and global health leader with over 25 years of international experience spanning pharmaceutical strategy, medical affairs, operations, and stakeholder engagement across Europe, North America, and Africa.",
      "Currently serving as Senior Advisor at Sygen Pharmaceutical and Anadach Consulting, he provides strategic leadership on pharmaceutical manufacturing and health systems strengthening across West Africa, including an IFC-backed pharmaceutical value chain project.",
    ],
  },
  {
    id: "imran-farid",
    name: "Imran Farid",
    title: "Advisory Board",
    photo: "/images/team/imran-farid.jpg",
    bio: [
      "An accomplished global healthcare executive with more than two decades of leadership experience across pharmaceutical, medical technology, diagnostics, and healthcare services. He specialises in value-based healthcare, strategic partnerships, and healthcare transformation.",
      "Currently in a senior leadership role at Alliance Medical Group, Imran drives strategic partnerships and international growth across the UK, Europe, and the Middle East, following seven years at GE HealthCare leading international enterprise partnerships.",
    ],
  },
];

const management: Person[] = [
  {
    id: "rotimi-babalola-mgmt",
    name: "Dr. Rotimi Babalola",
    credentials: "MBBS, MPH",
    title: "Chief Medical Director",
    photo: "/images/team/rotimi-babalola.jpg",
    bio: [
      "A trained cardiologist, Dr. Babalola combines specialist clinical expertise with a strong focus on preventive medicine, executive wellness, and cardiovascular health management in corporate environments.",
      "Throughout his career he has championed initiatives that improve occupational health systems and strengthen healthcare delivery within industrial settings, bridging specialist clinical practice with executive healthcare leadership.",
    ],
  },
  {
    id: "abdulakeem-balogun-mgmt",
    name: "Abdulakeem Balogun",
    title: "Finance Director",
    photo: "/images/team/abdulakeem-balogun.jpg",
    bio: [
      "Recognised for his analytical rigor and commercial acumen, Abdulakeem has advised on complex transactions across healthcare, infrastructure, and renewable energy, delivering innovative financing solutions that support sustainable business growth.",
      "He brings extensive practical experience in financial modelling, valuation, transaction structuring, and the development of bankable projects for corporates, financial institutions, and public sector organisations.",
    ],
  },
  {
    id: "linda-rogers",
    name: "Linda Rogers",
    title: "Chief Technology Officer",
    photo: "/images/team/linda-rogers.jpg",
    bio: [
      "A seasoned technology executive and former International CIO at Alliance Medical Group, where she led digital and clinical systems strategy across Europe's largest diagnostic imaging network, spearheading group-wide RIS/PACS implementation and an AI innovation programme, all with zero data breaches under her cybersecurity leadership.",
      "Now operating as a fractional CIO and Technology Growth Partner, Linda helps RadioMed build robust technology roadmaps and repeatable centre activation playbooks as the network scales toward its 15-facility growth journey.",
    ],
  },
  {
    id: "gboyega-adegbola",
    name: "Adegbola, Adegboyega Adedapo",
    title: "General Manager, Commercial and Stakeholder Engagement",
    photo: "/images/team/gboyega-adegbola.jpg",
    bio: [
      "A seasoned C-suite executive with over 20 years of experience driving operational excellence, commercial growth, and organisational transformation across Real Estate, Oil & Gas, and Financial Services, with a track record of securing over ₦7.2 billion in new commercial contracts.",
      "Previously General Manager at James Cubitt Developments overseeing FM portfolios for diplomatic missions, he holds an MBA from Lancaster University and is a Prince2 Practitioner.",
    ],
  },
  {
    id: "ayodeji-ogunleye",
    name: "Ayodeji Ifeanyi Ogunleye",
    title: "Manager, Projects, Admin and Marketing",
    bio: [
      "A results-oriented manager with over eight years of experience driving project delivery, administrative operations, and multi-channel marketing across research, non-profit, and corporate environments, leading cross-functional teams of up to 10 professionals.",
      "He brings expertise in systems management, risk mitigation, and workflow optimisation, and holds a B.Sc. in Intelligence and Security Studies from Novena University.",
    ],
  },
];

const rosterOrder = [
  ...boardOfDirectors,
  ...advisoryBoard,
  ...management,
].map((p) => p.id);

function frameNumber(id: string) {
  const idx = rosterOrder.indexOf(id) + 1;
  return String(idx).padStart(3, "0");
}

const TOTAL_FRAMES = rosterOrder.length;

/* ------------------------------------------------------------------ */
/*  AMBIENT SIGNATURE PIECES                                           */
/* ------------------------------------------------------------------ */

function EcgTrace({ className = "" }: { className?: string }) {
  const reduced = usePrefersReducedMotion();
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 60"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <motion.path
          d="M0,30 L120,30 L140,30 L155,8 L170,52 L185,30 L210,30 L340,30 L360,30 L375,14 L390,46 L405,30 L430,30 L560,30 L580,30 L595,8 L610,52 L625,30 L650,30 L800,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="8 6"
          animate={
            reduced
              ? {}
              : { strokeDashoffset: [0, -280] }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function GantryRing() {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      aria-hidden
      animate={reduced ? {} : { rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-[0.35] md:-right-20 md:-top-20"
      style={{
        background:
          "conic-gradient(from 0deg, transparent 0deg, rgba(229,9,20,0.35) 25deg, transparent 70deg, transparent 180deg, rgba(14,165,233,0.35) 205deg, transparent 250deg, transparent 360deg)",
        maskImage:
          "radial-gradient(circle, transparent 60%, black 61%, black 64%, transparent 65%)",
        WebkitMaskImage:
          "radial-gradient(circle, transparent 60%, black 61%, black 64%, transparent 65%)",
      }}
    />
  );
}

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reduced ? value : 0);

  useEffect(() => {
    if (!inView || reduced) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  SCAN FRAME CARD                                                    */
/* ------------------------------------------------------------------ */

function Monogram({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#071A3D,#0E3A6B)]">
      <span className="text-4xl font-black tracking-tight text-white/85">
        {initialsFromName(name)}
      </span>
    </div>
  );
}

function ScanFrameCard({
  person,
  accent,
  wide = false,
}: {
  person: Person;
  accent: string;
  wide?: boolean;
}) {
  const [scanned, setScanned] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = usePrefersReducedMotion();

  const badges = [
    person.credentials,
    ...(person.credentials ? [] : []),
  ].filter(Boolean) as string[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`group relative ${wide ? "sm:col-span-1" : ""}`}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition-shadow duration-500 group-hover:shadow-[0_24px_70px_rgba(7,26,61,0.14)]">
        {/* PHOTO / SCAN AREA */}
        <motion.div
          onViewportEnter={() => setScanned(true)}
          viewport={{ once: true, amount: 0.5 }}
          className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100"
        >
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              className="h-full w-full object-cover"
              style={{
                filter:
                  scanned || reduced
                    ? "grayscale(0) contrast(1.02)"
                    : "grayscale(1) contrast(0.95) brightness(0.92)",
                transition: "filter 1.3s ease 0.35s, transform 0.7s ease",
              }}
            />
          ) : (
            <Monogram name={person.name} />
          )}

          {/* scan sweep bar */}
          {!reduced && (
            <motion.div
              initial={{ top: "-15%" }}
              animate={scanned ? { top: "110%" } : { top: "-15%" }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}
              className="pointer-events-none absolute left-0 right-0 h-1/4"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(14,165,233,0.35), rgba(14,165,233,0.55), rgba(14,165,233,0.35), transparent)",
              }}
            />
          )}

          {/* gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/85 via-[#071A3D]/5 to-transparent" />

          {/* reticle corners */}
          {[
            "left-3 top-3 border-l-2 border-t-2",
            "right-3 top-3 border-r-2 border-t-2",
            "left-3 bottom-3 border-l-2 border-b-2",
            "right-3 bottom-3 border-r-2 border-b-2",
          ].map((pos, i) => (
            <span
              key={i}
              aria-hidden
              className={`absolute h-4 w-4 border-white/60 transition-all duration-500 group-hover:h-5 group-hover:w-5 ${pos}`}
            />
          ))}

          {/* live rec dot */}
          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-black/30 px-2 py-1 backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span className="font-mono text-[9px] uppercase tracking-wider text-white/80">
              frame {frameNumber(person.id)}
            </span>
          </div>

          {/* name plate */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              {String(rosterOrder.indexOf(person.id) + 1).padStart(3, "0")} /{" "}
              {String(TOTAL_FRAMES).padStart(3, "0")}
            </p>
            <h3 className="mt-1 text-xl font-black leading-tight tracking-tight text-white">
              {person.name}
            </h3>
            <p className="mt-0.5 text-sm font-medium" style={{ color: "#7DD3FC" }}>
              {person.title}
            </p>
          </div>
        </motion.div>

        {/* FOOTER STRIP */}
        <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
          <div className="flex flex-wrap gap-1.5">
            {person.credentials ? (
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {person.credentials}
              </span>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300">
                ref rm-{frameNumber(person.id)}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#071A3D] transition-colors hover:border-[#071A3D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ outlineColor: accent }}
          >
            <Plus className="h-3 w-3" />
            Profile
          </button>
        </div>
      </div>

      {/* EXPANDED PROFILE PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050F24]/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[28px] bg-white shadow-2xl"
            >
              <div className="grid gap-0 md:grid-cols-[280px_1fr]">
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Monogram name={person.name} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/80 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="relative p-8 md:p-10">
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close profile"
                    className="absolute right-6 top-6 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#071A3D] focus-visible:outline focus-visible:outline-2"
                    style={{ outlineColor: accent }}
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <p className="font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: accent }}>
                    Frame {frameNumber(person.id)} / {String(TOTAL_FRAMES).padStart(3, "0")}
                  </p>
                  <h3 className="mt-2 text-3xl font-black leading-tight tracking-tight text-[#071A3D]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-base font-medium text-slate-500">
                    {person.title}
                    {person.credentials ? ` · ${person.credentials}` : ""}
                  </p>

                  <div className="mt-6 space-y-4">
                    {person.bio.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed text-slate-600">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION WRAPPER                                                    */
/* ------------------------------------------------------------------ */

function TeamSection({
  id,
  dataset,
  icon: Icon,
  title,
  highlight,
  description,
  people,
  accent,
  columns = "lg:grid-cols-3",
}: {
  id: string;
  dataset: string;
  icon: any;
  title: string;
  highlight: string;
  description: string;
  people: Person[];
  accent: string;
  columns?: string;
}) {
  return (
    <section id={id} className="relative scroll-mt-28 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em]"
            style={{ color: accent }}
          >
            <Icon className="h-4 w-4" />
            Dataset {dataset}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-black tracking-tight text-[#071A3D] md:text-5xl"
          >
            {title} <span style={{ color: accent }}>{highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-5 text-lg leading-relaxed text-slate-600"
          >
            {description}
          </motion.p>
        </div>

        <div className={`grid gap-8 sm:grid-cols-2 ${columns}`}>
          {people.map((person) => (
            <ScanFrameCard key={person.id} person={person} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FILMSTRIP NAV                                                      */
/* ------------------------------------------------------------------ */

function FilmstripNav() {
  const tabs = [
    { id: "board", label: "Board", count: boardOfDirectors.length, accent: "#E50914" },
    { id: "advisory", label: "Advisory", count: advisoryBoard.length, accent: "#0EA5E9" },
    { id: "management", label: "Management", count: management.length, accent: "#071A3D" },
  ];

  return (
    <div className="sticky top-4 z-30 mx-auto mb-4 flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          href={`#${tab.id}`}
          className="group flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 transition-colors hover:text-[#071A3D] focus-visible:outline focus-visible:outline-2"
        >
          <span
            className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125"
            style={{ backgroundColor: tab.accent }}
          />
          {tab.label}
          <span className="font-mono text-[10px] text-slate-300">
            {String(tab.count).padStart(2, "0")}
          </span>
        </a>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function TeamPage() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] text-[#071A3D]">
      {/* HERO */}
      <section className="relative overflow-hidden pt-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.07),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%),linear-gradient(to_bottom,#FFFFFF,#F5F7FA,#FFFFFF)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />
          <GantryRing />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-4"
          >
            <div className="h-[1px] w-14 bg-[#E50914]" />
            <span className="flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-[#E50914]">
              <Radio className="h-3.5 w-3.5" />
              Leadership Archive
            </span>
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
              REF: RM/LDR/2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl"
          >
            The People Reading
            <span className="block text-[#E50914]">Every Frame</span>
            of Nigeria's Diagnostics
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            A board and management team spanning interventional cardiology,
            public health governance, infrastructure law, international
            development, and healthcare technology — thirteen profiles,
            one dataset, assembled to scale precision diagnostics
            across Nigeria.
          </motion.p>

          {/* VITALS TICKER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            viewport={{ once: true }}
            className="mt-14 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 sm:grid-cols-4"
          >
            {[
              { value: 13, suffix: "", label: "Leadership Profiles" },
              { value: 25, suffix: "+", label: "Years, Deepest Tenure" },
              { value: 9, suffix: "", label: "Countries of Experience" },
              { value: 15, suffix: "", label: "Facility Growth Target" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-tight text-[#071A3D] md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <EcgTrace className="h-10 w-full text-[#E50914]/25" />
      </section>

      <div className="px-6 pt-10 lg:px-12">
        <FilmstripNav />
      </div>

      <TeamSection
        id="board"
        dataset="01 — Governance"
        icon={ShieldCheck}
        title="Board of"
        highlight="Directors"
        description="Clinical, financial, legal, and public health leadership guiding RadioMed's growth and governance."
        people={boardOfDirectors}
        accent="#E50914"
      />

      <EcgTrace className="mx-auto h-8 w-full max-w-7xl text-[#0EA5E9]/20" />

      <TeamSection
        id="advisory"
        dataset="02 — Strategic Counsel"
        icon={Compass}
        title="Advisory"
        highlight="Board"
        description="Global healthcare and pharmaceutical executives advising on strategy, partnerships, and international expansion."
        people={advisoryBoard}
        accent="#0EA5E9"
        columns="lg:grid-cols-2"
      />

      <EcgTrace className="mx-auto h-8 w-full max-w-7xl text-[#071A3D]/15" />

      <TeamSection
        id="management"
        dataset="03 — Operations"
        icon={Users2}
        title="Management"
        highlight="Team"
        description="The team responsible for day-to-day clinical excellence, financial discipline, technology, and commercial growth."
        people={management}
        accent="#071A3D"
      />

      {/* CLOSING */}
      <section className="relative pb-32 pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[#071A3D] px-10 py-16 text-center md:px-20"
          >
            <div className="absolute inset-x-0 top-0">
              <EcgTrace className="h-10 w-full text-white/15" />
            </div>
            <p className="mx-auto max-w-3xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
              Built by people who have run hospitals, governed health
              systems, and financed infrastructure — so every scan is
              faster, safer, and more accessible.
            </p>
            <div className="absolute inset-x-0 bottom-0 rotate-180">
              <EcgTrace className="h-10 w-full text-white/15" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}