import { useEffect, useState } from "react";
import { X, PartyPopper, Heart, Gift, Star, Baby, BookOpen, Flag, Users, Cake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HolidayInfo {
  emoji: string;
  icon: React.ComponentType<any>;
  pt: string;
  en: string;
  theme: string; // tailwind gradient classes using semantic tokens
}

// Calculates Easter date (Computus algorithm)
function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getMothersDayDate(year: number): Date {
  // 2nd Sunday of May
  const may1 = new Date(year, 4, 1);
  const dayOfWeek = may1.getDay();
  const firstSunday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  return new Date(year, 4, firstSunday + 7);
}

function getFathersDayDate(year: number): Date {
  // 2nd Sunday of August
  const aug1 = new Date(year, 7, 1);
  const dayOfWeek = aug1.getDay();
  const firstSunday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
  return new Date(year, 7, firstSunday + 7);
}

function getTodayHoliday(): HolidayInfo | null {
  const now = new Date(2026, 9, 9); // TESTE: aniversário - voltar para new Date() depois
  const month = now.getMonth(); // 0-indexed
  const day = now.getDate();
  const year = now.getFullYear();

  // Check Easter
  const easter = getEasterDate(year);
  if (month === easter.getMonth() && day === easter.getDate()) {
    return {
      emoji: "🐣",
      icon: Star,
      pt: "Feliz Páscoa! 🐰 Que este dia seja cheio de renovação e esperança!",
      en: "Happy Easter! 🐰 May this day be full of renewal and hope!",
      theme: "from-yellow-500/20 to-pink-500/20 border-yellow-500/30",
    };
  }

  // Mother's Day
  const mothersDay = getMothersDayDate(year);
  if (month === mothersDay.getMonth() && day === mothersDay.getDate()) {
    return {
      emoji: "👩‍👧",
      icon: Heart,
      pt: "Feliz Dia das Mães! 💐 Um abraço especial para todas as mães!",
      en: "Happy Mother's Day! 💐 A special hug for all mothers!",
      theme: "from-pink-500/20 to-rose-500/20 border-pink-500/30",
    };
  }

  // Father's Day
  const fathersDay = getFathersDayDate(year);
  if (month === fathersDay.getMonth() && day === fathersDay.getDate()) {
    return {
      emoji: "👨‍👧",
      icon: Heart,
      pt: "Feliz Dia dos Pais! 💙 Parabéns a todos os pais!",
      en: "Happy Father's Day! 💙 Congratulations to all fathers!",
      theme: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    };
  }

  const holidays: Record<string, HolidayInfo> = {
    "0-1": {
      emoji: "🎆",
      icon: PartyPopper,
      pt: "Feliz Ano Novo! 🥂 Que este ano seja incrível!",
      en: "Happy New Year! 🥂 May this year be amazing!",
      theme: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
    },
    "2-8": {
      emoji: "💜",
      icon: Star,
      pt: "Feliz Dia Internacional da Mulher! 💪 Força e inspiração!",
      en: "Happy International Women's Day! 💪 Strength and inspiration!",
      theme: "from-purple-500/20 to-violet-500/20 border-purple-500/30",
    },
    "4-1": {
      emoji: "⚒️",
      icon: Star,
      pt: "Feliz Dia do Trabalho! 🛠️ Valorize cada conquista!",
      en: "Happy Labour Day! 🛠️ Celebrate every achievement!",
      theme: "from-red-500/20 to-orange-500/20 border-red-500/30",
    },
    "5-12": {
      emoji: "❤️",
      icon: Heart,
      pt: "Feliz Dia dos Namorados! 💕 O amor está no ar!",
      en: "Happy Valentine's Day (Brazil)! 💕 Love is in the air!",
      theme: "from-red-500/20 to-pink-500/20 border-red-500/30",
    },
    "6-20": {
      emoji: "🤝",
      icon: Users,
      pt: "Feliz Dia do Amigo! 🫂 Amizade é o maior tesouro!",
      en: "Happy Friendship Day! 🫂 Friendship is the greatest treasure!",
      theme: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
    "6-26": {
      emoji: "👴👵",
      icon: Heart,
      pt: "Feliz Dia dos Avós! 🤗 Todo carinho do mundo para eles!",
      en: "Happy Grandparents Day! 🤗 All the love in the world for them!",
      theme: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
    },
    "8-7": {
      emoji: "🇧🇷",
      icon: Flag,
      pt: "Feliz Dia da Independência do Brasil! 🇧🇷 Viva o Brasil!",
      en: "Happy Brazilian Independence Day! 🇧🇷 Long live Brazil!",
      theme: "from-green-500/20 to-yellow-500/20 border-green-500/30",
    },
    "9-9": {
      emoji: "🎂",
      icon: Cake,
      pt: "🎉 Hoje é meu aniversário! 🥳 Obrigada por visitar meu portfólio nesse dia especial!",
      en: "🎉 Today is my birthday! 🥳 Thank you for visiting my portfolio on this special day!",
      theme: "from-fuchsia-500/20 to-pink-500/20 border-fuchsia-500/30",
    },
    "9-12": {
      emoji: "👧",
      icon: Baby,
      pt: "Feliz Dia das Crianças & Nsa. Sra. Aparecida! 🙏✨",
      en: "Happy Children's Day & Our Lady of Aparecida! 🙏✨",
      theme: "from-sky-500/20 to-blue-500/20 border-sky-500/30",
    },
    "9-15": {
      emoji: "📚",
      icon: BookOpen,
      pt: "Feliz Dia do Professor! 📖 Gratidão a quem nos ensina!",
      en: "Happy Teacher's Day! 📖 Gratitude to those who teach us!",
      theme: "from-teal-500/20 to-cyan-500/20 border-teal-500/30",
    },
    "11-25": {
      emoji: "🎄",
      icon: Gift,
      pt: "Feliz Natal! 🎅 Que a magia do Natal preencha seu coração!",
      en: "Merry Christmas! 🎅 May the magic of Christmas fill your heart!",
      theme: "from-red-500/20 to-green-500/20 border-red-500/30",
    },
    "11-31": {
      emoji: "🎇",
      icon: PartyPopper,
      pt: "Feliz Réveillon! 🍾 Que o novo ano traga muitas alegrias!",
      en: "Happy New Year's Eve! 🍾 May the new year bring many joys!",
      theme: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
    },
  };

  const key = `${month}-${day}`;
  return holidays[key] || null;
}

// Confetti/particles for birthday
function BirthdayConfetti() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
            fontSize: `${12 + Math.random() * 16}px`,
          }}
        >
          {["🎈", "🎊", "🎉", "⭐", "✨", "🎁"][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>
  );
}

export default function EasterEgg() {
  const [holiday, setHoliday] = useState<HolidayInfo | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const today = getTodayHoliday();
    if (today) {
      const dismissKey = `easter-egg-dismissed-${new Date().toDateString()}`;
      if (!sessionStorage.getItem(dismissKey)) {
        setHoliday(today);
      }
    }
  }, []);

  const handleDismiss = () => {
    const dismissKey = `easter-egg-dismissed-${new Date().toDateString()}`;
    sessionStorage.setItem(dismissKey, "true");
    setDismissed(true);
  };

  if (!holiday || dismissed) return null;

  const isBirthday = true; // TESTE: forçando confetes - voltar para checagem real depois
  const Icon = holiday.icon;

  return (
    <div className="fixed bottom-20 right-6 z-50 animate-in slide-in-from-bottom-4 fade-in duration-700 max-w-sm">
      <div className="relative overflow-hidden rounded-2xl border shadow-2xl">
        {/* Top banner - themed with emojis */}
        <div className={`relative bg-gradient-to-r ${holiday.theme} px-4 py-3 flex items-center justify-between`}>
          {isBirthday && <BirthdayConfetti />}
          <div className="flex items-center gap-2 text-lg">
            {["🎉", holiday.emoji, "✨", holiday.emoji, "🎊"].map((e, i) => (
              <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>
                {e}
              </span>
            ))}
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-full hover:bg-foreground/10 transition-colors text-foreground/60 z-10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Bottom content - icon + text */}
        <div className="bg-background/95 backdrop-blur-xl px-4 py-4 flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground leading-relaxed">
              {language === "pt" ? holiday.pt : holiday.en}
            </p>
            <p className="text-xs text-muted-foreground mt-1.5">
              {language === "pt" ? "Easter egg do dia!" : "Today's easter egg!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
