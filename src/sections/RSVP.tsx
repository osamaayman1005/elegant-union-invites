import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { MiniDivider } from "@/components/Divider";
import { toast } from "sonner";

export function RSVP() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", attending: "yes", guests: 1 });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success(t("thanks"));
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-sage">{t("rsvp")}</p>
        <h2 className="font-script text-5xl md:text-6xl text-moss mt-3">{t("rsvp")}</h2>
        <MiniDivider />
        <p className="text-muted-foreground italic">{t("rsvpDesc")}</p>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          onSubmit={submit}
          className="mt-10 rounded-3xl border border-moss/15 bg-card/70 backdrop-blur p-6 md:p-8 space-y-5 shadow-soft text-start">
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-moss/70 mb-2">{t("name")}</label>
            <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full rounded-full border border-moss/20 bg-ivory/60 px-5 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/30 transition" />
          </div>
          <div>
            <label className="block text-xs tracking-[0.2em] uppercase text-moss/70 mb-2">{t("attending")}</label>
            <div className="grid grid-cols-2 gap-3">
              {(["yes", "no"] as const).map(v => (
                <button type="button" key={v} onClick={() => setForm(f => ({ ...f, attending: v }))}
                  className={`rounded-full px-4 py-3 text-sm tracking-wider transition-all duration-500 border ${
                    form.attending === v ? "bg-moss text-ivory border-moss shadow-soft" : "bg-ivory/40 text-moss border-moss/20 hover:border-moss/50"
                  }`}>{t(v)}</button>
              ))}
            </div>
          </div>
          {form.attending === "yes" && (
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-moss/70 mb-2">{t("guests")}</label>
              <input type="number" min={1} max={6} value={form.guests} onChange={e => setForm(f => ({ ...f, guests: Number(e.target.value) }))}
                className="w-full rounded-full border border-moss/20 bg-ivory/60 px-5 py-3 outline-none focus:border-sage focus:ring-2 focus:ring-sage/30 transition" />
            </div>
          )}
          <button disabled={sent} type="submit"
            className="w-full rounded-full bg-moss text-ivory py-3.5 text-sm tracking-[0.3em] uppercase hover:bg-sage transition-colors duration-500 shadow-soft disabled:opacity-60">
            {sent ? "✓" : t("submit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
