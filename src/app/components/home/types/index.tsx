"use client";

import { useState } from "react";
import {
  Building2,
  ShieldCheck,
  Globe2,
  BriefcaseBusiness,
  ArrowUpRight,
  Activity,
  X,
} from "lucide-react";

const partnerships = [
  {
    icon: Building2,
    title: "Hospitals & Clinics",
    description:
      "Institutional diagnostic support partnerships designed to improve patient outcomes and healthcare delivery.",
  },
  {
    icon: ShieldCheck,
    title: "HMOs & Insurance",
    description:
      "Structured healthcare partnerships enabling scalable diagnostic access and recurring healthcare coverage.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Organizations",
    description:
      "Workforce healthcare partnerships supporting preventive diagnostics and employee wellness infrastructure.",
  },
  {
    icon: Globe2,
    title: "Global Healthcare Partners",
    description:
      "Collaborative international healthcare relationships expanding specialist access and clinical connectivity.",
  },
];

const metrics = [
  {
    number: "15+",
    label: "Planned Diagnostic Facilities",
  },
  {
    number: "7M+",
    label: "Target Population Reach",
  },

  {
    number: "100%",
    label: "Solar-Powered Infrastructure",
  },
];

export default function InvestorPartnershipSection() {
  const [openModal, setOpenModal] = useState<
    null | "partner" | "invest" | string
  >(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F8FAFC] py-24 text-[#071A3D] md:py-32">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(203,213,225,0.35),transparent_35%),linear-gradient(to_bottom,#FFFFFF,#F5F7FA,#FFFFFF)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          {/* TOP */}
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-[1px] w-14 bg-[#E50914]" />

              <span className="text-xs uppercase tracking-[0.35em] text-[#E50914] sm:text-sm">
                Investors & Partnerships
              </span>

              <div className="h-[1px] w-14 bg-[#E50914]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Building The Future Of
              <span className="block text-[#E50914]">
                Diagnostic Infrastructure
              </span>
              In Africa
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              Radio Medicine Technology Limited is creating a scalable healthcare platform
              designed around advanced diagnostics, sustainable
              infrastructure, and institutional healthcare
              partnerships.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}
            <div className="space-y-6">
              {partnerships.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_20px_80px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 md:p-8"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.08),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start">
                      {/* ICON */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA]">
                        <Icon className="h-7 w-7 text-[#E50914]" />
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="text-2xl font-bold tracking-tight text-black">
                            {item.title}
                          </h3>

                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7FA]">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>

                        <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
                          {item.description}
                        </p>

                        {/* CTA */}
                        <button
                          onClick={() => setOpenModal(item.title)}
                          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071A3D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#E50914]"
                        >
                          Request Partnership

                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[40px] bg-[#071A3D] p-8 text-white shadow-[0_30px_120px_rgba(7,26,61,0.18)] md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.2),transparent_35%)]" />

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-center justify-between border-b border-white/10 pb-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      Infrastructure Opportunity
                    </p>

                    <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                      Scalable Healthcare Platform
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <Activity className="h-6 w-6 text-red-400" />
                  </div>
                </div>

                {/* METRICS */}
                <div className="mt-10 space-y-8">
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-end justify-between border-b border-white/5 pb-6"
                    >
                      <h4 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                        {metric.number}
                      </h4>

                      <p className="max-w-[180px] text-right text-sm leading-relaxed text-white/60">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CARD */}
                <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Strategic Positioning
                  </p>

                  <h4 className="mt-4 text-3xl text-white font-black leading-tight">
                    First-Mover Diagnostic Infrastructure
                  </h4>

                  <p className="mt-5 leading-relaxed text-white/70">
                    Radio Medicine Technology Limited is positioned to capture growing
                    healthcare demand through a scalable,
                    technology-driven, and institutionally integrated
                    healthcare model.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-20 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <button
              onClick={() => setOpenModal("partner")}
              className="inline-flex items-center gap-3 rounded-full bg-[#071A3D] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#E50914]"
            >
              Become A Partner

              <ArrowUpRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setOpenModal("invest")}
              className="inline-flex items-center gap-3 rounded-full border border-[#071A3D]/10 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#071A3D] transition-all duration-300 hover:bg-[#071A3D] hover:text-white"
            >
              Invest In Radio Medicine Technology Limited

              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-5 backdrop-blur-md">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[32px] bg-white shadow-2xl">
            {/* CLOSE */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F7FA]"
            >
              <X className="h-5 w-5 text-[#071A3D]" />
            </button>

            {/* HEADER */}
            <div className="border-b border-slate-100 px-8 py-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#E50914]">
                Radio Medicine Technology Limited
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#071A3D]">
                {openModal === "invest"
                  ? "Investment Interest Form"
                  : "Partnership Request Form"}
              </h3>

              <p className="mt-4 text-slate-600">
                Complete the form below and our team will reach
                out shortly.
              </p>
            </div>

            {/* FORM */}
            <form
              action="https://formsubmit.co/adediranstephen2000@gmail.com"
              method="POST"
              className="space-y-6 px-8 py-8"
            >
              {/* FORMSUBMIT CONFIG */}
              <input
                type="hidden"
                name="_subject"
                value={`RadioMed ${
                  openModal === "invest"
                    ? "Investment Inquiry"
                    : "Partnership Inquiry"
                }`}
              />

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
                name="Inquiry Type"
                value={openModal}
              />

              {/* GRID */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="Full Name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                    Organization
                  </label>

                  <input
                    type="text"
                    name="Organization"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="Phone"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                  />
                </div>
              </div>

              {/* INVESTOR EXTRA FIELD */}
              {openModal === "invest" ? (
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                    Investment Interest
                  </label>

                  <select
                    name="Investment Interest"
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                  >
                    <option>Equity Investment</option>
                    <option>Strategic Investment</option>
                    <option>Infrastructure Funding</option>
                    <option>Healthcare Expansion</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                    Partnership Category
                  </label>

                  <input
                    type="text"
                    name="Partnership Category"
                    defaultValue={openModal}
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                  />
                </div>
              )}

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#071A3D]">
                  Message
                </label>

                <textarea
                  name="Message"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none transition-all focus:border-[#E50914]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#071A3D] px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#E50914]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}