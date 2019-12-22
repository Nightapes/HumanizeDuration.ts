/* eslint-disable @typescript-eslint/camelcase */
import { Language, LanguageItem } from "./humanize-duration.interface";

export class HumanizeDurationLanguage {
  languages: LanguageItem = {
    ar: {
      y: (c: number) => {
        return c === 1 ? "سنة" : "سنوات";
      },
      mo: (c: number) => {
        return c === 1 ? "شهر" : "أشهر";
      },
      w: (c: number) => {
        return c === 1 ? "أسبوع" : "أسابيع";
      },
      d: (c: number) => {
        return c === 1 ? "يوم" : "أيام";
      },
      h: (c: number) => {
        return c === 1 ? "ساعة" : "ساعات";
      },
      m: (c: number) => {
        return c === 1 ? "دقيقة" : "دقائق";
      },
      s: (c: number) => {
        return c === 1 ? "ثانية" : "ثواني";
      },
      ms: (c: number) => {
        return c === 1 ? "جزء من الثانية" : "أجزاء من الثانية";
      },
      decimal: ","
    },
    ca: {
      y: (c: number) => {
        return "number" + (c !== 1 ? "s" : "");
      },
      mo: (c: number) => {
        return "mes" + (c !== 1 ? "os" : "");
      },
      w: (c: number) => {
        return "setman" + (c !== 1 ? "es" : "a");
      },
      d: (c: number) => {
        return "di" + (c !== 1 ? "es" : "a");
      },
      h: (c: number) => {
        return "hor" + (c !== 1 ? "es" : "a");
      },
      m: (c: number) => {
        return "minut" + (c !== 1 ? "s" : "");
      },
      s: (c: number) => {
        return "segon" + (c !== 1 ? "s" : "");
      },
      ms: (c: number) => {
        return "milisegon" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    cs: {
      y: (c: number) => {
        return ["rok", "roku", "roky", "let"][this.getCzechForm(c)];
      },
      mo: (c: number) => {
        return ["měsíc", "měsíce", "měsíce", "měsíců"][this.getCzechForm(c)];
      },
      w: (c: number) => {
        return ["týden", "týdne", "týdny", "týdnů"][this.getCzechForm(c)];
      },
      d: (c: number) => {
        return ["den", "dne", "dny", "dní"][this.getCzechForm(c)];
      },
      h: (c: number) => {
        return ["hodina", "hodiny", "hodiny", "hodin"][this.getCzechForm(c)];
      },
      m: (c: number) => {
        return ["minuta", "minuty", "minuty", "minut"][this.getCzechForm(c)];
      },
      s: (c: number) => {
        return ["sekunda", "sekundy", "sekundy", "sekund"][
          this.getCzechForm(c)
        ];
      },
      ms: (c: number) => {
        return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][
          this.getCzechForm(c)
        ];
      },
      decimal: ","
    },
    da: {
      y: () => "år",
      mo: (c: number) => {
        return "måned" + (c !== 1 ? "er" : "");
      },
      w: (c: number) => {
        return "uge" + (c !== 1 ? "r" : "");
      },
      d: (c: number) => {
        return "dag" + (c !== 1 ? "e" : "");
      },
      h: (c: number) => {
        return "time" + (c !== 1 ? "r" : "");
      },
      m: (c: number) => {
        return "minut" + (c !== 1 ? "ter" : "");
      },
      s: (c: number) => {
        return "sekund" + (c !== 1 ? "er" : "");
      },
      ms: (c: number) => {
        return "millisekund" + (c !== 1 ? "er" : "");
      },
      decimal: ","
    },
    de: {
      y: (c: number) => {
        return "Jahr" + (c !== 1 ? "e" : "");
      },
      mo: (c: number) => {
        return "Monat" + (c !== 1 ? "e" : "");
      },
      w: (c: number) => {
        return "Woche" + (c !== 1 ? "n" : "");
      },
      d: (c: number) => {
        return "Tag" + (c !== 1 ? "e" : "");
      },
      h: (c: number) => {
        return "Stunde" + (c !== 1 ? "n" : "");
      },
      m: (c: number) => {
        return "Minute" + (c !== 1 ? "n" : "");
      },
      s: (c: number) => {
        return "Sekunde" + (c !== 1 ? "n" : "");
      },
      ms: (c: number) => {
        return "Millisekunde" + (c !== 1 ? "n" : "");
      },
      decimal: ","
    },
    en: {
      y: (c: number) => {
        return "year" + (c !== 1 ? "s" : "");
      },
      mo: (c: number) => {
        return "month" + (c !== 1 ? "s" : "");
      },
      w: (c: number) => {
        return "week" + (c !== 1 ? "s" : "");
      },
      d: (c: number) => {
        return "day" + (c !== 1 ? "s" : "");
      },
      h: (c: number) => {
        return "hour" + (c !== 1 ? "s" : "");
      },
      m: (c: number) => {
        return "minute" + (c !== 1 ? "s" : "");
      },
      s: (c: number) => {
        return "second" + (c !== 1 ? "s" : "");
      },
      ms: (c: number) => {
        return "millisecond" + (c !== 1 ? "s" : "");
      },
      decimal: "."
    },
    es: {
      y: (c: number) => {
        return "año" + (c !== 1 ? "s" : "");
      },
      mo: (c: number) => {
        return "mes" + (c !== 1 ? "es" : "");
      },
      w: (c: number) => {
        return "semana" + (c !== 1 ? "s" : "");
      },
      d: (c: number) => {
        return "día" + (c !== 1 ? "s" : "");
      },
      h: (c: number) => {
        return "hora" + (c !== 1 ? "s" : "");
      },
      m: (c: number) => {
        return "minuto" + (c !== 1 ? "s" : "");
      },
      s: (c: number) => {
        return "segundo" + (c !== 1 ? "s" : "");
      },
      ms: (c: number) => {
        return "milisegundo" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    fi: {
      y: (c: number) => {
        return c === 1 ? "vuosi" : "vuotta";
      },
      mo: (c: number) => {
        return c === 1 ? "kuukausi" : "kuukautta";
      },
      w: (c: number) => {
        return "viikko" + (c !== 1 ? "a" : "");
      },
      d: (c: number) => {
        return "päivä" + (c !== 1 ? "ä" : "");
      },
      h: (c: number) => {
        return "tunti" + (c !== 1 ? "a" : "");
      },
      m: (c: number) => {
        return "minuutti" + (c !== 1 ? "a" : "");
      },
      s: (c: number) => {
        return "sekunti" + (c !== 1 ? "a" : "");
      },
      ms: (c: number) => {
        return "millisekunti" + (c !== 1 ? "a" : "");
      },
      decimal: ","
    },
    fr: {
      y: (c: number) => {
        return "an" + (c !== 1 ? "s" : "");
      },
      mo: () => "mois",
      w: (c: number) => {
        return "semaine" + (c !== 1 ? "s" : "");
      },
      d: (c: number) => {
        return "jour" + (c !== 1 ? "s" : "");
      },
      h: (c: number) => {
        return "heure" + (c !== 1 ? "s" : "");
      },
      m: (c: number) => {
        return "minute" + (c !== 1 ? "s" : "");
      },
      s: (c: number) => {
        return "seconde" + (c !== 1 ? "s" : "");
      },
      ms: (c: number) => {
        return "milliseconde" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    gr: {
      y: (c: number) => {
        return c === 1 ? "χρόνος" : "χρόνια";
      },
      mo: (c: number) => {
        return c === 1 ? "μήνας" : "μήνες";
      },
      w: (c: number) => {
        return c === 1 ? "εβδομάδα" : "εβδομάδες";
      },
      d: (c: number) => {
        return c === 1 ? "μέρα" : "μέρες";
      },
      h: (c: number) => {
        return c === 1 ? "ώρα" : "ώρες";
      },
      m: (c: number) => {
        return c === 1 ? "λεπτό" : "λεπτά";
      },
      s: (c: number) => {
        return c === 1 ? "δευτερόλεπτο" : "δευτερόλεπτα";
      },
      ms: (c: number) => {
        return c === 1
          ? "χιλιοστό του δευτερολέπτου"
          : "χιλιοστά του δευτερολέπτου";
      },
      decimal: ","
    },
    hu: {
      y: () => "év",
      mo: () => "hónap",
      w: () => "hét",
      d: () => "nap",
      h: () => "óra",
      m: () => "perc",
      s: () => "másodperc",
      ms: () => "ezredmásodperc",
      decimal: ","
    },
    id: {
      y: () => "tahun",
      mo: () => "bulan",
      w: () => "minggu",
      d: () => "hari",
      h: () => "jam",
      m: () => "menit",
      s: () => "detik",
      ms: () => "milidetik",
      decimal: "."
    },
    it: {
      y: (c: number) => {
        return "ann" + (c !== 1 ? "i" : "o");
      },
      mo: (c: number) => {
        return "mes" + (c !== 1 ? "i" : "e");
      },
      w: (c: number) => {
        return "settiman" + (c !== 1 ? "e" : "a");
      },
      d: (c: number) => {
        return "giorn" + (c !== 1 ? "i" : "o");
      },
      h: (c: number) => {
        return "or" + (c !== 1 ? "e" : "a");
      },
      m: (c: number) => {
        return "minut" + (c !== 1 ? "i" : "o");
      },
      s: (c: number) => {
        return "second" + (c !== 1 ? "i" : "o");
      },
      ms: (c: number) => {
        return "millisecond" + (c !== 1 ? "i" : "o");
      },
      decimal: ","
    },
    ja: {
      y: () => "年",
      mo: () => "月",
      w: () => "週",
      d: () => "日",
      h: () => "時間",
      m: () => "分",
      s: () => "秒",
      ms: () => "ミリ秒",
      decimal: "."
    },
    ko: {
      y: () => "년",
      mo: () => "개월",
      w: () => "주일",
      d: () => "일",
      h: () => "시간",
      m: () => "분",
      s: () => "초",
      ms: () => "밀리 초",
      decimal: "."
    },
    lt: {
      y: (c: number) => {
        return c % 10 === 0 || (c % 100 >= 10 && c % 100 <= 20)
          ? "metų"
          : "metai";
      },
      mo: (c: number) => {
        return ["mėnuo", "mėnesiai", "mėnesių"][this.getLithuanianForm(c)];
      },
      w: (c: number) => {
        return ["savaitė", "savaitės", "savaičių"][this.getLithuanianForm(c)];
      },
      d: (c: number) => {
        return ["diena", "dienos", "dienų"][this.getLithuanianForm(c)];
      },
      h: (c: number) => {
        return ["valanda", "valandos", "valandų"][this.getLithuanianForm(c)];
      },
      m: (c: number) => {
        return ["minutė", "minutės", "minučių"][this.getLithuanianForm(c)];
      },
      s: (c: number) => {
        return ["sekundė", "sekundės", "sekundžių"][this.getLithuanianForm(c)];
      },
      ms: (c: number) => {
        return ["milisekundė", "milisekundės", "milisekundžių"][
          this.getLithuanianForm(c)
        ];
      },
      decimal: ","
    },
    ms: {
      y: () => "tahun",
      mo: () => "bulan",
      w: () => "minggu",
      d: () => "hari",
      h: () => "jam",
      m: () => "minit",
      s: () => "saat",
      ms: () => "milisaat",
      decimal: "."
    },
    nl: {
      y: () => "jaar",
      mo: (c: number) => {
        return c === 1 ? "maand" : "maanden";
      },
      w: (c: number) => {
        return c === 1 ? "week" : "weken";
      },
      d: (c: number) => {
        return c === 1 ? "dag" : "dagen";
      },
      h: () => "uur",
      m: (c: number) => {
        return c === 1 ? "minuut" : "minuten";
      },
      s: (c: number) => {
        return c === 1 ? "seconde" : "seconden";
      },
      ms: (c: number) => {
        return c === 1 ? "milliseconde" : "milliseconden";
      },
      decimal: ","
    },
    no: {
      y: () => "år",
      mo: (c: number) => {
        return "måned" + (c !== 1 ? "er" : "");
      },
      w: (c: number) => {
        return "uke" + (c !== 1 ? "r" : "");
      },
      d: (c: number) => {
        return "dag" + (c !== 1 ? "er" : "");
      },
      h: (c: number) => {
        return "time" + (c !== 1 ? "r" : "");
      },
      m: (c: number) => {
        return "minutt" + (c !== 1 ? "er" : "");
      },
      s: (c: number) => {
        return "sekund" + (c !== 1 ? "er" : "");
      },
      ms: (c: number) => {
        return "millisekund" + (c !== 1 ? "er" : "");
      },
      decimal: ","
    },
    pl: {
      y: (c: number) => {
        return ["rok", "roku", "lata", "lat"][this.getPolishForm(c)];
      },
      mo: (c: number) => {
        return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][
          this.getPolishForm(c)
        ];
      },
      w: (c: number) => {
        return ["tydzień", "tygodnia", "tygodnie", "tygodni"][
          this.getPolishForm(c)
        ];
      },
      d: (c: number) => {
        return ["dzień", "dnia", "dni", "dni"][this.getPolishForm(c)];
      },
      h: (c: number) => {
        return ["godzina", "godziny", "godziny", "godzin"][
          this.getPolishForm(c)
        ];
      },
      m: (c: number) => {
        return ["minuta", "minuty", "minuty", "minut"][this.getPolishForm(c)];
      },
      s: (c: number) => {
        return ["sekunda", "sekundy", "sekundy", "sekund"][
          this.getPolishForm(c)
        ];
      },
      ms: (c: number) => {
        return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][
          this.getPolishForm(c)
        ];
      },
      decimal: ","
    },
    pt: {
      y: (c: number) => {
        return "ano" + (c !== 1 ? "s" : "");
      },
      mo: (c: number) => {
        return c !== 1 ? "meses" : "mês";
      },
      w: (c: number) => {
        return "semana" + (c !== 1 ? "s" : "");
      },
      d: (c: number) => {
        return "dia" + (c !== 1 ? "s" : "");
      },
      h: (c: number) => {
        return "hora" + (c !== 1 ? "s" : "");
      },
      m: (c: number) => {
        return "minuto" + (c !== 1 ? "s" : "");
      },
      s: (c: number) => {
        return "segundo" + (c !== 1 ? "s" : "");
      },
      ms: (c: number) => {
        return "milissegundo" + (c !== 1 ? "s" : "");
      },
      decimal: ","
    },
    ru: {
      y: (c: number) => {
        return ["лет", "год", "года"][this.getSlavicForm(c)];
      },
      mo: (c: number) => {
        return ["месяцев", "месяц", "месяца"][this.getSlavicForm(c)];
      },
      w: (c: number) => {
        return ["недель", "неделя", "недели"][this.getSlavicForm(c)];
      },
      d: (c: number) => {
        return ["дней", "день", "дня"][this.getSlavicForm(c)];
      },
      h: (c: number) => {
        return ["часов", "час", "часа"][this.getSlavicForm(c)];
      },
      m: (c: number) => {
        return ["минут", "минута", "минуты"][this.getSlavicForm(c)];
      },
      s: (c: number) => {
        return ["секунд", "секунда", "секунды"][this.getSlavicForm(c)];
      },
      ms: (c: number) => {
        return ["миллисекунд", "миллисекунда", "миллисекунды"][
          this.getSlavicForm(c)
        ];
      },
      decimal: ","
    },
    uk: {
      y: (c: number) => {
        return ["років", "рік", "роки"][this.getSlavicForm(c)];
      },
      mo: (c: number) => {
        return ["місяців", "місяць", "місяці"][this.getSlavicForm(c)];
      },
      w: (c: number) => {
        return ["неділь", "неділя", "неділі"][this.getSlavicForm(c)];
      },
      d: (c: number) => {
        return ["днів", "день", "дні"][this.getSlavicForm(c)];
      },
      h: (c: number) => {
        return ["годин", "година", "години"][this.getSlavicForm(c)];
      },
      m: (c: number) => {
        return ["хвилин", "хвилина", "хвилини"][this.getSlavicForm(c)];
      },
      s: (c: number) => {
        return ["секунд", "секунда", "секунди"][this.getSlavicForm(c)];
      },
      ms: (c: number) => {
        return ["мілісекунд", "мілісекунда", "мілісекунди"][
          this.getSlavicForm(c)
        ];
      },
      decimal: ","
    },
    sv: {
      y: () => "år",
      mo: (c: number) => {
        return "månad" + (c !== 1 ? "er" : "");
      },
      w: (c: number) => {
        return "veck" + (c !== 1 ? "or" : "a");
      },
      d: (c: number) => {
        return "dag" + (c !== 1 ? "ar" : "");
      },
      h: (c: number) => {
        return "timm" + (c !== 1 ? "ar" : "e");
      },
      m: (c: number) => {
        return "minut" + (c !== 1 ? "er" : "");
      },
      s: (c: number) => {
        return "sekund" + (c !== 1 ? "er" : "");
      },
      ms: (c: number) => {
        return "millisekund" + (c !== 1 ? "er" : "");
      },
      decimal: ","
    },
    tr: {
      y: () => "yıl",
      mo: () => "ay",
      w: () => "hafta",
      d: () => "gün",
      h: () => "saat",
      m: () => "dakika",
      s: () => "saniye",
      ms: () => "milisaniye",
      decimal: ","
    },
    vi: {
      y: () => "năm",
      mo: () => "tháng",
      w: () => "tuần",
      d: () => "ngày",
      h: () => "giờ",
      m: () => "phút",
      s: () => "giây",
      ms: () => "mili giây",
      decimal: ","
    },
    zh_CN: {
      y: () => "年",
      mo: () => "个月",
      w: () => "周",
      d: () => "天",
      h: () => "小时",
      m: () => "分钟",
      s: () => "秒",
      ms: () => "毫秒",
      decimal: "."
    },
    zh_TW: {
      y: () => "年",
      mo: () => "個月",
      w: () => "周",
      d: () => "天",
      h: () => "小時",
      m: () => "分鐘",
      s: () => "秒",
      ms: () => "毫秒",
      decimal: "."
    }
  };

  addLanguage(key: string, lang: Language) {
    this.languages[key] = lang;
  }

  // Internal helper function for Czech language.
  getCzechForm(c: number) {
    if (c === 1) {
      return 0;
    } else if (Math.floor(c) !== c) {
      return 1;
    } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
      return 2;
    } else {
      return 3;
    }
  }

  // Internal helper function for Polish language.
  getPolishForm(c: number) {
    if (c === 1) {
      return 0;
    } else if (Math.floor(c) !== c) {
      return 1;
    } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
      return 2;
    } else {
      return 3;
    }
  }

  // Internal helper function for Russian and Ukranian languages.
  getSlavicForm(c: number) {
    if (Math.floor(c) !== c) {
      return 2;
    } else if (
      (c >= 5 && c <= 20) ||
      (c % 10 >= 5 && c % 10 <= 9) ||
      c % 10 === 0
    ) {
      return 0;
    } else if (c % 10 === 1) {
      return 1;
    } else if (c > 1) {
      return 2;
    } else {
      return 0;
    }
  }

  // Internal helper function for Lithuanian language.
  getLithuanianForm(c: number) {
    if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
      return 0;
    } else if (
      Math.floor(c) !== c ||
      (c % 10 >= 2 && c % 100 > 20) ||
      (c % 10 >= 2 && c % 100 < 10)
    ) {
      return 1;
    } else {
      return 2;
    }
  }
}
