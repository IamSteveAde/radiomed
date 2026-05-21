"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  TrendingUp,
  Building2,
  ShieldCheck,
  BriefcaseBusiness,
  Activity,
  Globe2,
  Hospital,
  Users2,
  CheckCircle2,
  X,
} from "lucide-react";

const partners = [
  {
    icon: TrendingUp,
    title: "Investors",
    text: "Participate in the growth of a scalable diagnostic healthcare infrastructure platform positioned for long-term expansion across Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "HMOs",
    text: "Partner with RadioMed to expand diagnostic access, improve patient outcomes, and strengthen healthcare delivery networks.",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    text: "Collaborate with RadioMed to provide advanced imaging and diagnostic support through connected healthcare infrastructure.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Health Partners",
    text: "Deliver preventive healthcare, diagnostics, and employee wellness support through strategic healthcare partnerships.",
  },
];

const highlights = [
  {
    number: "15+",
    label: "Planned Diagnostic Facilities",
  },
  {
    number: "7M+",
    label: "Projected Population Reach",
  },
  {
    number: "24/7",
    label: "Operational Infrastructure",
  },
  {
    number: "100%",
    label: "Solar-Powered Facilities",
  },
];

const growthPoints = [
  "Scalable diagnostic infrastructure model",
  "Growing healthcare demand across Nigeria",
  "Expansion-focused healthcare strategy",
  "Institutional healthcare partnerships",
  "Technology-driven healthcare delivery",
];

export default function InvestorsPartnershipPage() {
  const [modal, setModal] = useState<
    null | "investor" | "hmo" | "hospital" | "corporate"
  >(null);

  return (
    <>
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
            <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-500/5 blur-3xl" />

            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-6 lg:px-12 md:pb-32">
            {/* HERO GRID */}
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              {/* LEFT */}
              <div>
                {/* LABEL */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-[1px] w-14 bg-[#E50914]" />

                  <span className="text-xs uppercase tracking-[0.35em] text-[#E50914] sm:text-sm">
                    Investors & Partnerships
                  </span>
                </div>

                {/* TITLE */}
                <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                  Building The Future Of
                  <span className="block text-[#E50914]">
                    Diagnostic Healthcare
                  </span>
                  Infrastructure
                </h1>
              </div>

              {/* RIGHT */}
              <div>
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
                  RadioMed is creating a scalable healthcare
                  infrastructure platform designed around advanced
                  diagnostics, operational reliability, and
                  long-term healthcare accessibility.
                  <br />
                  <br />
                  Through institutional partnerships, technology-
                  driven healthcare delivery, and sustainable
                  infrastructure, RadioMed is positioned to scale
                  diagnostic healthcare access across underserved
                  communities in Nigeria.
                </p>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#071A3D]"
                >
                  Speak With Our Team

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071A3D] text-white transition-all duration-300 group-hover:bg-[#E50914]">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </div>
            </div>

            {/* FEATURE IMAGE */}
            <div className="relative mt-20 overflow-hidden rounded-[32px] md:mt-24 md:rounded-[40px]">
              <img
                src="/images/hero/ctscan.webp"
                alt="Healthcare Infrastructure"
                className="h-[520px] w-full object-cover md:h-[720px]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/85 via-[#071A3D]/20 to-transparent" />

              {/* FLOATING CARD */}
              <div className="absolute bottom-5 left-5 max-w-xl rounded-[28px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-2xl sm:bottom-10 sm:left-10 sm:p-8 md:rounded-[32px]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs">
                  Investment Opportunity
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
                  Scalable Diagnostic Infrastructure Platform
                </h3>

                <p className="mt-5 leading-relaxed text-white/70">
                  Positioned to address growing healthcare demand
                  through advanced diagnostics, sustainable
                  operations, and partnership-driven expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="relative py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)]"
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)]" />

                <div className="relative z-10">
                  <h3 className="text-5xl font-black tracking-tight text-[#071A3D] md:text-6xl">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OPPORTUNITY SECTION */}
        <section className="relative py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-12">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E50914]">
                Market Opportunity
              </p>

              <h2 className="mt-6 text-4xl font-black leading-[1] tracking-tight md:text-6xl">
                Strong Healthcare Demand Across Nigeria
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-lg leading-relaxed text-slate-600">
                Nigeria continues to face increasing demand for
                reliable diagnostic healthcare services,
                infrastructure expansion, and advanced imaging
                accessibility.
                <br />
                <br />
                RadioMed’s scalable healthcare model is designed
                to address this growing healthcare gap through
                operational efficiency, institutional partnerships,
                and technology-driven healthcare infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* PARTNER GRID */}
        <section className="relative py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
            {/* HEADER */}
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Partnership-Driven
                <span className="text-[#E50914]">
                  {" "}Growth Strategy
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
                RadioMed’s expansion strategy is built around
                institutional collaboration, scalable healthcare
                infrastructure, and long-term operational growth.
              </p>
            </div>

            {/* GRID */}
            <div className="mt-20 grid gap-6 md:grid-cols-2">
              {partners.map((partner, index) => {
                const Icon = partner.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 md:p-10"
                  >
                    {/* GLOW */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)]" />

                    <div className="relative z-10">
                      {/* ICON */}
                      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
                        <Icon className="h-7 w-7 text-[#E50914]" />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-3xl font-bold leading-tight tracking-tight text-black">
                        {partner.title}
                      </h3>

                      {/* TEXT */}
                      <p className="mt-6 leading-relaxed text-slate-600">
                        {partner.text}
                      </p>

                      {/* CTA */}
                      <button
                        onClick={() =>
                          setModal(
                            partner.title === "Investors"
                              ? "investor"
                              : partner.title === "HMOs"
                              ? "hmo"
                              : partner.title ===
                                "Hospitals & Clinics"
                              ? "hospital"
                              : "corporate"
                          )
                        }
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071A3D] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#E50914]"
                      >
                        Request Partnership

                        <ArrowUpRight className="h-4 w-4" />
                      </button>

                      {/* LINE */}
                      <div className="mt-8 h-[1px] bg-gradient-to-r from-[#E50914] to-transparent" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SCALABLE MODEL */}
        <section className="relative bg-[#071A3D] py-24 text-white md:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
                Scalable Business Model
              </p>

              <h2 className="mt-6 text-white text-4xl font-black leading-[1] tracking-tight md:text-6xl">
                Designed For Long-Term National Expansion
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-white/70">
                RadioMed combines advanced diagnostics,
                infrastructure reliability, healthcare technology,
                and partnership-driven growth into a scalable
                operational healthcare platform.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-red-500/10">
                <Activity className="h-9 w-9 text-red-400" />
              </div>

              <div className="mt-10 space-y-5">
                {growthPoints.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="h-5 w-5 text-red-400" />
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                    <Globe2 className="h-7 w-7 text-red-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Expansion Focus
                    </p>

                    <h4 className="mt-3 text-3xl font-black text-white">
                      Infrastructure-Led Growth
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
            <p className="text-3xl font-medium leading-relaxed tracking-tight text-slate-700 md:text-5xl">
              Building a future where
              <span className="text-[#E50914]">
                {" "}advanced diagnostic healthcare
              </span>
              becomes more accessible, scalable, and sustainable
              across underserved communities in Nigeria.
            </p>
          </div>
        </section>
      </main>

      {/* MODALS */}
      {modal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-md">
          <div className="relative max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-[32px] bg-white shadow-2xl">
            {/* CLOSE */}
            <button
              onClick={() => setModal(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7FA]"
            >
              <X className="h-5 w-5 text-[#071A3D]" />
            </button>

            {/* HEADER */}
            <div className="border-b border-slate-100 px-8 py-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#E50914]">
                RadioMed
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#071A3D]">
                Partnership Inquiry
              </h3>

              <p className="mt-4 text-slate-600">
                Complete the form below and our team will contact
                you regarding partnership opportunities.
              </p>
            </div>

            {/* FORM */}
            <form
              action="https://formsubmit.co/adediranstephen2000@gmail.com"
              method="POST"
              className="space-y-6 px-8 py-8"
            >
              {/* HIDDEN */}
              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_subject"
                value={`RadioMed ${
                  modal === "investor"
                    ? "Investor Inquiry"
                    : modal === "hmo"
                    ? "HMO Partnership Inquiry"
                    : modal === "hospital"
                    ? "Hospital Partnership Inquiry"
                    : "Corporate Partnership Inquiry"
                }`}
              />

              {/* GRID */}
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  name="Full Name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                />

                <input
                  type="text"
                  name="Organization"
                  placeholder="Organization"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                />

                <input
                  type="email"
                  name="Email Address"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                />

                <input
                  type="tel"
                  name="Phone Number"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                />
              </div>

              {/* CONDITIONAL */}
              {modal === "investor" && (
                <select
                  name="Investment Interest"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                >
                  <option value="">
                    Select Investment Interest
                  </option>

                  <option>Equity Investment</option>

                  <option>Infrastructure Funding</option>

                  <option>Strategic Partnership</option>

                  <option>Healthcare Expansion</option>
                </select>
              )}

              {modal !== "investor" && (
                <select
                  name="Partnership Category"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                >
                  <option value="">
                    Select Partnership Category
                  </option>

                  <option>Healthcare Services</option>

                  <option>Diagnostic Collaboration</option>

                  <option>Corporate Healthcare</option>

                  <option>Operational Partnership</option>

                  <option>Strategic Collaboration</option>
                </select>
              )}

              {/* MESSAGE */}
              <textarea
                name="Message"
                rows={6}
                placeholder="Tell us about your interest or partnership goals"
                required
                className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#071A3D] px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#E50914]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}