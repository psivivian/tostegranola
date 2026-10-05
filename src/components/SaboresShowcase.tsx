"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { Reveal } from "@/components/decor/Reveal";

interface ShowcaseItem {
  num: string;
  name: string;
  image: string;
  color: string;
}

const items: ShowcaseItem[] = [
  {
    num: "01",
    name: "Tradicional",
    image: "/images/close-trad.png",
    color: "#2d4a68",
  },
  {
    num: "02",
    name: "Frutas Vermelhas",
    image: "/images/close-fv.png",
    color: "#97283f",
  },
  {
    num: "03",
    name: "Chocolate Intenso",
    image: "/images/close-choc.png",
    color: "#5c3623",
  },
  {
    num: "04",
    name: "Ervas Finas",
    image: "/images/close-salg.png",
    color: "#5c6b3f",
  },
];

export function SaboresShowcase() {
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
      scale: 1,
      duration: 0.9,
      stagger: { amount: 0.35, from: "random" },
      ease: "expo.out",
    })
      .to(selector, {
        scale: 1.03,
        duration: 1.8,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
        stagger: { amount: 0.15, from: "center" },
      })
      .to(selector, {
        scale: 0,
        duration: 0.7,
        stagger: { amount: 0.25, from: "edges" },
        ease: "expo.in",
      });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      if (imageRef.current)
        imageRef.current.setAttribute("href", items[index].image);
      return;
    }

    createLoop(index);
  };

  return (
    <section className="overflow-hidden bg-cream-panel px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
            {/* Left: flavor menu */}
            <div className="w-full md:w-1/2">
              <nav>
                <ul className="flex flex-col gap-8 md:gap-10">
                  {items.map((item, index) => (
                    <li
                      key={item.num}
                      onMouseEnter={() => handleItemHover(index)}
                      onClick={() => handleItemHover(index)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="mt-1 font-[family-name:var(--font-heading)] text-xl transition-all duration-500 md:text-2xl"
                          style={{
                            color:
                              activeIndex === index
                                ? item.color
                                : "var(--ink-soft)",
                            opacity: activeIndex === index ? 1 : 0.4,
                          }}
                        >
                          {item.num}
                        </span>

                        <h3
                          className="font-[family-name:var(--font-heading)] text-3xl leading-[1.05] transition-all duration-500 md:text-[clamp(2rem,4vw,3.5rem)]"
                          style={{
                            color:
                              activeIndex === index
                                ? "var(--ink-strong)"
                                : "var(--ink-soft)",
                            opacity: activeIndex === index ? 1 : 0.25,
                            transform:
                              activeIndex === index
                                ? "translateX(8px)"
                                : "translateX(0)",
                          }}
                        >
                          {item.name}
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right: bowl SVG animation */}
            <div className="relative flex w-full items-center justify-center md:w-1/2">
              <div
                ref={containerRef}
                className="relative w-full max-w-[440px]"
              >
                <svg
                  viewBox="0 0 500 500"
                  className="h-auto w-full drop-shadow-xl"
                >
                  <defs>
                    <clipPath id="clip-bowl">
                      <ellipse className="bowl-part" cx="235" cy="165" rx="205" ry="30" />
                      <path
                        className="bowl-part"
                        d="M30,170 C30,340 120,460 235,460 C350,460 440,340 440,170 Z"
                      />
                      <path
                        className="bowl-part"
                        d="M310,155 L315,145 L415,50 L425,62 L330,160 Z"
                      />
                    </clipPath>
                  </defs>

                  <g clipPath="url(#clip-bowl)">
                    <image
                      ref={imageRef}
                      href={items[0].image}
                      width="500"
                      height="500"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
