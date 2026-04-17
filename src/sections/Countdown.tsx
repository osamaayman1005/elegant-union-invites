import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useCountdown } from "@/hooks/useCountdown";
import { MiniDivider } from "@/components/Divider";

const TARGET = new Date("2026-06-05T19:00:00");

export function Countdown() {
  const { t } = useLang();
  const { days, hours, minutes, seconds } = useCountdown(TARGET);
  const items = [
    { v: days, l: t("days") },
    { v: hours, l: t("hours") },
    { v: minutes, l: t("mins") },
    { v: seconds, l: t("secs") },
  ];
  return (
    <section className="py-24 px-6 relative">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
        className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-sage">{t("saveDate")}</p>
        <h2 className="font-script text-5xl md:text-6xl text-moss mt-3">{t("countdown")}</h2>
        <MiniDivider />
        <div className="grid grid-cols-4 gap-3 md:gap-6 mt-8">
          {items.map((it, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative aspect-square flex flex-col items-center justify-center rounded-full border border-moss/20 bg-card/60 backdrop-blur shadow-soft">
              <div className="absolute inset-2 rounded-full border border-champagne/40" />
              <span className="font-serif text-3xl md:text-5xl text-moss tabular-nums">{String(it.v).padStart(2, "0")}</span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{it.l}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
