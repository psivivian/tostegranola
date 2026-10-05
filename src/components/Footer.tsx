import Image from "next/image";
import { nav, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-verde px-6 py-6 text-cream/40 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Image
          src="/images/logo-sem-fundo.png"
          alt="tosté"
          width={520}
          height={220}
          className="h-6 w-auto object-contain opacity-40"
        />

        <nav className="flex flex-wrap justify-center gap-6 text-[11px] uppercase tracking-[0.15em]">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] transition-colors hover:text-cream"
        >
          {site.instagramHandle}
        </a>
      </div>
    </footer>
  );
}
