import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Diferenciais } from "@/components/Diferenciais";
import { SaboresOriginal } from "@/components/SaboresOriginal";
import { PerfeitoCom } from "@/components/PerfeitoCom";
import { NossaHistoria } from "@/components/NossaHistoria";
import { Objecoes } from "@/components/Objecoes";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { WaveDivider } from "@/components/decor/WaveDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Diferenciais />
        <div className="stripe-bar" />
        <SaboresOriginal />
        <PerfeitoCom />
        <WaveDivider topColor="var(--cream-panel)" bottomColor="var(--terracotta)" variant="organic" />
        <NossaHistoria />
        <WaveDivider topColor="var(--terracotta)" bottomColor="var(--cream)" variant="gentle" flip />
        <Objecoes />
        <WaveDivider topColor="var(--cream)" bottomColor="var(--header-bg)" variant="slope" />
      </main>
      <Contato />
      <Footer />
      <StickyBar />
    </>
  );
}
