import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const translations: Dict = {
  invitation: { en: "You are cordially invited", ar: "يتشرفون بدعوتكم لحضور حفل زفاف" },
  and: { en: "&", ar: "و" },
  groom: { en: "Osama", ar: "أسامة" },
  bride: { en: "Farah", ar: "فرح" },
  tagline: { en: "Mixing Love & Flavor — Osama & Farah's Way", ar: "حيث يمتزج الحب بالفرح" },
  saveDate: { en: "Save the Date", ar: "احفظوا التاريخ" },
  date: { en: "Friday, June 5th, 2026", ar: "الجمعة، الخامس من يونيو ٢٠٢٦" },
  details: { en: "Event Details", ar: "تفاصيل الحفل" },
  ceremony: { en: "Ceremony & Celebration", ar: "حفل الزفاف" },
  venue: { en: "Masged Al Aly Al Azeem", ar: "مسجد العلي العظيم" },
  time: { en: "Doors open at 7:00 PM", ar: "الأبواب مفتوحة من ٧:٠٠ مساءً" },
  dress: { en: "Dress code: Formal Elegance", ar: "الزي: أناقة رسمية" },
  countdown: { en: "Counting the moments", ar: "نعدّ اللحظات" },
  days: { en: "Days", ar: "يوم" },
  hours: { en: "Hours", ar: "ساعة" },
  mins: { en: "Minutes", ar: "دقيقة" },
  secs: { en: "Seconds", ar: "ثانية" },
  location: { en: "Location", ar: "الموقع" },
  directions: { en: "Get Directions", ar: "الاتجاهات" },
  schedule: { en: "Order of Events", ar: "برنامج الحفل" },
  gallery: { en: "Our Story in Frames", ar: "قصتنا" },
  rsvp: { en: "Kindly Respond", ar: "تأكيد الحضور" },
  rsvpDesc: { en: "Your presence is the greatest gift. Please confirm by May 20th.", ar: "حضوركم أجمل هدية. نرجو التأكيد قبل ٢٠ مايو." },
  name: { en: "Full Name", ar: "الاسم الكامل" },
  attending: { en: "Will you attend?", ar: "هل ستحضر؟" },
  yes: { en: "Joyfully Accepts", ar: "بكل سرور" },
  no: { en: "Regretfully Declines", ar: "للأسف لا أستطيع" },
  guests: { en: "Number of Guests", ar: "عدد المرافقين" },
  submit: { en: "Send Response", ar: "إرسال" },
  thanks: { en: "Thank you! We can't wait to celebrate with you.", ar: "شكراً لكم! نتشوق للاحتفال معكم." },
  music: { en: "Music", ar: "موسيقى" },
  welcome: { en: "Welcome, dear guest", ar: "أهلاً بكم أعزاءنا" },
  scrollDown: { en: "Scroll to discover", ar: "اسحبوا للأسفل" },
  e1t: { en: "Reception", ar: "الاستقبال" }, e1d: { en: "7:00 PM", ar: "٧:٠٠ مساءً" },
  e2t: { en: "Ceremony", ar: "عقد القران" }, e2d: { en: "8:00 PM", ar: "٨:٠٠ مساءً" },
  e3t: { en: "Dinner", ar: "العشاء" }, e3d: { en: "9:30 PM", ar: "٩:٣٠ مساءً" },
  e4t: { en: "Dance & Celebration", ar: "السهرة والرقص" }, e4d: { en: "10:30 PM", ar: "١٠:٣٠ مساءً" },
  footer: { en: "With love, Osama & Farah", ar: "بكل حب، أسامة وفرح" },
};

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof translations) => string; dir: "ltr" | "rtl"; }
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const t = (k: keyof typeof translations) => translations[k]?.[lang] ?? String(k);
  return <LanguageContext.Provider value={{ lang, setLang, t, dir }}>{children}</LanguageContext.Provider>;
}

export const useLang = () => {
  const c = useContext(LanguageContext);
  if (!c) throw new Error("useLang must be used inside LanguageProvider");
  return c;
};
