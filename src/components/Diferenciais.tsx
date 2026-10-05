"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { site } from "@/lib/site-data";
import { Reveal } from "@/components/decor/Reveal";

const features = [
  {
    titulo: "Ingredientes selecionados",
    descricao:
      "Na Tosté, ingrediente bom não é só para compor lista: ele aparece, faz diferença e tem presença em cada colherada.",
  },
  {
    titulo: "Frutas vermelhas desidratadas",
    descricao:
      "Mantendo 98% dos nutrientes, cores vivas e textura macia em cada punhado.",
  },
  {
    titulo: "Super Crocante",
    descricao:
      "Tostado lentamente e embalagem hermética que mantém tudo fresquinho.",
  },
];

const galleryMedia = [
  { type: "video" as const, src: "/images/choc-video.mp4" },
  { type: "image" as const, src: "/images/lifes.jpeg", alt: "Granola tosté lifestyle" },
  { type: "image" as const, src: "/images/sal-3.png", alt: "Granola tosté ervas finas" },
  { type: "image" as const, src: "/images/sal-4.png", alt: "Granola tosté ervas" },
];

function Gallery() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % galleryMedia.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((p) => (p - 1 + galleryMedia.length) % galleryMedia.length);
  }, []);

  useEffect(() => {
    if (galleryMedia[current].type === "video") return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [current, next]);

  const item = galleryMedia[current];

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl lg:min-h-full lg:rounded-none">
      {item.type === "video" ? (
        <video
          key={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt!}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-opacity duration-700"
        />
      )}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/70 text-ink shadow-sm backdrop-blur-sm transition hover:bg-white"
        aria-label="Anterior"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/70 text-ink shadow-sm backdrop-blur-sm transition hover:bg-white"
        aria-label="Próxima"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {galleryMedia.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-verde px-4 py-8 sm:px-6 sm:py-14 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="reveal-scale">
          <div className="overflow-hidden rounded-3xl bg-cream shadow-2xl shadow-black/10">
            <div className="grid lg:grid-cols-[3fr_2fr]">
              {/* Content — 60% */}
              <div className="flex flex-col justify-center px-5 py-7 sm:px-10 sm:py-12 lg:px-14">
                <Reveal className="reveal-left">
                  <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.8rem,4vw,3rem)] leading-[1.15]">
                    <span className="text-accent">vale a pena sair da</span>
                    <br />
                    <span className="text-accent">cama por</span>{" "}
                    <Image
                      src="/images/logo-sem-fundo.png"
                      alt="tosté"
                      width={520}
                      height={220}
                      className="inline-block h-[0.85em] w-auto translate-y-[-0.05em] object-contain"
                    />
                  </h2>
                </Reveal>

                <Reveal delay={100} className="reveal-left">
                  <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
                    Não é a granola básica de mercado. Aqui tudo é feito à mão,
                    com ingredientes reais e generosidade.
                  </p>
                </Reveal>

                <div className="mt-8 space-y-5">
                  {features.map((f, i) => (
                    <Reveal key={f.titulo} delay={200 + i * 100} className="reveal-left">
                      <div className="flex gap-4">
                        <div className="mt-2.5 h-px w-5 shrink-0 bg-accent/50" />
                        <div>
                          <h3 className="font-[family-name:var(--font-heading)] text-[17px] text-ink-strong">
                            {f.titulo}
                          </h3>
                          <p className="mt-1 text-[14px] leading-relaxed text-ink-soft">
                            {f.descricao}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={550} className="reveal-left">
                  <a
                    href={site.comprarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-press mt-8 inline-block rounded-full bg-accent px-10 py-4 text-[13px] font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-accent-hover"
                  >
                    Comprar
                  </a>
                </Reveal>
              </div>

              {/* Gallery — 40% */}
              <Gallery />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
