"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Play,
  X,
  Headphones,
  Activity,
} from "lucide-react";

export default function AudioConciergeModal() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // SHOW ONLY ONCE
  useEffect(() => {
    const seen = localStorage.getItem(
      "radiomed_audio_concierge_seen"
    );

    if (!seen) {
      setTimeout(() => setOpen(true), 1200);

      localStorage.setItem(
        "radiomed_audio_concierge_seen",
        "true"
      );
    }
  }, []);

  // PLAY AUDIO
  const handlePlay = () => {
    setPlaying(true);

    setOpen(false);

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // CLOSE
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/audio/welcome.mp3"
        preload="auto"
      />

      <AnimatePresence>
        {open && (
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
            className="fixed inset-0 z-[9999] flex items-center justify-center px-5"
          >
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* MODAL */}
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
                y: 40,
                scale: 0.95,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-xl overflow-hidden rounded-[36px] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            >
              {/* BACKGROUND */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#071A3D] to-[#0F172A]" />

              {/* GRID */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

              {/* GLOW */}
              <div className="absolute -left-20 -top-20 h-[260px] w-[260px] rounded-full bg-red-500/20 blur-[120px]" />

              <div className="absolute bottom-[-80px] right-[-40px] h-[260px] w-[260px] rounded-full bg-cyan-400/20 blur-[120px]" />

              {/* CONTENT */}
              <div className="relative z-10 p-8 text-white md:p-10">
                {/* TOP */}
                <div className="flex items-start justify-between">
                  {/* BRAND */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
                      <Activity className="h-7 w-7 text-[#E50914]" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[#E50914]">
                        RadioMed
                      </p>

                      <h3 className="mt-2 text-2xl font-black">
                        Welcome Experience
                      </h3>
                    </div>
                  </div>

                  {/* CLOSE */}
                  <button
                    onClick={handleClose}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* TEXT */}
                <div className="mt-10">
                  <h2 className="max-w-lg text-white text-3xl font-black leading-[1.05] tracking-tight md:text-4xl">
                    Welcome to the future of
                    <span className="text-[#E50914]">
                      {" "}diagnostic healthcare
                    </span>
                    in Nigeria.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                    Would you like a quick guided introduction to
                    Radio Medicine Technology Limited's advanced imaging, diagnostics, and
                    healthcare infrastructure platform?
                  </p>
                </div>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  {/* PLAY */}
                  <button
                    onClick={handlePlay}
                    className="group flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#E50914] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-red-600"
                  >
                    <Play className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />

                    Play Introduction
                  </button>

                  {/* EXPLORE */}
                  <button
                    onClick={handleClose}
                    className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-xl transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    <Headphones className="h-5 w-5" />

                    I’ll Explore Myself
                  </button>
                </div>

                {/* FOOTER */}
                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40">
                  <div className="h-[1px] w-10 bg-white/20" />

                  Less than 30 seconds
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}