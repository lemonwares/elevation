"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-12 bg-[#0A0E1A] overflow-hidden select-none"
    >
      <div className="relative z-10 w-[92%] md:w-full max-w-6xl mx-auto">
        {/* Main Unified Contact Card */}
        <div className="rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.5)] border border-white/5 bg-[#384358]">
          {/* Top Half: Cinematic Floating 3D Contact Graphic */}
          <div className="relative w-full h-[220px] md:h-[300px]">
            <Image
              src="/contact_3d_icons.png"
              alt="Floating 3D Contact Icons"
              fill
              className="object-cover object-center pointer-events-none"
            />
            {/* Soft dark bottom overlay to transition smoothly into the slate-navy details block */}
            <div className="absolute inset-0 bg-linear-to-t from-[#384358] via-transparent to-black/20" />
          </div>

          {/* Bottom Half: Contact details block */}
          <div className="p-8 md:p-12 lg:p-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start text-white">
            {/* Column 1: Header */}
            <div className="md:col-span-3 flex flex-col gap-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight uppercase font-sans text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-100 to-zinc-300">
                CONTACT US:
              </h2>
              <div className="w-12 h-1 bg-[#8C6D53]" />
            </div>

            {/* Column 2: Mailing Address */}
            <div className="md:col-span-5 space-y-3 md:border-l md:border-white/10 md:pl-8">
              <div className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-[#8C6D53] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#B4C6D8]">
                    Mailing address:
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-zinc-100">
                    The Elevation Church, Ikoyi <br />
                    Pistis Conference Centre <br />
                    Elevation/Resurrection Drive <br />
                    Jakande, Lekki, Lagos.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Email and Phone details */}
            <div className="md:col-span-4 space-y-6 md:border-l md:border-white/10 md:pl-8">
              {/* Email Block */}
              <div className="flex items-start gap-2.5 group">
                <Mail className="w-4 h-4 text-[#8C6D53] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#B4C6D8]">
                    Email:
                  </h4>
                  <a
                    href="mailto:ekinfo@elevationng.org"
                    className="text-sm font-bold text-zinc-100 hover:text-[#8C6D53] transition-colors duration-200 block underline underline-offset-4"
                  >
                    ekinfo@elevationng.org
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start gap-2.5 group">
                <Phone className="w-4 h-4 text-[#8C6D53] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#B4C6D8]">
                    Phone:
                  </h4>
                  <a
                    href="tel:+2347003538283"
                    className="text-sm font-bold text-zinc-100 hover:text-[#8C6D53] transition-colors duration-200 block"
                  >
                    +234 700 ELEVATE (353 8283)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Bottom Branding Copy */}
        <div className="mt-8 text-center text-zinc-600 text-xs font-medium tracking-wider">
          © {new Date().getFullYear()} THE ELEVATION CHURCH IKOYI. ALL RIGHTS
          RESERVED.
        </div>
      </div>
    </section>
  );
}
