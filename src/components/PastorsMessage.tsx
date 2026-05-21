"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PastorsMessage() {
  return (
    <div id="pastors" className="w-full flex flex-col select-none">
      {/* SECTION 1: GLOBAL LEAD PASTORS (DARK BLUE NAVY BACKDROP) */}
      <section className="relative w-full overflow-hidden bg-[#040810] py-20 lg:py-32 border-b border-zinc-900/40">
        {/* Decorative ambient color glow blobs for premium backdrop */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[150px] pointer-events-none z-0" />

        {/* Content Container (Matches Hero width settings perfectly) */}
        <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visionary Narrative */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Header Tab matching the layout */}
            <div className="inline-block bg-white text-[#040810] px-6 py-3 font-extrabold text-sm uppercase tracking-widest rounded-r-lg shadow-xl mb-4 font-sans border-l-4 border-amber-500">
              Message from our Global Lead Pastors
            </div>

            {/* Letter Paragraphs */}
            <div className="space-y-6 text-zinc-300 text-sm md:text-[15px] font-light leading-relaxed font-sans">
              <p>
                At The Elevation Church, we carry a clear mandate from God to
                make greatness common. This calling goes beyond individual
                success; it is about building people, systems, and institutions
                that raise quality of life, restore dignity, and reflect God's
                Kingdom in practical, lasting ways.
              </p>
              <p>
                Project Lighthouse, expressed through Pistis Hub Ikoyi, is a
                timely expression of this mandate. We have watched this vision
                take shape with clarity, prayer, and intentionality. It
                represents more than a physical development—it's essential
                community infrastructure where worship, leadership, learning,
                innovation, and care converge. A place where young people gain
                skills for meaningful work, families are strengthened, seniors
                honoured, children with special needs supported with dignity,
                and communities given space to grow and thrive.
              </p>
              <p>
                Its strength is in its integration—uniting faith with function
                and compassion with excellence in a measurable, sustainable,
                well-governed way. We are confident in the leadership stewarding
                Project Lighthouse and the values shaping its execution. The
                project team, led by Dr. Kola Fayemi and a dynamic leadership
                group, reflects the ethos of The Elevation Church: excellence,
                deep impact, and faith expressed through service.
              </p>
              <p>
                To our partners, leaders, and friends, we commend this vision.
                Supporting Project Lighthouse is not generosity; it is investing
                in people, strengthening communities, and contributing to a
                legacy that will bear fruit for years to come.
              </p>
            </div>

            {/* Highlight/Emphasis block */}
            <div className="border-l-2 border-amber-500 pl-4 py-1.5 my-8 text-amber-500 font-bold tracking-wide space-y-1">
              <p className="text-[15px] uppercase tracking-wider font-sans">
                This is what it looks like when faith meets impact.
              </p>
              <p className="text-[15px] uppercase tracking-wider font-sans">
                This is what it means to make greatness common.
              </p>
            </div>

            {/* Core Invitation */}
            <p className="text-white text-base font-bold font-sans tracking-wide">
              We invite you to stand with us as we build a lighthouse that will
              shine for generations.
            </p>

            {/* Sign-off Signature */}
            <div className="pt-6 border-t border-zinc-800/80 mt-8">
              <h4 className="text-white text-xl leading-tight font-sans">
                Godman and Bolarinwa Akinlabi
              </h4>
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-1">
                The Visionaries, Project Lighthouse
              </p>
            </div>
          </div>

          {/* Right Column: Pastor's Animated Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[400px] aspect-4/5 flex items-end select-none"
            >
              {/* The Generated Portrait - Floating Cutout Design */}
              <Image
                src="/pastor_godman.png"
                alt="Pastor Godman Akinlabi"
                fill
                className="object-cover object-center pointer-events-none"
                sizes="(max-w-1024px) 100vw, 400px"
              />
              {/* Ambient bottom gradient overlay to cleanly fade the portrait edge into the dark navy backdrop */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#040810] via-[#040810]/85 to-transparent z-20 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RESIDENT PASTOR (LIGHT BEIGE/CREAM BACKDROP) */}
      <section className="relative w-full overflow-hidden bg-[#F4EFE6] py-20 lg:py-32">
        {/* Soft elegant ambient blurs for light theme depth */}
        <div className="absolute top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-[#5D3E31]/5 blur-[120px] pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Resident Pastor Narrative */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Header Tab matching the layout */}
            <div className="inline-block bg-[#5D3E31] text-white px-6 py-3 font-extrabold text-sm uppercase tracking-widest rounded-r-lg shadow-xl mb-4 font-sans border-l-4 border-amber-500">
              Note from the Resident Pastor, The Elevation Church, Ikoyi
            </div>

            {/* Letter Paragraphs */}
            <div className="space-y-6 text-[#4A4339] text-sm md:text-[15px] font-light leading-relaxed font-sans">
              <p>
                Every generation is entrusted by God to build what will outlast
                it—not just structures, but institutions of values, service, and
                impact. Project Lighthouse, Pistis Hub Ikoyi is our response to
                that calling.
              </p>
              <p>
                Pistis Hub is envisioned as essential community infrastructure:
                a faith-rooted, impact-driven centre where worship, leadership,
                innovation, care, and opportunity meet. It is built not as a
                one-off effort, but as a permanent institution serving people,
                strengthening families, and uplifting communities in Lagos.
              </p>
              <p>
                At its heart is a multipurpose auditorium for worship,
                leadership conversations, symposiums, and moments that shape
                values. Around it are integrated impact centres designed to meet
                real needs.
              </p>
              <p>
                There are vocational and digital skills centres preparing young
                people and professionals for meaningful work. Youth hubs promote
                leadership formation, collaboration, and healthy recreation. A
                community library and innovation space support learning,
                research, and solution-building. An elderly day centre restores
                dignity and connection for seniors. Counselling and mentalhealth
                services support families and emotional wellbeing.
              </p>
              <p>
                A central pillar is inclusive learning for children with special
                needs—purpose-built classrooms, trained caregivers, and
                personalised support that honour dignity and unlock potential.
              </p>
              <p>
                This is not temporary charity but long-term stewardship. A
                generational work shaping young people discovering purpose,
                families seeking stability, innovators creating solutions,
                seniors needing community, and children deserving spaces
                designed for their success. It is infrastructure with a soul,
                rooted in the belief that faith must act and love must be lived
                tangibly.
              </p>
              <p>
                To every partner, leader, and friend who has stood with us
                through prayer, generosity, influence, and collaboration, we say
                thank you. Your commitment strengthens this vision.
              </p>
            </div>

            {/* Core Invitation */}
            <p className="text-[#3A3226] text-base font-bold font-sans tracking-wide">
              As we move forward, we invite more partners to join us—not just as
              supporters, but as co-builders of a legacy that will serve
              generations.
            </p>

            {/* Sign-off Signature */}
            <div className="pt-6 border-t border-[#E3D9C9] mt-8">
              <h4 className="text-[#3A3226] text-xl leading-tight font-sans">
                Kola Fayemi PhD
              </h4>
              <p className="text-[#8C7A63] text-xs font-bold uppercase tracking-widest mt-1">
                Project Lead
              </p>
            </div>
          </div>

          {/* Right Column: Pastor's Animated Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[400px] aspect-4/5 flex items-end select-none"
            >
              {/* The Generated Portrait - Floating Cutout Design */}
              <Image
                src="/pastor_kola.png"
                alt="Pastor Kola Fayemi"
                fill
                className="object-cover object-center pointer-events-none"
                sizes="(max-w-1024px) 100vw, 400px"
              />
              {/* Ambient bottom gradient overlay to cleanly fade the portrait edge into the light-beige backdrop */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#F4EFE6] via-[#F4EFE6]/85 to-transparent z-20 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
