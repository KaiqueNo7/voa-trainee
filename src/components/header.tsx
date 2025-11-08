"use client";

import { useEffect, useState } from "react";
import { menuItems } from "@/data/menuItems";
import Logo from "./Logo";
import Links from "./Links";
import Cta from "./Cta";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between w-full px-8 py-4 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 z-50"
          : "absolute top-0 left-0 bg-transparent"
      }`}
    >
      <div className="shrink-0">
        <Logo />
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <Links withBackground />
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <Cta text="Começar minha jornada" />
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 cursor-pointer"
          aria-label="Abrir menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full h-fit bg-white/10 backdrop-blur-md border-t border-white/20 shadow-lg md:hidden z-50">
          <nav className="flex flex-col items-center gap-6 py-6">
            {menuItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-semibold opacity-90 hover:opacity-100 transition-opacity duration-300 hover:backdrop-blur-lg px-4 py-2 w-full text-center"
              >
                {item.text}
              </a>
            ))}
            <Cta text="Começar minha jornada" />
          </nav>
        </div>
      )}
    </header>
  );
}
