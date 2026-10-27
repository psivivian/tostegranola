"use client";

import { useRef, useEffect, useState } from "react";
import { Reveal } from "@/components/decor/Reveal";

function CountUp({ target, suffix = "", duration = 1200 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const facts = [
  { target: 0, suffix: "", label: "aditivos", desc: "Zero aditivos" },
  { target: 100, suffix: "%", label: "natural", desc: "100% Natural" },
  { target: 5, suffix: "", label: "motivos crocantes", desc: "pra amar os seus dias" },
];

export function Objecoes() {
  return (
    <section className="bg-cream px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-ink/5">
            {facts.map((f) => (
              <div key={f.label} className="bg-cream px-3 py-6 text-center sm:px-6 sm:py-10">
                <p className="font-[family-name:var(--font-heading)] text-[clamp(2rem,5vw,3.5rem)] leading-none text-accent">
                  <CountUp target={f.target} suffix={f.suffix} duration={f.target > 10 ? 1400 : 600} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-strong sm:mt-3 sm:text-[12px] sm:tracking-[0.2em]">
                  {f.label}
                </p>
                <p className="mt-1 hidden text-[11px] text-ink-soft sm:block">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
