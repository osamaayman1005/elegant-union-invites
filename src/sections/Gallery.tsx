import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { MiniDivider } from "@/components/Divider";

const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80",
  "https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=80",
];

export function Gallery() {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-sage">{t("gallery")}</p>
        <h2 className="font-script text-5xl md:text-6xl text-moss mt-3">{t("gallery")}</h2>
        <MiniDivider />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10">
          {photos.map((src, i) => (
            <motion.button key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              onClick={() => setOpen(src)}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-moss/15 shadow-soft">
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:saturate-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-moss/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-moss/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setOpen(null)}>
            <button className="absolute top-6 right-6 text-ivory" onClick={() => setOpen(null)} aria-label="Close"><X /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} src={open} alt="" className="max-h-[85vh] max-w-full rounded-2xl shadow-glow" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
