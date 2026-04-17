import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import logo from "@/assets/wedding-logo.jpeg";
import floral from "@/assets/floral-corner.png";

export function Hero() {
  const { t, lang } = useLang();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-12">
      {/* Floating florals */}
      <img src={floral} alt="" loading="eager" width={1024} height={1024}
        className="absolute -top-16 -left-16 w-64 md:w-96 opacity-60 animate-float pointer-events-none select-none" />
      <img src={floral} alt="" loading="eager" width={1024} height={1024}
        className="absolute -bottom-20 -right-20 w-72 md:w-[28rem] opacity-50 animate-float pointer-events-none select-none rotate-180" />

      {/* Glow particles */}
      {[...Array(12)].map((_, i) => (
        <span key={i} className="absolute rounded-full bg-champagne/40 blur-sm animate-shimmer pointer-events-none"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 37) % 100}%`,
            width: `${4 + (i % 4) * 3}px`,
            height: `${4 + (i % 4) * 3}px`,
            animationDelay: `${i * 0.4}s`,
          }} />
      ))}

      <motion.p
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 0.2 }}
        className="text-xs md:text-sm tracking-[0.4em] uppercase text-moss/70 mb-8"
      >
        {t("welcome")}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-sage/10 blur-3xl glow-soft" />
        <img src={logo} alt="Osama & Farah wedding logo" width={400} height={400}
          className="relative w-64 md:w-80 h-64 md:h-80 object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, delay: 1 }}
        className="mt-8 text-center"
      >
        {lang === "en" ? (
          <h1 className="font-script text-6xl md:text-8xl text-moss leading-none">
            Osama <span className="text-sage">&</span> Farah
          </h1>
        ) : (
          <h1 className="font-arabic text-5xl md:text-7xl text-moss leading-tight">
            أسامة <span className="text-sage">و</span> فرح
          </h1>
        )}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="ornament-line w-20" />
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-moss/70">{t("date")}</p>
          <div className="ornament-line w-20" />
        </div>
        <p className="mt-4 italic text-muted-foreground text-balance max-w-md mx-auto">{t("tagline")}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-moss/60"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">{t("scrollDown")}</span>
        <div className="w-px h-10 bg-moss/40 animate-pulse" />
      </motion.div>
    </section>
  );
}
