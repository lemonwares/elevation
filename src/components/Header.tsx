"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <div className="flex items-center transition-transform duration-300 hover:scale-[1.02]">
    <Image
      src="https://dextrocloud.com/lhc/wp-content/uploads/2024/08/TEC-Ikoyi-Logo-1.webp"
      alt="The Elevation Church Ikoyi Logo"
      width={160}
      height={48}
      className="h-10 w-auto object-contain brightness-0 invert"
    />
  </div>
);

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down 200px or past the hero section
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", target: "home" },
    { label: "Vision", target: "pastors" },
    { label: "Overview", target: "overview" },
    { label: "Facility", target: "features" },
    { label: "Explore", target: "facility-details" },
    { label: "Sponsors", target: "sponsors" },
    { label: "Partner", target: "partner" },
    { label: "Contact", target: "contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 70; // offset height for the sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible
          ? "translate-y-0 opacity-100 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50 py-3 shadow-lg shadow-black/20"
          : "-translate-y-full opacity-0 pointer-events-none py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="cursor-pointer">
          <Logo />
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.target}`}
              onClick={(e) => handleScrollTo(e, item.target)}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200 relative group py-2 cursor-pointer font-sans"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button Removed */}
        <div className="md:hidden" />
      </div>
    </header>
  );
}
