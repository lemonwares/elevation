"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

export default function PartnershipSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const bankAccounts = [
    {
      currency: "NIGERIA NAIRA(NGN)",
      number: "0651518597",
      name: "TEC-IKY EVENTS",
      bank: "GT BANK",
    },
    {
      currency: "UNITED STATES DOLLAR (USD)",
      number: "0913842655",
      name: "THE ELEVATION CHURCH IKOYI",
      bank: "GT BANK",
    },
  ];

  const pillars = [
    {
      title: "Equip and upskill",
      desc: "Fund scholarships for digital/vocational training and contribute equipment for labs and classrooms.",
    },
    {
      title: "Champion inclusion",
      desc: "Support specialist training, accessibility tools, and program development for children with special needs.",
    },
    {
      title: "Honour the elderly",
      desc: "Sponsor care activities and day centre programming designed for dignity and connection.",
    },
  ];

  return (
    <section
      id="partner"
      className="relative py-24 bg-[#0A0E1A] overflow-hidden select-none"
    >
      {/* Decorative Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto">
        {/* Main Unified Partnership Card */}
        <div className="bg-[#E9EFF5] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.4)] border border-white/10">
          {/* Top Banner: Handshake Graphic */}
          <div className="relative w-full h-[220px] md:h-[320px]">
            <Image
              src="/partnership_handshake.png"
              alt="Partnership Handshake"
              fill
              className="object-cover object-center pointer-events-none"
            />
            {/* Elegant overlay gradient to dim the bottom slightly */}
            <div className="absolute inset-0 bg-linear-to-t from-[#E9EFF5]/30 via-transparent to-black/20" />
          </div>

          {/* Bottom Grid: Partnership Details */}
          <div className="p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start text-[#2C3647]">
            {/* Column 1: Ways to Partner Callout */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-none text-[#0F172A] font-sans">
                  WAYS TO <br />
                  PARTNER
                </h2>
                <div className="w-12 h-1 bg-[#8C6D53]" />
              </div>
              <p className="text-base font-medium leading-relaxed text-[#475569]">
                <strong className="text-[#0F172A] font-bold">
                  Give to build:
                </strong>{" "}
                Invest in infrastructure that translates compassion into
                measurable outcomes. You can transfer to our account details.
              </p>
            </div>

            {/* Column 2: Bank Accounts Details */}
            <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-[#D1DCE8] lg:pl-10">
              {bankAccounts.map((acc, index) => (
                <div key={acc.currency} className="space-y-3 relative group">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#8C6D53]">
                    {acc.currency}
                  </h4>

                  <div className="space-y-1">
                    {/* Interactive Click-to-copy Account Number Block */}
                    <button
                      onClick={() => copyToClipboard(acc.number, acc.currency)}
                      className="flex items-center flex-wrap gap-2 group/btn text-left hover:text-[#8C6D53] transition-colors duration-200 focus:outline-none cursor-pointer"
                    >
                      <span className="text-base font-black tracking-wider text-[#0F172A] group-hover/btn:underline whitespace-nowrap">
                        ACCOUNT NUMBER - {acc.number}
                      </span>
                      <span className="p-1.5 rounded-md bg-[#D1DCE8]/50 text-[#475569] group-hover/btn:bg-[#8C6D53] group-hover/btn:text-white transition-all duration-300">
                        {copiedText === acc.currency ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </span>
                    </button>

                    <p className="text-sm font-bold uppercase tracking-wide text-[#334155]">
                      ACCOUNT NAME - {acc.name}
                    </p>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#334155]">
                      BANK - {acc.bank}
                    </p>
                  </div>

                  {/* Micro-Notification Bubble */}
                  <AnimatePresence>
                    {copiedText === acc.currency && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute -top-10 left-0 bg-[#0F172A] text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl flex items-center gap-1.5 z-20"
                      >
                        <Check className="w-3 h-3 text-emerald-400" />
                        Copied to Clipboard!
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Column 3: Stewardship Pillars */}
            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-[#D1DCE8] lg:pl-10">
              {pillars.map((p) => (
                <div key={p.title} className="space-y-1.5 group">
                  <h4 className="text-base font-extrabold text-[#0F172A] group-hover:text-[#8C6D53] transition-colors duration-200">
                    {p.title}:
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-[#475569]">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
