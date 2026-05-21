"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SponsorsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-cycle through the 4 logo slide sets every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slideLogos = [
    // Slide 1
    [
      { id: "office of climate", name: "Lagos State Government Climate Change & Circular Economy", ext: "png", scale: 1.1 },
      { id: "nile group", name: "Nile Group", ext: "png" },
      { id: "aspire hmo", name: "Aspire HMO", ext: "png" },
      { id: "convergence law", name: "Convergence Law", ext: "png" },
      { id: "lebara logo", name: "Lebara", ext: "svg", scale: 1.25 },
      { id: "maltina", name: "Maltina", ext: "jpg" },
      { id: "pavestones", name: "Pavestones", ext: "png" },
    ],
    // Slide 2
    [
      { id: "ashbard energy", name: "Ashbard Energy", ext: "jpg" },
      { id: "bethan clothing", name: "Bethan Clothing", ext: "jpg" },
      { id: "comercio partners", name: "Comercio Partners", ext: "png" },
      { id: "lssc", name: "LSSC", ext: "png", scale: 1.25 },
      { id: "mepb", name: "MEPB", ext: "png", scale: 1.25 },
      { id: "kaya", name: "Kaya", ext: "png", scale: 1.15 },
      { id: "ava securities", name: "AVA Partners", ext: "png" },
      { id: "lumzy", name: "Lumzy Coffee Co.", ext: "svg", scale: 1.25 },
      { id: "magna", name: "Magna Global Ventures", ext: "svg", scale: 1.2 },
    ],
    // Slide 3
    [
      { id: "pivot", name: "Pivot Integrated Energy Services", ext: "jpg", scale: 1.15 },
      { id: "st clairs", name: "St Clare's Nursery", ext: "jpg", scale: 1.2 },
      { id: "travices", name: "Travices Travel Services", ext: "jpg", scale: 1.15 },
      { id: "small small", name: "SmallSmall Smart Living", ext: "jpg", scale: 1.2 },
      { id: "the special youth", name: "The Special Youth", ext: "jpg", scale: 1.25 },
      { id: "plentytech", name: "Plentytech", ext: "avif", scale: 1.15 },
      { id: "tigle", name: "Tigle Dredging & Construction", ext: "svg", scale: 1.15 },
    ],
    // Slide 4
    [
      { id: "secure point", name: "Secure-Point", ext: "jpg", scale: 1.2 },
      { id: "victoria crest homes", name: "Victoria Crest Homes", ext: "png" },
      { id: "VAS2Nets-Logo", name: "VAS2Nets Technologies Limited", ext: "png" },
      { id: "lagos_black", name: "Lagos Black", ext: "svg", scale: 1.2 },
      { id: "erl", name: "ERL", ext: "svg", scale: 1.2 },
    ],
  ];

  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden bg-white py-20 lg:py-28 select-none"
    >
      {/* Divider border at top */}
      <div className="absolute top-0 left-12 right-12 h-px bg-zinc-200/50" />

      {/* Grid container matches core max-w-6xl width perfectly */}
      <div className="w-[92%] md:w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Double-block Header & Cursive Thank You */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6">
          {/* Symmetrical Double-Block Tag (Partners & Sponsors) */}
          <div className="flex flex-col rounded overflow-hidden shadow-sm w-fit border border-[#8C6D53]/25 select-none">
            {/* Top segment */}
            <div className="bg-[#8C6D53] px-5 py-2">
              <span className="text-[10px] font-black tracking-[0.25em] text-white uppercase font-sans block">
                TO OUR
              </span>
            </div>
            {/* Bottom segment */}
            <div className="bg-[#8C6D53] px-5 py-2.5 border-t border-white/10">
              <span className="text-xs font-black tracking-[0.2em] text-white uppercase font-sans block">
                PARTNERS & SPONSORS
              </span>
            </div>
          </div>

          {/* Calligraphic/Handwritten Thank You graphic using Youra Script font */}
          <div className="relative select-none w-full py-2">
            <span className="font-script text-7xl md:text-8xl text-[#8C6D53] block transform -rotate-3 select-none tracking-normal">
              Thank You
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Fading Carousel of Stylized Partner Logos */}
        <div className="lg:col-span-7 relative min-h-[220px] flex flex-col justify-between py-2 border-l border-zinc-100 lg:pl-12">
          <div className="relative w-full h-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8 items-center justify-items-center"
              >
                {slideLogos[activeSlide].map((logo) => {
                  const baseScale = logo.scale || 1.0;
                  return (
                    <div
                      key={logo.id}
                      className="w-full h-16 md:h-20 flex items-center justify-center transition-all duration-300 select-none group"
                    >
                      <div
                        className="w-full h-full flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          transform: `scale(${baseScale})`,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/sponsors/${logo.id}.${logo.ext || "png"}`}
                          alt={logo.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-[1.08]"
                        />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator for Active Carousel Page */}
          <div className="flex gap-2 justify-center lg:justify-start mt-8 pt-4">
            {[0, 1, 2, 3].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === idx
                    ? "bg-[#8C6D53] w-6"
                    : "bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to sponsors slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
