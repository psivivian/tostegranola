"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { flavors } from "@/lib/site-data";
import { ProductModal } from "@/components/ProductModal";
import { Reveal } from "@/components/decor/Reveal";
import type { Flavor } from "@/lib/site-data";

export function SaboresOriginal() {
  const [selected, setSelected] = useState<Flavor | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <section id="sabores" className="bg-cream-panel px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-heading)] text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] text-accent">
              escolha seu motivo
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-center text-[15px] text-ink-soft">
              Quatro sabores, um mais viciante que o outro.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
            {flavors.map((f, i) => (
              <Reveal key={f.slug} delay={80 + i * 60}>
                <button
                  onClick={() => setSelected(f)}
                  className="product-card group relative w-full cursor-pointer overflow-hidden rounded-2xl text-left"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={f.imagemLifestyle}
                      alt={`${f.nome} — granola tosté`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Best Seller — bottom left */}
                    {f.bestSeller && (
                      <div className="absolute bottom-2 left-2 z-10 rounded-full bg-[#c9a84c] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white shadow-md sm:bottom-3 sm:left-3 sm:px-3 sm:py-1 sm:text-[10px]">
                        Best Seller
                      </div>
                    )}

                    {/* "See more" hint — bottom right */}
                    <div className="absolute bottom-2 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-ink/50 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-ink sm:bottom-3 sm:right-3 sm:h-8 sm:w-8">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M1 8c1.5-3.5 4-5 7-5s5.5 1.5 7 5c-1.5 3.5-4 5-7 5s-5.5-1.5-7-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <div className="bg-white px-3 pt-3 pb-3.5 sm:px-5 sm:pt-4 sm:pb-5">
                    <h3
                      className="font-[family-name:var(--font-heading)] text-[14px] sm:text-lg"
                      style={{ color: f.cor }}
                    >
                      {f.nome}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-ink-soft sm:mt-1 sm:text-[13px] sm:leading-relaxed">
                      {f.subtitulo}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductModal flavor={selected} onClose={closeModal} />
    </>
  );
}
