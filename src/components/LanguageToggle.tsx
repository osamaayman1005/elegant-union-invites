import { useLang } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="rounded-full border border-moss/30 bg-card/80 backdrop-blur px-4 py-2 text-sm tracking-wider text-moss hover:bg-moss hover:text-ivory transition-all duration-500 shadow-sm"
      aria-label="Toggle language"
    >
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
}
