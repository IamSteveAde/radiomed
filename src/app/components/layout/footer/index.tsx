"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Partnership",
    href: "/partnership",
  },
];

const platformLinks = [
  {
    title: "Sustainability",
    href: "/sustainability",
  },
  {
    title: "Expansion Vision",
    href: "/expansion",
  },
  {
    title: "Partnerships",
    href: "/partners",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const socials = [
  {
    icon: Instagram,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* MAIN GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,9,20,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%),linear-gradient(to_bottom,#020617,#071A3D,#020617)]" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* GLOWS */}
        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-red-500/10 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 lg:px-12">
        {/* TOP */}
        <div className="grid gap-16 border-b border-white/10 pb-20 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            {/* LOGO */}
            <a
              href="/"
              className="inline-flex items-center"
            >
              <img
                src="/images/logo/rmed.svg"
                alt="RadioMed Logo"
                className="h-16 w-auto object-contain"
              />
            </a>

            {/* TEXT */}
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/70">
              Radio Medicine Technology limited is building a scalable healthcare
              infrastructure platform focused on advanced
              diagnostics, sustainable operations, and improved
              healthcare access across underserved communities in
              Nigeria.
            </p>

            {/* CTA */}
            
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-between text-white/60 transition-all duration-300 hover:text-white"
                >
                  <span>{link.title}</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ))}
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Platform
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              {platformLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-between text-white/60 transition-all duration-300 hover:text-white"
                >
                  <span>{link.title}</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Contact
            </h3>

            <div className="mt-8 space-y-6">
              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Phone className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                    Phone
                  </p>

                  <p className="mt-2 text-white/70">
                    +234 806 872 1266
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <Mail className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                    Email
                  </p>

                  <p className="mt-2 text-white/70">
                    info@radiomed.com
                  </p>
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                  <MapPin className="h-5 w-5 text-red-400" />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                    Location
                  </p>

                  <p className="mt-2 text-white/70">
                    Ogun State, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE CTA */}
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
          className="py-20 text-center"
        >
          <p className="mx-auto max-w-5xl text-3xl font-medium leading-relaxed tracking-tight text-white/80 md:text-5xl">
            Building the future of
            <span className="text-red-500">
              {" "}advanced diagnostic healthcare </span>
            across underserved communities in Africa.
          </p>
        </motion.div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/10 py-10 lg:flex-row">
          {/* COPYRIGHT */}
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Radio Medicine Technology
            Limited. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.href}
                  className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-xl transition-all duration-300 hover:border-red-500/30 hover:bg-red-500 hover:text-white"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>

          {/* LEGAL */}
          <div className="flex items-center gap-8 text-sm text-white/40">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}