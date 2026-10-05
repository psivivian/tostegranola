"use client";

import {
  useRef,
  useCallback,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import Image from "next/image";
import { flavors, type Flavor } from "@/lib/site-data";
import { ProductModal } from "@/components/ProductModal";
import { Reveal } from "@/components/decor/Reveal";

function TiltCard({
  flavor,
  index,
  onClick,
}: {
  flavor: Flavor;
  index: number;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rx = ((y - height / 2) / (height / 2)) * -8;
      const ry = ((x - width / 2) / (width / 2)) * 8;

      el.style.transition = "box-shadow 400ms";
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.03,1.03,1.03)`;
      el.style.boxShadow = "0 24px 48px -12px rgba(0,0,0,0.18)";

      if (glowRef.current) {
        glowRef.current.style.opacity = "0.3";
        glowRef.current.style.background = `radial-gradient(120px at ${x}px ${y}px, ${flavor.cor}35, transparent 60%)`;
      }
    },
    [flavor.cor]
  );

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transition =
      "transform 600ms cubic-bezier(0.23,1,0.32,1), box-shadow 600ms cubic-bezier(0.23,1,0.32,1)";
    el.style.transform =
      "perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)";
    el.style.boxShadow = "0 4px 16px -4px rgba(0,0,0,0.1)";

    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-square cursor-pointer overflow-hidden rounded-2xl shadow-md"
      style={{
        backgroundColor: flavor.corClara,
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 16px -4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 30% 40%, #000 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 30% 40%, #000 50%, transparent 100%)",
        }}
      />

      {/* Glow following mouse */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200"
      />

      {/* Text content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ background: flavor.cor }}
          />
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: flavor.cor }}
          >
            0{index + 1}
          </span>
        </div>

        <div className="max-w-[55%]">
          <h3
            className="font-[family-name:var(--font-heading)] text-[clamp(1.3rem,3vw,1.8rem)] leading-tight"
            style={{ color: flavor.cor }}
          >
            {flavor.nome}
          </h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft sm:text-[13px]">
            {flavor.subtitulo}
          </p>
          <span
            className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.15em] opacity-60 sm:text-[11px]"
            style={{ color: flavor.cor }}
          >
            Ver detalhes
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.5 2.5l3.5 3.5-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Pack image — mix-blend-multiply removes light background */}
      <div className="pointer-events-none absolute right-[-5%] bottom-[-5%] h-[70%] w-[55%]">
        <Image
          src={flavor.imagemPack}
          alt={flavor.nome}
          fill
          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 25vw, 45vw"
          className="object-contain mix-blend-multiply drop-shadow-lg"
        />
      </div>
    </div>
  );
}

export function Sabores() {
  const [selected, setSelected] = useState<Flavor | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <section className="bg-cream-panel px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-ink-soft/50">
              Versão B — interativa
            </p>
            <h2 className="mt-4 text-center font-[family-name:var(--font-heading)] text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] text-ink-strong">
              escolha seu motivo
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-center text-[15px] text-ink-soft">
              Quatro sabores, um mais viciante que o outro.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {flavors.map((f, i) => (
              <Reveal key={f.slug} delay={80 + i * 80}>
                <TiltCard
                  flavor={f}
                  index={i}
                  onClick={() => setSelected(f)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductModal flavor={selected} onClose={closeModal} />
    </>
  );
}
