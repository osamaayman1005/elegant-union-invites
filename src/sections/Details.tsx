import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { MiniDivider } from "@/components/Divider";

export function Details() {
  const { t } = useLang();
  const items = [
    { icon: Calendar, label: t("date") },
    { icon: Clock, label: t("time") },
    { icon: MapPin, label: t("venue") },
    { icon: Sparkles, label: t("dress") },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-sage">{t("details")}</p>
        <h2 className="font-script text-5xl md:text-6xl text-moss mt-3">{t("ceremony")}</h2>
        <MiniDivider />
        <div className="grid sm:grid-cols-2 gap-5 mt-10">
          {items.map((it, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12 }}
              className="rounded-2xl border border-moss/15 bg-card/70 backdrop-blur p-6 flex items-center gap-4 shadow-soft hover:shadow-glow transition-all duration-700">
              <div className="shrink-0 size-12 rounded-full bg-sage/15 flex items-center justify-center">
                <it.icon className="size-5 text-moss" />
              </div>
              <p className="text-start text-foreground/90 leading-snug">{it.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
