import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MusicToggle } from "@/components/MusicToggle";
import { Divider } from "@/components/Divider";
import { Hero } from "@/sections/Hero";
import { Countdown } from "@/sections/Countdown";
import { Details } from "@/sections/Details";
import { Schedule } from "@/sections/Schedule";
import { Venue } from "@/sections/Venue";
import { Gallery } from "@/sections/Gallery";
import { RSVP } from "@/sections/RSVP";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Osama & Farah — June 5, 2026" },
      { name: "description", content: "Join us in celebrating the wedding of Osama & Farah on June 5th, 2026 at Masged Al Aly Al Azeem." },
      { property: "og:title", content: "Osama & Farah — June 5, 2026" },
      { property: "og:description", content: "A celebration of love. RSVP to our wedding." },
    ],
  }),
  component: Index,
});

function Footer() {
  const { t } = useLang();
  return (
    <footer className="text-center pb-12 pt-6">
      <Divider />
      <p className="font-script text-3xl text-moss">{t("footer")}</p>
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-2">05 · 06 · 2026</p>
    </footer>
  );
}

function Page() {
  return (
    <div className="relative">
      <div className="fixed top-4 end-4 z-40 flex items-center gap-2">
        <MusicToggle />
        <LanguageToggle />
      </div>
      <Hero />
      <Divider />
      <Countdown />
      <Details />
      <Divider />
      <Schedule />
      <Venue />
      <Divider />
      <Gallery />
      <RSVP />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

function Index() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
