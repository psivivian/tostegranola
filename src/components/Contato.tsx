import Image from "next/image";
import { site } from "@/lib/site-data";
import { Reveal } from "@/components/decor/Reveal";

const channels = [
  {
    label: "Instagram",
    href: site.instagram,
    texto: site.instagramHandle,
    icone: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: site.whatsapp,
    texto: "Fale conosco",
    icone: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M2 18l1.3-4.7A8 8 0 1114.7 16.7L2 18z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 8.5c0-.3.2-.5.5-.5s.5.2.5.5v1c0 1.4 1.1 2.5 2.5 2.5h1c.3 0 .5.2.5.5s-.2.5-.5.5h-1A3.5 3.5 0 017 9.5v-1z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Shopee",
    href: site.shopeeUrl,
    texto: "Loja oficial",
    icone: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 7h14l-1.5 10H4.5L3 7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Contato() {
  return (
    <section id="contato" className="bg-header px-4 py-8 text-cream sm:px-6 sm:py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-2xl border border-cream/8 bg-cream/[0.03] px-6 py-6 text-center sm:px-10 sm:py-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-verde-claro">
              Revenda & Representantes
            </p>
            <h2 className="mt-3 flex items-center justify-center gap-2 font-[family-name:var(--font-heading)] text-[clamp(1.3rem,3vw,2rem)] leading-[1.2] text-cream">
              quer levar a{" "}
              <Image
                src="/images/logo-sem-fundo.png"
                alt="tosté"
                width={520}
                height={220}
                className="inline-block h-[0.9em] w-auto object-contain brightness-150"
              />{" "}
              para o seu espaço?
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-[14px] leading-relaxed text-cream/45">
              Hotéis, empórios, cafeterias, restaurantes e espaços fitness.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press mt-5 inline-block rounded-full bg-accent px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-accent-hover"
            >
              Fale com nosso time comercial
            </a>
          </div>
        </Reveal>

        <div className="mt-5">
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={150 + i * 60}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 rounded-xl border border-cream/6 px-3 py-3 text-center transition-all duration-200 hover:border-cream/15 hover:bg-cream/5 sm:flex-row sm:gap-4 sm:px-5 sm:text-left"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/8 text-cream transition-colors group-hover:bg-cream/12">
                    {c.icone}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-cream sm:text-[13px]">{c.label}</p>
                    <p className="hidden text-[12px] text-cream/35 sm:block">{c.texto}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={400}>
          <div className="mt-6 border-t border-cream/6 pt-4">
            <p className="text-center text-[12px] text-cream/20">
              Produzido artesanalmente em {site.cidade} · CNPJ {site.cnpj}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
