"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { nav, site } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-header transition-all duration-500 ${
          scrolled
            ? "py-0.5 shadow-lg shadow-black/10"
            : "py-1"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="#" className="relative z-10 flex items-center gap-2">
            <Image
              src="/images/detail.png"
              alt=""
              width={100}
              height={100}
              className={`w-auto rounded-sm object-contain transition-all duration-500 ${
                scrolled ? "h-9" : "h-12"
              }`}
            />
            <Image
              src="/images/logo-sem-fundo.png"
              alt="tosté — granola artesanal"
              width={520}
              height={220}
              priority
              className={`w-auto object-contain brightness-150 transition-all duration-500 ${
                scrolled ? "h-7" : "h-9"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[12px] font-medium uppercase tracking-[0.18em] text-cream/60 transition-colors duration-200 hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.comprarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press hidden rounded-full bg-cream px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-header transition hover:bg-white sm:inline-block"
            >
              Comprar
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-10 flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-0.5 w-5 bg-cream transition-all duration-300 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-cream transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-cream transition-all duration-300 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-header/60 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-menu fixed top-0 right-0 bottom-0 z-40 w-[280px] bg-header px-8 pt-24 lg:hidden ${
          menuOpen ? "menu-open" : ""
        }`}
      >
        <nav className="flex flex-col gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-heading)] text-2xl text-cream/80 transition hover:text-cream"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 border-t border-cream/10 pt-6">
            <a
              href={site.comprarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-block rounded-full bg-cream px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-header"
            >
              Comprar
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
