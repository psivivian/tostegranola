"use client";

import { TextWordCarousel } from "@/components/ui/TextWordCarousel";
import { Reveal } from "@/components/decor/Reveal";

const palavras = [
  "açaí",
  "iogurte",
  "pudim de chia",
  "mingau de aveia",
  "caldos",
  "saladas",
];

export function PerfeitoCom() {
  return (
    <section className="bg-cream-panel px-6 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-[family-name:var(--font-heading)] text-[clamp(1.6rem,4vw,2.8rem)] leading-[1.2] text-ink-strong">
            perfeito com{" "}
            <TextWordCarousel
              words={palavras}
              interval={2200}
              duration={0.35}
              className="text-accent"
            />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
