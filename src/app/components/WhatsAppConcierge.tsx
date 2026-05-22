"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Need a CT Scan or MRI appointment?",
  "Speak with a Radio Medicine Technology Limited care concierge instantly.",
  "Book advanced diagnostic services in minutes.",
  "Get connected to trusted healthcare support today.",
];

export default function WhatsAppConcierge() {
  const [open, setOpen] = useState(true);
  const [index, setIndex] = useState(0);

  // ROTATE MESSAGES
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {/* MESSAGE BUBBLE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.92,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative w-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-white p-5 shadow-[0_20px_80px_rgba(15,23,42,0.15)] backdrop-blur-2xl sm:w-[320px]"
          >
            {/* TOP ACCENT */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E50914] via-[#EF4444] to-[#0EA5E9]" />

            {/* LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071A3D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.82.93 5.43 2.49 7.56L3 29l5.64-2.46C10.69 27.64 13.26 28.5 16 28.5c7.18 0 13-5.82 13-13S23.18 3 16.001 3zm0 23.5c-2.45 0-4.74-.73-6.66-1.99l-.48-.29-3.35 1.46 1.5-3.26-.31-.5C5.41 20.66 4.5 18.42 4.5 16c0-6.35 5.15-11.5 11.5-11.5S27.5 9.65 27.5 16 22.35 27.5 16.001 27.5zm6.32-8.63c-.34-.17-2.01-.99-2.32-1.1-.31-.12-.53-.17-.75.17s-.86 1.1-1.06 1.33c-.19.23-.39.26-.73.09-.34-.17-1.44-.53-2.75-1.68-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.56.11-.23.06-.42-.03-.59-.09-.17-.75-1.8-1.02-2.47-.27-.65-.54-.56-.75-.57l-.64-.01c-.23 0-.59.09-.9.42-.31.34-1.19 1.17-1.19 2.86s1.22 3.33 1.39 3.56c.17.23 2.4 3.66 5.82 5.13.81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.13.65-.1 2.01-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.08-.14-.31-.23-.65-.4z" />
                </svg>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#E50914]">
                  Radio Medicine Technology Limited
                </p>

                <h4 className="mt-1 text-sm font-bold text-[#071A3D]">
                  Care Concierge
                </h4>
              </div>
            </div>

            {/* ANIMATED MESSAGE */}
            <div className="relative min-h-[55px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="pr-6 text-sm leading-relaxed text-slate-600"
                >
                  {messages[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/2348068721266"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071A3D] transition-all duration-300 hover:text-[#E50914]"
            >
              Chat On WhatsApp

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M13.28 4.22a.75.75 0 011.06 0l5.44 5.44a.75.75 0 010 1.06l-5.44 5.44a.75.75 0 11-1.06-1.06l4.16-4.16H4.75a.75.75 0 010-1.5h12.69l-4.16-4.16a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F5F7FA] text-xs text-slate-500 transition-all duration-300 hover:bg-[#071A3D] hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHATSAPP BUTTON */}
      <motion.a
        href="https://wa.me/2348068721266"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0_20px_60px_rgba(7,26,61,0.25)]"
      >
        {/* GLOW */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E50914] via-[#EF4444] to-[#0EA5E9] opacity-70 blur-md animate-pulse" />

        {/* BUTTON */}
        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#071A3D] text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-7 w-7"
          >
            <path d="M16.001 3C8.82 3 3 8.82 3 16c0 2.82.93 5.43 2.49 7.56L3 29l5.64-2.46C10.69 27.64 13.26 28.5 16 28.5c7.18 0 13-5.82 13-13S23.18 3 16.001 3zm0 23.5c-2.45 0-4.74-.73-6.66-1.99l-.48-.29-3.35 1.46 1.5-3.26-.31-.5C5.41 20.66 4.5 18.42 4.5 16c0-6.35 5.15-11.5 11.5-11.5S27.5 9.65 27.5 16 22.35 27.5 16.001 27.5zm6.32-8.63c-.34-.17-2.01-.99-2.32-1.1-.31-.12-.53-.17-.75.17s-.86 1.1-1.06 1.33c-.19.23-.39.26-.73.09-.34-.17-1.44-.53-2.75-1.68-1.02-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.59.17-.2.23-.34.34-.56.11-.23.06-.42-.03-.59-.09-.17-.75-1.8-1.02-2.47-.27-.65-.54-.56-.75-.57l-.64-.01c-.23 0-.59.09-.9.42-.31.34-1.19 1.17-1.19 2.86s1.22 3.33 1.39 3.56c.17.23 2.4 3.66 5.82 5.13.81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.13.65-.1 2.01-.82 2.29-1.61.28-.79.28-1.47.2-1.61-.08-.14-.31-.23-.65-.4z" />
          </svg>
        </span>
      </motion.a>

      {/* REOPEN */}
      {!open && (
        <motion.button
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          onClick={() => setOpen(true)}
          className="rounded-full border border-white/10 bg-[#071A3D] px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:bg-[#E50914]"
        >
          Need Help?
        </motion.button>
      )}
    </div>
  );
}