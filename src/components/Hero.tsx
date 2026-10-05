import { Marquee } from "@/components/decor/Marquee";
import { Reveal } from "@/components/decor/Reveal";

const tickerItems = [
  "granola artesanal",
  "proteica & natural",
  "super crocante",
];

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream pt-16">
        {/* Top stripe */}
        <div className="stripe-bar-lg relative z-10" />

        {/* Video background */}
        <div className="absolute inset-0 top-16">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/images/granola-hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 pt-12 pb-44 text-center sm:pt-32 sm:pb-36 lg:pt-44 lg:pb-48">
          <Reveal>
            <h1 className="font-[family-name:var(--font-heading)] text-[clamp(1.7rem,4.8vw,3.2rem)] leading-[1.05] tracking-[-0.01em] text-verde">
              um motivo crocante para
              <br />
              <em className="italic text-verde">amar</em> suas manhãs.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-2 max-w-md font-[family-name:var(--font-heading)] text-[clamp(0.875rem,2vw,1.1rem)] leading-relaxed text-verde/70">
              granola artesanal, proteica & 100% natural
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#sabores"
                className="btn-press rounded-full bg-accent px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.15em] text-cream transition hover:bg-accent-hover"
              >
                Conheça os sabores
              </a>
            </div>
          </Reveal>
        </div>

      </section>

      {/* Ticker */}
      <div className="py-3 text-cream" style={{ backgroundColor: "#5a100d" }}>
        <Marquee items={tickerItems} />
      </div>
    </>
  );
}
