"use client";

import { useState, useEffect } from "react";
import { site } from "@/lib/site-data";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <div className="border-t border-cream/10 bg-header/95 px-4 py-3 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-2 w-2 items-center justify-center rounded-full bg-verde-claro" />
            <p className="font-[family-name:var(--font-heading)] text-[15px] text-cream/70">
              vale a pena sair da cama por tosté
            </p>
          </div>

          <a
            href={site.comprarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream transition hover:bg-accent-hover sm:w-auto"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h14l-1.5 10H4.5L3 7z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7 7V5a3 3 0 016 0v2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Comprar agora
          </a>
        </div>
      </div>
    </div>
  );
}
