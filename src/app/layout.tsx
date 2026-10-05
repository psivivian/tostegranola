import type { Metadata } from "next";
import localFont from "next/font/local";
import { Baloo_2 } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const rocaTwo = localFont({
  src: "../fonts/RocaTwo.ttf",
  variable: "--font-roca",
  display: "swap",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tosté — Granola Artesanal",
  description:
    "Granola artesanal feita com ingredientes reais. Um motivo crocante para amar suas manhãs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${rocaTwo.variable} ${GeistSans.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-[family-name:var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
