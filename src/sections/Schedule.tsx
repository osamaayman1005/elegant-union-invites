import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { MiniDivider } from "@/components/Divider";

export function Schedule() {
  const { t } = useLang();
  const events = [
    { time: t("e1d"), title: t("e1t") },
    { time: t("e2d"), title: t("e2t") },
    { time: t("e3d"), title: t("e3t") },
    { time: t("e4d"), title: t("e4t") },
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-sage">{t("schedule")}</p>
        <h2 className="font-script text-5xl md:text-6xl text-moss mt-3">{t("schedule")}</h2>
        <MiniDivider />
        <div className="relative mt-12">
          <div className="absolute start-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-moss/30 to-transparent" />
          {events.map((e, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-6">
              <div className={i % 2 === 0 ? "text-end" : "opacity-0 hidden md:block"}>
                {i % 2 === 0 && (<><p className="font-script text-3xl text-moss">{e.title}</p><p className="text-sm text-muted-foreground tracking-widest">{e.time}</p></>)}
              </div>
              <div className="size-3 rounded-full bg-sage ring-4 ring-sage/20" />
              <div className={i % 2 !== 0 ? "text-start" : "opacity-0 hidden md:block"}>
                {i % 2 !== 0 && (<><p className="font-script text-3xl text-moss">{e.title}</p><p className="text-sm text-muted-foreground tracking-widest">{e.time}</p></>)}
              </div>
              <div className="md:hidden col-span-3 text-center -mt-2">
                <p className="font-script text-3xl text-moss">{e.title}</p>
                <p className="text-sm text-muted-foreground tracking-widest">{e.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
