"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FacilityFeatures() {
  const features = [
    {
      id: "innovation",
      name: "INNOVATION HUB",
      color: "bg-[#DE4444]",
      text: "text-white",
    },
    {
      id: "library",
      name: "COMMUNITY LIBRARY",
      color: "bg-[#374151]",
      text: "text-white",
    },
    {
      id: "coworking",
      name: "CO-WORKING SPACE",
      color: "bg-[#C26322]",
      text: "text-white",
    },
    {
      id: "counselling",
      name: "COUNSELLING OFFICE",
      color: "bg-[#4A3728]",
      text: "text-white",
    },
    {
      id: "learning",
      name: "IMMERSIVE LEARNING",
      color: "bg-[#D97706]",
      text: "text-white",
    },
    {
      id: "elderly",
      name: "ELDERLY DAY CENTRE",
      color: "bg-[#2563EB]",
      text: "text-white",
    },
    {
      id: "seminar",
      name: "SEMINAR ROOM",
      color: "bg-[#6B5A4E]",
      text: "text-white",
    },
    {
      id: "fitness",
      name: "FITNESS CENTER",
      color: "bg-[#7F7F7F]",
      text: "text-white",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full overflow-hidden bg-[#020408] py-20 lg:py-32 select-none"
    >
      {/* Cinematic Night Lighthouse Photo backdrop on the right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] h-full pointer-events-none z-0 opacity-40 lg:opacity-60 select-none">
        <Image
          src="/night_lighthouse.png"
          alt="Night Lighthouse Beacon Background"
          fill
          className="object-cover object-center pointer-events-none"
          sizes="(max-w-1024px) 100vw, 45vw"
          priority
        />
        {/* Gradients to blend the image seamlessly on all sides into dark theme */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020408] via-[#020408]/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#020408] via-transparent to-[#020408]/30 z-10" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[180px] pointer-events-none z-0" />

      {/* Content Container (Matches Hero width settings perfectly) */}
      <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto flex flex-col items-start gap-12">
        {/* Double-Block Header */}
        <div className="flex flex-col rounded-lg overflow-hidden shadow-2xl w-fit border border-white/5">
          {/* Upper White Part */}
          <div className="bg-white px-6 py-2.5 flex items-center">
            <span className="text-sm font-black tracking-[0.2em] text-[#020408] uppercase font-sans">
              MULTIPURPOSE
            </span>
          </div>
          {/* Lower Sand Part */}
          <div className="bg-[#EFEAE2] px-6 py-2.5 flex items-center">
            <span className="text-sm font-extrabold tracking-[0.2em] text-[#020408] uppercase font-sans">
              FACILITY
            </span>
          </div>
        </div>

        {/* Diagram Area */}
        <div className="w-full relative min-h-[500px] lg:min-h-[580px] flex items-center justify-center mt-6">
          {/* SVG Animated Connections for Desktop (Visible on lg screens) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            viewBox="0 0 1152 580"
            fill="none"
          >
            {/* Left lines from center (576, 290) */}
            <line
              x1="576"
              y1="230"
              x2="280"
              y2="160"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
            <line
              x1="576"
              y1="270"
              x2="280"
              y2="245"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
            <line
              x1="576"
              y1="310"
              x2="280"
              y2="330"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
            <line
              x1="576"
              y1="350"
              x2="420"
              y2="440"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />

            {/* Right lines from center (576, 290) */}
            <line
              x1="576"
              y1="230"
              x2="870"
              y2="160"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
            <line
              x1="576"
              y1="270"
              x2="870"
              y2="245"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
            <line
              x1="576"
              y1="310"
              x2="870"
              y2="330"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
            <line
              x1="576"
              y1="350"
              x2="730"
              y2="440"
              stroke="#E9B958"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-[pulse_2s_infinite]"
              opacity="0.3"
            />
          </svg>

          {/* DESKTOP DIAGRAM LAYOUT */}
          <div className="hidden lg:block w-full h-[580px] relative">
            {/* 1. Center Emblem (Features of Project Lighthouse) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-1.5">
              {/* Glowing lighthouse SVG emblem on top */}
              <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.2)] animate-pulse mb-2">
                <svg
                  className="w-12 h-12 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L9 7h6l-3-5z"
                  />
                  <path d="M10 7h4v13a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z" />
                  <path d="M6 20h12" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="10" r="1" fill="currentColor" />
                  {/* Rays */}
                  <line x1="6" y1="5" x2="2" y2="3" strokeLinecap="round" />
                  <line x1="18" y1="5" x2="22" y2="3" strokeLinecap="round" />
                  <line x1="5" y1="10" x2="1" y2="10" strokeLinecap="round" />
                  <line x1="19" y1="10" x2="23" y2="10" strokeLinecap="round" />
                </svg>
              </div>

              {/* Badges Stack */}
              <div className="bg-[#E9B958] text-black px-5 py-2 font-black text-xs tracking-[0.2em] uppercase rounded shadow-lg border border-amber-400/20 w-48 text-center leading-none">
                FEATURES OF
              </div>
              <div className="bg-[#E9B958] text-black px-5 py-3.5 font-black text-base tracking-[0.25em] uppercase rounded shadow-lg border border-amber-400/20 w-48 text-center leading-none">
                PROJECT
              </div>
              <div className="bg-[#E9B958] text-black px-5 py-2.5 font-black text-xs tracking-[0.2em] uppercase rounded shadow-lg border border-amber-400/20 w-48 text-center leading-none">
                LIGHTHOUSE
              </div>
            </div>

            {/* 2. Surrounding Pill Cards */}
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-[80px] top-[135px] z-10"
            >
              <div className="bg-[#DE4444] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border border-red-500/10">
                INNOVATION HUB
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute left-[80px] top-[220px] z-10"
            >
              <div className="bg-[#374151] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border border-gray-600/10">
                COMMUNITY LIBRARY
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-[80px] top-[305px] z-10"
            >
              <div className="bg-[#C26322] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border-amber-700/10">
                CO-WORKING SPACE
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute left-[200px] top-[415px] z-10"
            >
              <div className="bg-[#4A3728] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border-amber-900/10">
                COUNSELLING OFFICE
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute right-[80px] top-[135px] z-10"
            >
              <div className="bg-[#D97706] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border-amber-600/10">
                IMMERSIVE LEARNING
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute right-[80px] top-[220px] z-10"
            >
              <div className="bg-[#2563EB] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border-blue-500/10">
                ELDERLY DAY CENTRE
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute right-[80px] top-[305px] z-10"
            >
              <div className="bg-[#6B5A4E] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border-amber-800/10">
                SEMINAR ROOM
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute right-[200px] top-[415px] z-10"
            >
              <div className="bg-[#7F7F7F] px-6 py-3 font-extrabold text-xs tracking-[0.18em] text-white rounded shadow-xl border-zinc-500/10">
                FITNESS CENTER
              </div>
            </motion.div>
          </div>

          {/* MOBILE RESPONSIVE GRID LAYOUT (Visible on md and smaller screens) */}
          <div className="lg:hidden w-full flex flex-col items-center gap-10">
            {/* Center Badges as Header Card */}
            <div className="flex flex-col items-center gap-1.5 bg-[#080d1a] p-8 rounded-2xl border border-white/5 w-full max-w-sm">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 mb-2">
                <svg
                  className="w-9 h-9 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L9 7h6l-3-5z"
                  />
                  <path d="M10 7h4v13a1 1 0 01-1 1h-2a1 1 0 01-1-1V7z" />
                  <path d="M6 20h12" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="bg-[#E9B958] text-black px-4 py-1.5 font-black text-[10px] tracking-[0.18em] uppercase rounded w-44 text-center">
                FEATURES OF
              </div>
              <div className="bg-[#E9B958] text-black px-4 py-3 font-black text-sm tracking-[0.22em] uppercase rounded w-44 text-center">
                PROJECT
              </div>
              <div className="bg-[#E9B958] text-black px-4 py-2 font-black text-[10px] tracking-[0.18em] uppercase rounded w-44 text-center">
                LIGHTHOUSE
              </div>
            </div>

            {/* Responsive List Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`${feature.color} ${feature.text} px-6 py-4 rounded-xl font-extrabold text-[13px] tracking-widest text-center shadow-lg border border-white/5 uppercase font-sans`}
                >
                  {feature.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
