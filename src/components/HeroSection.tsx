import Image from "next/image";

const HeroLogo = () => (
  <div className="flex items-center gap-3 bg-black/35 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-black/50 hover:border-white/20">
    <Image
      src="https://dextrocloud.com/lhc/wp-content/uploads/2024/08/TEC-Ikoyi-Logo-1.webp"
      alt="The Elevation Church Ikoyi Logo"
      width={180}
      height={54}
      className="h-12 w-auto object-contain brightness-0 invert"
    />
  </div>
);

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center overflow-hidden bg-black select-none"
    >
      {/* Background Image with priority loading */}
      <Image
        src="/lighthouse_hero.png"
        alt="Lighthouse on stormy sea at night"
        fill
        priority
        className="object-cover object-center scale-105 animate-[zoomSlow_20s_infinite_alternate] z-0 opacity-85"
      />

      {/* Modern Radial and Linear Overlays for readability and premium look */}
      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/20 to-black/50 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-zinc-950/80 via-transparent to-transparent z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 w-[92%] md:w-full max-w-6xl mx-auto flex flex-col items-start gap-8 mt-12 md:mt-0">
        <div className="flex flex-col gap-5 max-w-3xl">
          {/* Main Title with modern letters tracking */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[0.82] uppercase font-sans drop-shadow-2xl">
            Project <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-amber-200">
              Lighthouse
            </span>
          </h1>

          {/* Connected Two-Color Badge */}
          <div className="flex flex-row items-stretch rounded-lg overflow-hidden shadow-2xl border border-white/10 w-fit">
            {/* Gold/Yellow left part */}
            <div className="bg-[#E9B958] px-4 py-2.5 flex items-center">
              <span className="text-xs md:text-sm font-black tracking-wider text-black uppercase font-sans">
                Pistis Hub:
              </span>
            </div>
            {/* Coral/Red right part */}
            <div className="bg-[#DE4444] px-5 py-2.5 flex items-center">
              <span className="text-xs md:text-sm font-extrabold tracking-widest text-white uppercase font-sans">
                Faith | Community | Impact
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Logo in the Bottom Right */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block">
        <HeroLogo />
      </div>

      {/* Floating Scroll Indicator in Bottom Center */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-400">
          Scroll to explore
        </span>
        <div className="w-5 h-8 border-2 border-zinc-500/80 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
        </div>
      </div> */}
    </section>
  );
}
