"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FacilityDetails() {
  const details = [
    {
      id: "innovation",
      name: "INNOVATION HUB",
      color: "bg-[#DE4444]",
      text: "text-white",
      description:
        "Hands on training in digital and vocational skills, practical labs, and innovation support that translate directly into employability and entrepreneurship for young graduates and early career professionals.",
      image: "/features/innovation.png",
    },
    {
      id: "learning",
      name: "IMMERSIVE LEARNING",
      color: "bg-[#D97706]",
      text: "text-white",
      description:
        "At the heart of our inclusion promise is the purpose built and immersive learning spaces to support the development of children with special needs in line with global standards. The Centre will also train and equip their carers with hands on skills required to ensure that every child is seen, supported and set up to thrive.",
      image: "/features/immersive.png",
    },
    {
      id: "elderly",
      name: "ELDERLY DAY CENTRE",
      color: "bg-[#2563EB]",
      text: "text-white",
      description:
        "A dignified, welcoming environment where senior citizens receive care, companionship, and meaningful social engagement, restoring honour and ensuring they remain connected, valued, and fulfilled.",
      image: "/features/elderly.png",
    },
    {
      id: "library",
      name: "COMMUNITY LIBRARY",
      color: "bg-[#374151]",
      text: "text-white",
      description:
        "A light filled space for literacy, curiosity, and responsible citizenship, supporting reading culture, research, and community learning that empowers individuals and strengthens society.",
      image: "/features/library.png",
    },
    {
      id: "seminar",
      name: "SEMINAR ROOM",
      color: "bg-[#6B5A4E]",
      text: "text-white",
      description:
        "A high-end multipurpose facility equipped with state-of-the-art acoustics, digital projection displays, and customizable modular seating, designed to host masterclasses, seminars, educational courses, and strategic corporate events.",
      image: "/features/seminar.png",
    },
    {
      id: "coworking",
      name: "CO-WORKING SPACE",
      color: "bg-[#C26322]",
      text: "text-white",
      description:
        "A future forward space (for start ups and founders), that supports early stage career professionals. It will support founders, start ups and freelancers with digital tools and infrastructure to launch their businesses, from ideas to impact.",
      image: "/features/coworking.png",
    },
    {
      id: "counselling",
      name: "COUNSELLING OFFICE",
      color: "bg-[#4A3728]",
      text: "text-white",
      description:
        "A peaceful, confidential, and comfortable environment providing guidance, mental health wellness support, and compassionate pastoral care to help individuals and families navigate life's challenges.",
      image: "/features/counselling.png",
    },
    {
      id: "fitness",
      name: "FITNESS CENTER",
      color: "bg-[#7F7F7F]",
      text: "text-white",
      description:
        "A modern, fully-equipped health and wellness center designed to support community physical fitness, active lifestyles, and general physical wellbeing for all age groups.",
      image: "/features/fitness.png",
    },
  ];

  return (
    <section
      id="facility-details"
      className="relative w-full overflow-hidden bg-[#F2F6FA] py-20 lg:py-32 select-none"
    >
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/5 to-transparent pointer-events-none z-0" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-white/50 blur-[100px] pointer-events-none z-0" />

      {/* Content Container (Matches Hero width perfectly) */}
      <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto flex flex-col gap-16">
        {/* Section Heading */}
        <div className="text-left space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#0F172A] uppercase font-sans">
            Explore the Hub
          </h2>
          <p className="text-[#475569] text-base md:text-lg font-light leading-relaxed font-sans">
            Every facility inside Project Lighthouse has been meticulously
            engineered to foster collaboration, empower community growth, and
            provide hands-on care.
          </p>
        </div>

        {/* 3-Column Grid of Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {details.map((feat, i) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-white/80 p-8 rounded-2xl shadow-[0_15px_40px_rgba(15,23,42,0.06)] flex flex-col justify-between h-full group hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] hover:-translate-y-1 transition-all duration-500 gap-6"
            >
              {/* Top part: Colored Badge & Copy */}
              <div className="space-y-4 text-left">
                {/* Heading Tab Badge */}
                <div
                  className={`inline-block px-5 py-2.5 ${feat.color} ${feat.text} font-black text-xs uppercase tracking-widest rounded-lg shadow-md font-sans`}
                >
                  {feat.name}
                </div>
                {/* Description Narrative */}
                <p className="text-[#334155] text-sm md:text-[14.5px] font-light leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>

              {/* Bottom part: FLOATING PHOTO (Polaroid style with border & drop shadow) */}
              <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-black/5 mt-auto group-hover:scale-[1.03] transition-transform duration-500 pointer-events-none select-none">
                <Image
                  src={feat.image}
                  alt={`${feat.name} Photograph`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-w-1024px) 100vw, 350px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
