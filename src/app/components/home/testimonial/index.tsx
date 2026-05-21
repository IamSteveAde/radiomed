"use client";

import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Building2,
  PhoneCall,
  X,
} from "lucide-react";

export default function FinalCTASection() {
  const [modal, setModal] = useState<
    null | "appointment" | "partner"
  >(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#020617] py-24 text-white md:py-32">
        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          {/* MAIN GRADIENT */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.22),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_30%),linear-gradient(to_bottom,#020617,#071A3D,#020617)]" />

          {/* GRID */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

          {/* NOISE */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
          {/* MAIN CTA CONTAINER */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] px-6 py-16 backdrop-blur-2xl md:rounded-[48px] md:px-16 md:py-20">
            {/* INTERNAL GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,9,20,0.18),transparent_35%)]" />

            {/* TOP LABEL */}
            <div className="relative z-10 mb-10 flex items-center justify-center gap-4">
              <div className="h-[1px] w-14 bg-red-500" />

              <span className="text-xs uppercase tracking-[0.3em] text-red-400 sm:text-sm sm:tracking-[0.35em]">
                Transforming Healthcare Access
              </span>

              <div className="h-[1px] w-14 bg-red-500" />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 mx-auto max-w-5xl text-center">
              {/* TITLE */}
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
                Bringing
                <span className="block text-red-500">
                  World-Class Diagnostics
                </span>
                Closer To Home
              </h2>

              {/* TEXT */}
              <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                RadioMed is redefining access to diagnostic
                healthcare through advanced imaging, sustainable
                infrastructure, and globally connected healthcare
                delivery designed for underserved communities
                across Nigeria.
              </p>

              {/* CTA BUTTONS */}
              <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                {/* BOOK APPOINTMENT */}
                <button
                  onClick={() => setModal("appointment")}
                  className="group flex items-center gap-3 rounded-full bg-red-500 px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-red-600"
                >
                  Book Appointment

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* PARTNER */}
                <button
                  onClick={() => setModal("partner")}
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-8 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-white/[0.08]"
                >
                  Partner With RadioMed

                  <Building2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
                </button>
              </div>
            </div>

            {/* TRUST ITEMS */}
            <div className="relative z-10 mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
              {/* ITEM */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <CalendarDays className="h-7 w-7 text-red-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Fast Access
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  Faster diagnostics, same-day reporting, and
                  technology-driven healthcare delivery designed
                  around patients.
                </p>
              </div>

              {/* ITEM */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <Building2 className="h-7 w-7 text-red-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Institutional Partnerships
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  Collaborating with hospitals, HMOs, corporate
                  organizations, and healthcare institutions across
                  Nigeria.
                </p>
              </div>

              {/* ITEM */}
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
                  <PhoneCall className="h-7 w-7 text-red-400" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  Connected Care
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  Delivering advanced diagnostics supported by
                  global healthcare partnerships and modern
                  clinical infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
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
                {modal === "appointment"
                  ? "Book Diagnostic Appointment"
                  : "Partnership Inquiry"}
              </h3>

              <p className="mt-4 text-slate-600">
                {modal === "appointment"
                  ? "Complete the appointment request form and our healthcare team will contact you shortly."
                  : "Tell us about your organization and partnership interest."}
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
                  modal === "appointment"
                    ? "Appointment Request"
                    : "Partnership Inquiry"
                }`}
              />

              {/* APPOINTMENT FORM */}
              {modal === "appointment" ? (
                <>
                  {/* PERSONAL INFO */}
                  <div>
                    <h4 className="mb-5 text-lg font-bold text-[#071A3D]">
                      Personal Information
                    </h4>

                    <div className="grid gap-6 md:grid-cols-2">
                      <input
                        type="text"
                        name="Full Name"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      />

                      <input
                        type="email"
                        name="Email"
                        placeholder="Email Address"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      />

                      <input
                        type="tel"
                        name="Phone Number"
                        placeholder="Phone Number"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      />

                      <input
                        type="number"
                        name="Age"
                        placeholder="Age"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      />
                    </div>
                  </div>

                  {/* APPOINTMENT DETAILS */}
                  <div>
                    <h4 className="mb-5 text-lg font-bold text-[#071A3D]">
                      Appointment Details
                    </h4>

                    <div className="grid gap-6 md:grid-cols-2">
                      <select
                        name="Service Required"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      >
                        <option value="">
                          Select Service
                        </option>

                        <option>CT Scan Imaging</option>

                        <option>MRI Imaging</option>

                        <option>Digital X-Ray</option>

                        <option>Ultrasound</option>

                        <option>Laboratory Diagnostics</option>

                        <option>Telemedicine Consultation</option>
                      </select>

                      <input
                        type="date"
                        name="Preferred Date"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      />

                      <select
                        name="Preferred Time"
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      >
                        <option value="">
                          Preferred Time
                        </option>

                        <option>8:00 AM</option>

                        <option>9:00 AM</option>

                        <option>10:00 AM</option>

                        <option>11:00 AM</option>

                        <option>12:00 PM</option>

                        <option>1:00 PM</option>

                        <option>2:00 PM</option>

                        <option>3:00 PM</option>

                        <option>4:00 PM</option>
                      </select>

                      <select
                        name="Referral Type"
                        className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                      >
                        <option>Self Referral</option>

                        <option>Doctor Referral</option>

                        <option>Hospital Referral</option>

                        <option>Insurance Referral</option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <textarea
                      name="Additional Information"
                      rows={5}
                      placeholder="Additional Information or Symptoms"
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* PARTNERSHIP FORM */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Full Name"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                    />

                    <input
                      type="text"
                      name="Organization"
                      placeholder="Organization"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                    />

                    <input
                      type="email"
                      name="Email"
                      placeholder="Email Address"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                    />

                    <input
                      type="tel"
                      name="Phone Number"
                      placeholder="Phone Number"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                    />
                  </div>

                  <select
                    name="Partnership Type"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                  >
                    <option value="">
                      Select Partnership Type
                    </option>

                    <option>Hospital Partnership</option>

                    <option>HMO Partnership</option>

                    <option>Corporate Partnership</option>

                    <option>Government Partnership</option>

                    <option>Healthcare Technology</option>

                    <option>International Collaboration</option>
                  </select>

                  <textarea
                    name="Message"
                    rows={6}
                    placeholder="Tell us about your partnership interest"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 outline-none focus:border-[#E50914]"
                  />
                </>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#071A3D] px-8 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#E50914]"
              >
                {modal === "appointment"
                  ? "Submit Appointment Request"
                  : "Submit Partnership Inquiry"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}