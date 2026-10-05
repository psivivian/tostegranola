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

function TiltCardC({
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
        glowRef.current.style.opacity = "0.25";
        glowRef.current.style.background = `radial-gradient(150px at ${x}px ${y}px, ${flavor.cor}25, transparent 60%)`;
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
    el.style.boxShadow = "0 4px 16px -4px rgba(0,0,0,0.08)";

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
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-white"
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0 4px 16px -4px rgba(0,0,0,0.08)",
      }}
    >
      {/* Glow following mouse */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-200"
      />

      {/* Image — like Version A */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={flavor.imagemLifestyle}
          alt={`${flavor.nome} — granola tosté`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Info bar — subtitle in Roca Two with flavor color */}
      <div className="px-5 pt-4 pb-5">
        <p
          className="font-[family-name:var(--font-heading)] text-[1.05rem] leading-snug"
          style={{ color: flavor.cor }}
        >
          {flavor.subtitulo}
        </p>
      </div>
    </div>
  );
}

export function SaboresC() {
  const [selected, setSelected] = useState<Flavor | null>(null);

  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <section className="bg-cream-panel px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-ink-soft/50">
              Versão C — híbrida
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
                <div className="group">
                  <TiltCardC
                    flavor={f}
                    index={i}
                    onClick={() => setSelected(f)}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProductModal flavor={selected} onClose={closeModal} />
    </>
  );
}
