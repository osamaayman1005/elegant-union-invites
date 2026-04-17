import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { MiniDivider } from "@/components/Divider";

export function Venue() {
  const { t } = useLang();
  const query = encodeURIComponent("Masged Al Aly Al Azeem");
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-sage">{t("location")}</p>
        <h2 className="font-script text-5xl md:text-6xl text-moss mt-3">{t("venue")}</h2>
        <MiniDivider />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="mt-8 rounded-3xl overflow-hidden border border-moss/20 shadow-soft">
          <iframe
            title="venue map"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="w-full h-72 md:h-96 grayscale-[20%]"
            loading="lazy"
          />
        </motion.div>
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${query}`} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 mt-6 rounded-full bg-moss text-ivory px-6 py-3 text-sm tracking-[0.2em] uppercase hover:bg-sage transition-colors duration-500 shadow-soft">
          <MapPin className="size-4" /> {t("directions")}
        </a>
      </div>
    </section>
  );
}
