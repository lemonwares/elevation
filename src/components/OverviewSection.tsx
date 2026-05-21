"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OverviewSection() {
  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-[#E7EEF6] py-20 lg:py-32 select-none"
    >
      {/* Decorative clouds styling backdrop elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-black/10 to-transparent pointer-events-none z-0" />
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/40 blur-[120px] pointer-events-none z-0" />

      {/* Content Container (Matches Hero width settings perfectly) */}
      <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative copy */}
        <div className="lg:col-span-6 text-left space-y-6">
          {/* Header Tab */}
          <div className="inline-block bg-[#E9B958] text-black px-6 py-3 font-extrabold text-sm uppercase tracking-widest rounded-lg shadow-lg mb-4 font-sans">
            Overview
          </div>

          {/* Description Block */}
          <p className="text-[#3A4556] text-base md:text-lg font-light leading-relaxed font-sans">
            Project Lighthouse is a clear expression of what God is doing
            through The Elevation Church Ikoyi as we answer His call to be a
            lighthouse to our community, a steady source of light, hope, and
            practical support to real needs around us. This vision is taking
            tangible form through Pistis Hub Ikoyi, a faith-rooted community
            centre where worship and service converge to solve real problems and
            create lasting impact. Every element has been thoughtfully designed
            to strengthen families, empower individuals, and uplift the wider
            community for generations to come.
          </p>
        </div>

        {/* Right Column: Architectural Rendering */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[500px] lg:max-w-none aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-white/40 group"
          >
            {/* The Building Render */}
            <Image
              src="/building_render.png"
              alt="Project Lighthouse Building Rendering"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-103"
              sizes="(max-w-1024px) 100vw, 500px"
            />
            {/* Crisp white logo in the bottom right corner of the building rendering */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/25 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
              <Image
                src="https://dextrocloud.com/lhc/wp-content/uploads/2024/08/TEC-Ikoyi-Logo-1.webp"
                alt="The Elevation Church Logo"
                width={120}
                height={36}
                className="h-8 w-auto object-contain brightness-0 invert opacity-90 select-none pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
