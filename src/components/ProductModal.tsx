"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Flavor } from "@/lib/site-data";

type Props = {
  flavor: Flavor | null;
  onClose: () => void;
};

export function ProductModal({ flavor, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!flavor) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      backdropRef.current?.classList.add("modal-open");
    });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [flavor, onClose]);

  if (!flavor) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes: ${flavor.nome}`}
    >
      <div className="modal-content relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-cream sm:rounded-3xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur-sm transition hover:bg-white sm:top-4 sm:right-4 sm:h-10 sm:w-10"
          aria-label="Fechar"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Header with lifestyle image */}
        <div className="relative overflow-hidden rounded-t-3xl sm:rounded-t-3xl">
          <div className="relative aspect-square sm:aspect-[16/10]">
            <Image
              src={flavor.imagemLifestyle}
              alt={`${flavor.nome} — granola tosté com ingredientes`}
              fill
              sizes="(min-width: 640px) 640px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-7 pb-10 sm:px-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3
                className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl"
                style={{ color: flavor.cor }}
              >
                {flavor.nome}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{flavor.tamanhos}</p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {flavor.descricao.split("\n\n").map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          {/* Badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {flavor.destaques.map((d) => (
              <span
                key={d}
                className="rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: flavor.corClara,
                  color: flavor.cor,
                }}
              >
                {d}
              </span>
            ))}
          </div>

          {/* Ingredients */}
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Ingredientes
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              {flavor.ingredientes.join(", ")}.
            </p>
          </div>

          {/* Nutritional table */}
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Informação nutricional
            </h4>
            <p className="mt-1 text-xs text-ink-soft/60">
              Porção de {flavor.nutricional.porcao}
            </p>
            <table className="nutri-table mt-3 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-medium text-ink">Valor energético</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.calorias}</td>
                </tr>
                <tr>
                  <td className="font-medium text-ink">Proteínas</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.proteinas}</td>
                </tr>
                <tr>
                  <td className="font-medium text-ink">Carboidratos</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.carboidratos}</td>
                </tr>
                <tr>
                  <td className="font-medium text-ink">Fibras</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.fibras}</td>
                </tr>
                <tr>
                  <td className="font-medium text-ink">Gorduras totais</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.gordurasTotais}</td>
                </tr>
                <tr>
                  <td className="pl-4 text-ink/70">— saturadas</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.gordurasSaturadas}</td>
                </tr>
                <tr>
                  <td className="font-medium text-ink">Sódio</td>
                  <td className="text-right text-ink-soft">{flavor.nutricional.sodio}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detail image */}
          <div className="mt-8 overflow-hidden rounded-2xl">
            <div className="relative aspect-square">
              <Image
                src={flavor.imagemDetalhe}
                alt={`Detalhe da granola ${flavor.nome}`}
                fill
                sizes="(min-width: 640px) 560px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
