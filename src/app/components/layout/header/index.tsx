"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [platformDropdown, setPlatformDropdown] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div
            className={`relative flex items-center justify-between overflow-hidden rounded-full border transition-all duration-500 ${
              scrolled
                ? "border-white/10 bg-[#071A3D]/80 shadow-[0_20px_80px_rgba(2,6,23,0.25)] backdrop-blur-2xl"
                : "border-white/10 bg-gradient-to-r from-[#071A3D]/70 via-[#0B1F47]/70 to-[#071A3D]/70 backdrop-blur-xl"
            } px-5 py-1`}
          >
            {/* BACKGROUND GLOWS */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute left-[-10%] top-[-100%] h-[250px] w-[250px] rounded-full bg-red-500/10 blur-3xl" />

              <div className="absolute bottom-[-100%] right-[-10%] h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            {/* LOGO */}
            <a
  href="/"
  className="relative z-10 flex items-center"
>
  <img
    src="/images/logo/rmed.svg"
    alt="RadioMed Logo"
    className="h-14 w-auto object-contain md:h-16"
  />
</a>
            {/* DESKTOP NAV */}
            <nav className="relative z-10 hidden items-center gap-6 xl:flex">
              {/* HOME */}
              <a
                href="/"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Home

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>

              {/* ABOUT */}
              <a
                href="/about"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                About

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>

              {/* SERVICES */}
              <a
                href="/services"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Services

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>

              {/* sustain */}
              <a
                href="/sustainability"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Sustainability / ESG

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
              
              {/* INVESTORS */}
              <a
                href="/investors"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Investors

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>

              {/* expansion */}
              <a
                href="/expansion"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Expansion Vision

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>



              {/* CONTACT */}
              <a
                href="/contact"
                className="group relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Contact

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>

            {/* RIGHT SIDE */}
            <div className="relative z-10 hidden items-center gap-4 xl:flex">
              {/* BADGE */}
              

              
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] bg-[#020617]"
          >
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-red-500/10 blur-3xl" />

              <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
            </div>

            {/* TOP */}
            <div className="relative z-10 flex items-center justify-between px-6 py-8">
              {/* LOGO */}
              <a
  href="/"
  className="relative z-10 flex items-center"
>
  <img
    src="/images/logo/rmed.svg"
    alt="RadioMed Logo"
    className="h-14 w-auto object-contain md:h-16"
  />
</a>

              {/* CLOSE */}
              <button
                onClick={() => setMobileMenu(false)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white backdrop-blur-xl"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <div className="relative z-10 mt-10 flex flex-col px-6">
              {[
                "Home",
                "About",
                "Services",
                "Sustainability",
                "Expansion Vision",
                "Investors",
                "Contact",
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="/"
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center justify-between border-b border-white/5 py-6"
                >
                  <span className="text-3xl font-bold tracking-tight text-white">
                    {item}
                  </span>

                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:rotate-45 group-hover:text-red-400" />
                </motion.a>
              ))}

              {/* CTA */}
              <button className="mt-10 flex items-center justify-center gap-3 rounded-full bg-red-500 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Book Appointment

                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}