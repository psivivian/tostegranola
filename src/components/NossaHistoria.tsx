"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Reveal } from "@/components/decor/Reveal";

interface ShowcaseItem {
  num: string;
  name: string;
  image: string;
  color: string;
}

const items: ShowcaseItem[] = [
  { num: "01", name: "Tradicional", image: "/images/close-trad.png", color: "#2d4a68" },
  { num: "02", name: "Frutas Vermelhas", image: "/images/close-fv.png", color: "#97283f" },
  { num: "03", name: "Chocolate Intenso", image: "/images/close-choc.png", color: "#5c3623" },
  { num: "04", name: "Ervas Finas", image: "/images/close-salg.png", color: "#5c6b3f" },
];

function BowlAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = "#clip-bowl .bowl-part";

    if (masterTl.current) masterTl.current.kill();
    if (imageRef.current) imageRef.current.setAttribute("href", item.image);

    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
    tl.to(selector, {
      scale: 1, duration: 0.9,
      stagger: { amount: 0.35, from: "random" },
      ease: "expo.out",
    })
      .to(selector, {
        scale: 1.03, duration: 1.8, yoyo: true, repeat: 1,
        ease: "sine.inOut",
        stagger: { amount: 0.15, from: "center" },
      })
      .to(selector, {
        scale: 0, duration: 0.7,
        stagger: { amount: 0.25, from: "edges" },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => { createLoop(0); }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      if (imageRef.current) imageRef.current.setAttribute("href", items[index].image);
      return;
    }
    createLoop(index);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div ref={containerRef} className="relative w-full max-w-[300px]">
        <svg viewBox="0 0 500 500" className="h-auto w-full drop-shadow-xl">
          <defs>
            <clipPath id="clip-bowl">
              <ellipse className="bowl-part" cx="235" cy="165" rx="205" ry="30" />
              <path className="bowl-part" d="M30,170 C30,340 120,460 235,460 C350,460 440,340 440,170 Z" />
              <path className="bowl-part" d="M310,155 L315,145 L415,50 L425,62 L330,160 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#clip-bowl)">
            <image ref={imageRef} href={items[0].image} width="500" height="500" preserveAspectRatio="xMidYMid slice" />
          </g>
        </svg>
      </div>

      <nav>
        <ul className="flex flex-wrap justify-center gap-3">
          {items.map((item, index) => (
            <li
              key={item.num}
              onMouseEnter={() => handleItemHover(index)}
              onClick={() => handleItemHover(index)}
              className="cursor-pointer rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all duration-300"
              style={{
                backgroundColor: activeIndex === index ? item.color : "transparent",
                color: activeIndex === index ? "var(--cream)" : "var(--cream)",
                opacity: activeIndex === index ? 1 : 0.5,
                border: `1px solid ${activeIndex === index ? item.color : "rgba(255,255,255,0.2)"}`,
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function StoryCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateY: x * 4,
        rotateX: -y * 4,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div style={{ perspective: "800px" }}>
      <div
        ref={cardRef}
        className="rounded-2xl border border-cream/30 bg-cream/95 px-5 py-6 shadow-lg backdrop-blur-sm sm:px-9 sm:py-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-verde">
          Nossa história
        </p>

        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.2] text-ink-strong">
          Ame suas manhãs
        </h3>

        <div className="mt-4 space-y-4 text-[14px] leading-[1.75] text-ink-soft">
          <p className="font-[family-name:var(--font-heading)] text-[15px] leading-[1.6] text-ink-strong sm:text-[16px]">
            Nem todo dia começa bem — mas a gente descobriu que um começo
            melhor já muda tudo.
          </p>
          <p>
            A Tosté nasceu dentro de casa, em família. Colocamos nosso
            coração em cada pacote — da escolha dos ingredientes ao
            cuidado com cada detalhe da torra.
          </p>
          <p>
            Zero aditivos. Zero conservantes. Apenas ingredientes reais
            que se combinam para te dar um motivo crocante pra sair da
            cama.
          </p>
        </div>
      </div>
    </div>
  );
}

export function NossaHistoria() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / rect.height;
      gsap.set(bg, { y: progress * 40 });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nossa-historia"
      className="relative overflow-hidden bg-verde text-cream"
    >
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[7fr_3fr] lg:gap-14">
          {/* Left: Story card (70%) */}
          <Reveal className="reveal-left">
            <StoryCard />
          </Reveal>

          {/* Right: Bowl animation (30%) */}
          <Reveal>
            <BowlAnimation />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
