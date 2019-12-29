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
        return ["دقيقة", "دقائق"][this.getArabicForm(c)];
      },
      s: (c: number) => {
        return c === 1 ? "ثانية" : "ثواني";
      },
      ms: (c: number) => {
        return c === 1 ? "جزء من الثانية" : "أجزاء من الثانية";
      },
      decimal: ","
    },
    bg: {
      y: (c: number) => {
        return ["години", "година", "години"][this.getSlavicForm(c)];
      },
      mo: (c: number) => {
        return ["месеца", "месец", "месеца"][this.getSlavicForm(c)];
      },
      w: (c: number) => {
        return ["седмици", "седмица", "седмици"][this.getSlavicForm(c)];
      },
      d: (c: number) => {
        return ["дни", "ден", "дни"][this.getSlavicForm(c)];
      },
      h: (c: number) => {
        return ["часа", "час", "часа"][this.getSlavicForm(c)];
      },
      m: (c: number) => {
        return ["минути", "минута", "минути"][this.getSlavicForm(c)];
      },
      s: (c: number) => {
        return ["секунди", "секунда", "секунди"][this.getSlavicForm(c)];
      },
      ms: (c: number) => {
        return ["милисекунди", "милисекунда", "милисекунди"][
          this.getSlavicForm(c)
        ];
      },
      decimal: ","
    },
    ca: {
      y: (c: number) => {
        return "any" + (c === 1 ? "" : "s");
      },
      mo: (c: number) => {
        return "mes" + (c === 1 ? "" : "os");
      },
      w: (c: number) => {
        return "setman" + (c === 1 ? "a" : "es");
      },
      d: (c: number) => {
        return "di" + (c === 1 ? "a" : "es");
      },
      h: (c: number) => {
        return "hor" + (c === 1 ? "a" : "es");
      },
      m: (c: number) => {
        return "minut" + (c === 1 ? "" : "s");
      },
      s: (c: number) => {
        return "segon" + (c === 1 ? "" : "s");
      },
      ms: (c: number) => {
        return "milisegon" + (c === 1 ? "" : "s");
      },
      decimal: ","
    },
    cs: {
      y: (c: number) => {
        return ["rok", "roku", "roky", "let"][this.getCzechOrSlovakForm(c)];
      },
      mo: (c: number) => {
        return ["měsíc", "měsíce", "měsíce", "měsíců"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      w: (c: number) => {
        return ["týden", "týdne", "týdny", "týdnů"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      d: (c: number) => {
        return ["den", "dne", "dny", "dní"][this.getCzechOrSlovakForm(c)];
      },
      h: (c: number) => {
        return ["hodina", "hodiny", "hodiny", "hodin"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      m: (c: number) => {
        return ["minuta", "minuty", "minuty", "minut"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      s: (c: number) => {
        return ["sekunda", "sekundy", "sekundy", "sekund"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      ms: (c: number) => {
        return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      decimal: ","
    },
    da: {
      y: () => {
        return "år";
      },
      mo: (c: number) => {
        return "måned" + (c === 1 ? "" : "er");
      },
      w: (c: number) => {
        return "uge" + (c === 1 ? "" : "r");
      },
      d: (c: number) => {
        return "dag" + (c === 1 ? "" : "e");
      },
      h: (c: number) => {
        return "time" + (c === 1 ? "" : "r");
      },
      m: (c: number) => {
        return "minut" + (c === 1 ? "" : "ter");
      },
      s: (c: number) => {
        return "sekund" + (c === 1 ? "" : "er");
      },
      ms: (c: number) => {
        return "millisekund" + (c === 1 ? "" : "er");
      },
      decimal: ","
    },
    de: {
      y: (c: number) => {
        return "Jahr" + (c === 1 ? "" : "e");
      },
      mo: (c: number) => {
        return "Monat" + (c === 1 ? "" : "e");
      },
      w: (c: number) => {
        return "Woche" + (c === 1 ? "" : "n");
      },
      d: (c: number) => {
        return "Tag" + (c === 1 ? "" : "e");
      },
      h: (c: number) => {
        return "Stunde" + (c === 1 ? "" : "n");
      },
      m: (c: number) => {
        return "Minute" + (c === 1 ? "" : "n");
      },
      s: (c: number) => {
        return "Sekunde" + (c === 1 ? "" : "n");
      },
      ms: (c: number) => {
        return "Millisekunde" + (c === 1 ? "" : "n");
      },
      decimal: ","
    },
    el: {
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
    en: {
      y: (c: number) => {
        return "year" + (c === 1 ? "" : "s");
      },
      mo: (c: number) => {
        return "month" + (c === 1 ? "" : "s");
      },
      w: (c: number) => {
        return "week" + (c === 1 ? "" : "s");
      },
      d: (c: number) => {
        return "day" + (c === 1 ? "" : "s");
      },
      h: (c: number) => {
        return "hour" + (c === 1 ? "" : "s");
      },
      m: (c: number) => {
        return "minute" + (c === 1 ? "" : "s");
      },
      s: (c: number) => {
        return "second" + (c === 1 ? "" : "s");
      },
      ms: (c: number) => {
        return "millisecond" + (c === 1 ? "" : "s");
      },
      decimal: "."
    },
    es: {
      y: (c: number) => {
        return "año" + (c === 1 ? "" : "s");
      },
      mo: (c: number) => {
        return "mes" + (c === 1 ? "" : "es");
      },
      w: (c: number) => {
        return "semana" + (c === 1 ? "" : "s");
      },
      d: (c: number) => {
        return "día" + (c === 1 ? "" : "s");
      },
      h: (c: number) => {
        return "hora" + (c === 1 ? "" : "s");
      },
      m: (c: number) => {
        return "minuto" + (c === 1 ? "" : "s");
      },
      s: (c: number) => {
        return "segundo" + (c === 1 ? "" : "s");
      },
      ms: (c: number) => {
        return "milisegundo" + (c === 1 ? "" : "s");
      },
      decimal: ","
    },
    et: {
      y: (c: number) => {
        return "aasta" + (c === 1 ? "" : "t");
      },
      mo: (c: number) => {
        return "kuu" + (c === 1 ? "" : "d");
      },
      w: (c: number) => {
        return "nädal" + (c === 1 ? "" : "at");
      },
      d: (c: number) => {
        return "päev" + (c === 1 ? "" : "a");
      },
      h: (c: number) => {
        return "tund" + (c === 1 ? "" : "i");
      },
      m: (c: number) => {
        return "minut" + (c === 1 ? "" : "it");
      },
      s: (c: number) => {
        return "sekund" + (c === 1 ? "" : "it");
      },
      ms: (c: number) => {
        return "millisekund" + (c === 1 ? "" : "it");
      },
      decimal: ","
    },
    fa: {
      y: () => {
        return "سال";
      },
      mo: () => {
        return "ماه";
      },
      w: () => {
        return "هفته";
      },
      d: () => {
        return "روز";
      },
      h: () => {
        return "ساعت";
      },
      m: () => {
        return "دقیقه";
      },
      s: () => {
        return "ثانیه";
      },
      ms: () => {
        return "میلی ثانیه";
      },
      decimal: "."
    },
    fi: {
      y: (c: number) => {
        return c === 1 ? "vuosi" : "vuotta";
      },
      mo: (c: number) => {
        return c === 1 ? "kuukausi" : "kuukautta";
      },
      w: (c: number) => {
        return "viikko" + (c === 1 ? "" : "a");
      },
      d: (c: number) => {
        return "päivä" + (c === 1 ? "" : "ä");
      },
      h: (c: number) => {
        return "tunti" + (c === 1 ? "" : "a");
      },
      m: (c: number) => {
        return "minuutti" + (c === 1 ? "" : "a");
      },
      s: (c: number) => {
        return "sekunti" + (c === 1 ? "" : "a");
      },
      ms: (c: number) => {
        return "millisekunti" + (c === 1 ? "" : "a");
      },
      decimal: ","
    },
    fo: {
      y: () => {
        return "ár";
      },
      mo: (c: number) => {
        return c === 1 ? "mánaður" : "mánaðir";
      },
      w: (c: number) => {
        return c === 1 ? "vika" : "vikur";
      },
      d: (c: number) => {
        return c === 1 ? "dagur" : "dagar";
      },
      h: (c: number) => {
        return c === 1 ? "tími" : "tímar";
      },
      m: (c: number) => {
        return c === 1 ? "minuttur" : "minuttir";
      },
      s: () => {
        return "sekund";
      },
      ms: () => {
        return "millisekund";
      },
      decimal: ","
    },
    fr: {
      y: (c: number) => {
        return "an" + (c >= 2 ? "s" : "");
      },
      mo: () => {
        return "mois";
      },
      w: (c: number) => {
        return "semaine" + (c >= 2 ? "s" : "");
      },
      d: (c: number) => {
        return "jour" + (c >= 2 ? "s" : "");
      },
      h: (c: number) => {
        return "heure" + (c >= 2 ? "s" : "");
      },
      m: (c: number) => {
        return "minute" + (c >= 2 ? "s" : "");
      },
      s: (c: number) => {
        return "seconde" + (c >= 2 ? "s" : "");
      },
      ms: (c: number) => {
        return "milliseconde" + (c >= 2 ? "s" : "");
      },
      decimal: ","
    },
    hr: {
      y: (c: number) => {
        if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) {
          return "godine";
        }
        return "godina";
      },
      mo: (c: number) => {
        if (c === 1) {
          return "mjesec";
        } else if (c === 2 || c === 3 || c === 4) {
          return "mjeseca";
        }
        return "mjeseci";
      },
      w: (c: number) => {
        if (c % 10 === 1 && c !== 11) {
          return "tjedan";
        }
        return "tjedna";
      },
      d: (c: number) => {
        return c === 1 ? "dan" : "dana";
      },
      h: (c: number) => {
        if (c === 1) {
          return "sat";
        } else if (c === 2 || c === 3 || c === 4) {
          return "sata";
        }
        return "sati";
      },
      m: (c: number) => {
        const mod10 = c % 10;
        if ((mod10 === 2 || mod10 === 3 || mod10 === 4) && (c < 10 || c > 14)) {
          return "minute";
        }
        return "minuta";
      },
      s: (c: number) => {
        if (
          c === 10 ||
          c === 11 ||
          c === 12 ||
          c === 13 ||
          c === 14 ||
          c === 16 ||
          c === 17 ||
          c === 18 ||
          c === 19 ||
          c % 10 === 5
        ) {
          return "sekundi";
        } else if (c % 10 === 1) {
          return "sekunda";
        } else if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) {
          return "sekunde";
        }
        return "sekundi";
      },
      ms: (c: number) => {
        if (c === 1) {
          return "milisekunda";
        } else if (c % 10 === 2 || c % 10 === 3 || c % 10 === 4) {
          return "milisekunde";
        }
        return "milisekundi";
      },
      decimal: ","
    },
    hu: {
      y: () => {
        return "év";
      },
      mo: () => {
        return "hónap";
      },
      w: () => {
        return "hét";
      },
      d: () => {
        return "nap";
      },
      h: () => {
        return "óra";
      },
      m: () => {
        return "perc";
      },
      s: () => {
        return "másodperc";
      },
      ms: () => {
        return "ezredmásodperc";
      },
      decimal: ","
    },
    id: {
      y: () => {
        return "tahun";
      },
      mo: () => {
        return "bulan";
      },
      w: () => {
        return "minggu";
      },
      d: () => {
        return "hari";
      },
      h: () => {
        return "jam";
      },
      m: () => {
        return "menit";
      },
      s: () => {
        return "detik";
      },
      ms: () => {
        return "milidetik";
      },
      decimal: "."
    },
    is: {
      y: () => {
        return "ár";
      },
      mo: (c: number) => {
        return "mánuð" + (c === 1 ? "ur" : "ir");
      },
      w: (c: number) => {
        return "vik" + (c === 1 ? "a" : "ur");
      },
      d: (c: number) => {
        return "dag" + (c === 1 ? "ur" : "ar");
      },
      h: (c: number) => {
        return "klukkutím" + (c === 1 ? "i" : "ar");
      },
      m: (c: number) => {
        return "mínút" + (c === 1 ? "a" : "ur");
      },
      s: (c: number) => {
        return "sekúnd" + (c === 1 ? "a" : "ur");
      },
      ms: (c: number) => {
        return "millisekúnd" + (c === 1 ? "a" : "ur");
      },
      decimal: "."
    },
    it: {
      y: (c: number) => {
        return "ann" + (c === 1 ? "o" : "i");
      },
      mo: (c: number) => {
        return "mes" + (c === 1 ? "e" : "i");
      },
      w: (c: number) => {
        return "settiman" + (c === 1 ? "a" : "e");
      },
      d: (c: number) => {
        return "giorn" + (c === 1 ? "o" : "i");
      },
      h: (c: number) => {
        return "or" + (c === 1 ? "a" : "e");
      },
      m: (c: number) => {
        return "minut" + (c === 1 ? "o" : "i");
      },
      s: (c: number) => {
        return "second" + (c === 1 ? "o" : "i");
      },
      ms: (c: number) => {
        return "millisecond" + (c === 1 ? "o" : "i");
      },
      decimal: ","
    },
    ja: {
      y: () => {
        return "年";
      },
      mo: () => {
        return "月";
      },
      w: () => {
        return "週";
      },
      d: () => {
        return "日";
      },
      h: () => {
        return "時間";
      },
      m: () => {
        return "分";
      },
      s: () => {
        return "秒";
      },
      ms: () => {
        return "ミリ秒";
      },
      decimal: "."
    },
    ko: {
      y: () => {
        return "년";
      },
      mo: () => {
        return "개월";
      },
      w: () => {
        return "주일";
      },
      d: () => {
        return "일";
      },
      h: () => {
        return "시간";
      },
      m: () => {
        return "분";
      },
      s: () => {
        return "초";
      },
      ms: () => {
        return "밀리 초";
      },
      decimal: "."
    },
    lo: {
      y: () => {
        return "ປີ";
      },
      mo: () => {
        return "ເດືອນ";
      },
      w: () => {
        return "ອາທິດ";
      },
      d: () => {
        return "ມື້";
      },
      h: () => {
        return "ຊົ່ວໂມງ";
      },
      m: () => {
        return "ນາທີ";
      },
      s: () => {
        return "ວິນາທີ";
      },
      ms: () => {
        return "ມິນລິວິນາທີ";
      },
      decimal: ","
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
    lv: {
      y: (c: number) => {
        return ["gads", "gadi"][this.getLatvianForm(c)];
      },
      mo: (c: number) => {
        return ["mēnesis", "mēneši"][this.getLatvianForm(c)];
      },
      w: (c: number) => {
        return ["nedēļa", "nedēļas"][this.getLatvianForm(c)];
      },
      d: (c: number) => {
        return ["diena", "dienas"][this.getLatvianForm(c)];
      },
      h: (c: number) => {
        return ["stunda", "stundas"][this.getLatvianForm(c)];
      },
      m: (c: number) => {
        return ["minūte", "minūtes"][this.getLatvianForm(c)];
      },
      s: (c: number) => {
        return ["sekunde", "sekundes"][this.getLatvianForm(c)];
      },
      ms: (c: number) => {
        return ["milisekunde", "milisekundes"][this.getLatvianForm(c)];
      },
      decimal: ","
    },
    ms: {
      y: () => {
        return "tahun";
      },
      mo: () => {
        return "bulan";
      },
      w: () => {
        return "minggu";
      },
      d: () => {
        return "hari";
      },
      h: () => {
        return "jam";
      },
      m: () => {
        return "minit";
      },
      s: () => {
        return "saat";
      },
      ms: () => {
        return "milisaat";
      },
      decimal: "."
    },
    nl: {
      y: () => {
        return "jaar";
      },
      mo: (c: number) => {
        return c === 1 ? "maand" : "maanden";
      },
      w: (c: number) => {
        return c === 1 ? "week" : "weken";
      },
      d: (c: number) => {
        return c === 1 ? "dag" : "dagen";
      },
      h: () => {
        return "uur";
      },
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
      y: () => {
        return "år";
      },
      mo: (c: number) => {
        return "måned" + (c === 1 ? "" : "er");
      },
      w: (c: number) => {
        return "uke" + (c === 1 ? "" : "r");
      },
      d: (c: number) => {
        return "dag" + (c === 1 ? "" : "er");
      },
      h: (c: number) => {
        return "time" + (c === 1 ? "" : "r");
      },
      m: (c: number) => {
        return "minutt" + (c === 1 ? "" : "er");
      },
      s: (c: number) => {
        return "sekund" + (c === 1 ? "" : "er");
      },
      ms: (c: number) => {
        return "millisekund" + (c === 1 ? "" : "er");
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
        return "ano" + (c === 1 ? "" : "s");
      },
      mo: (c: number) => {
        return c === 1 ? "mês" : "meses";
      },
      w: (c: number) => {
        return "semana" + (c === 1 ? "" : "s");
      },
      d: (c: number) => {
        return "dia" + (c === 1 ? "" : "s");
      },
      h: (c: number) => {
        return "hora" + (c === 1 ? "" : "s");
      },
      m: (c: number) => {
        return "minuto" + (c === 1 ? "" : "s");
      },
      s: (c: number) => {
        return "segundo" + (c === 1 ? "" : "s");
      },
      ms: (c: number) => {
        return "milissegundo" + (c === 1 ? "" : "s");
      },
      decimal: ","
    },
    ro: {
      y: (c: number) => {
        return c === 1 ? "an" : "ani";
      },
      mo: (c: number) => {
        return c === 1 ? "lună" : "luni";
      },
      w: (c: number) => {
        return c === 1 ? "săptămână" : "săptămâni";
      },
      d: (c: number) => {
        return c === 1 ? "zi" : "zile";
      },
      h: (c: number) => {
        return c === 1 ? "oră" : "ore";
      },
      m: (c: number) => {
        return c === 1 ? "minut" : "minute";
      },
      s: (c: number) => {
        return c === 1 ? "secundă" : "secunde";
      },
      ms: (c: number) => {
        return c === 1 ? "milisecundă" : "milisecunde";
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
        return ["тижнів", "тиждень", "тижні"][this.getSlavicForm(c)];
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
    ur: {
      y: () => {
        return "سال";
      },
      mo: (c: number) => {
        return c === 1 ? "مہینہ" : "مہینے";
      },
      w: (c: number) => {
        return c === 1 ? "ہفتہ" : "ہفتے";
      },
      d: () => {
        return "دن";
      },
      h: (c: number) => {
        return c === 1 ? "گھنٹہ" : "گھنٹے";
      },
      m: () => {
        return "منٹ";
      },
      s: () => {
        return "سیکنڈ";
      },
      ms: () => {
        return "ملی سیکنڈ";
      },
      decimal: "."
    },
    sk: {
      y: (c: number) => {
        return ["rok", "roky", "roky", "rokov"][this.getCzechOrSlovakForm(c)];
      },
      mo: (c: number) => {
        return ["mesiac", "mesiace", "mesiace", "mesiacov"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      w: (c: number) => {
        return ["týždeň", "týždne", "týždne", "týždňov"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      d: (c: number) => {
        return ["deň", "dni", "dni", "dní"][this.getCzechOrSlovakForm(c)];
      },
      h: (c: number) => {
        return ["hodina", "hodiny", "hodiny", "hodín"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      m: (c: number) => {
        return ["minúta", "minúty", "minúty", "minút"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      s: (c: number) => {
        return ["sekunda", "sekundy", "sekundy", "sekúnd"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      ms: (c: number) => {
        return ["milisekunda", "milisekundy", "milisekundy", "milisekúnd"][
          this.getCzechOrSlovakForm(c)
        ];
      },
      decimal: ","
    },
    sv: {
      y: () => {
        return "år";
      },
      mo: (c: number) => {
        return "månad" + (c === 1 ? "" : "er");
      },
      w: (c: number) => {
        return "veck" + (c === 1 ? "a" : "or");
      },
      d: (c: number) => {
        return "dag" + (c === 1 ? "" : "ar");
      },
      h: (c: number) => {
        return "timm" + (c === 1 ? "e" : "ar");
      },
      m: (c: number) => {
        return "minut" + (c === 1 ? "" : "er");
      },
      s: (c: number) => {
        return "sekund" + (c === 1 ? "" : "er");
      },
      ms: (c: number) => {
        return "millisekund" + (c === 1 ? "" : "er");
      },
      decimal: ","
    },
    tr: {
      y: () => {
        return "yıl";
      },
      mo: () => {
        return "ay";
      },
      w: () => {
        return "hafta";
      },
      d: () => {
        return "gün";
      },
      h: () => {
        return "saat";
      },
      m: () => {
        return "dakika";
      },
      s: () => {
        return "saniye";
      },
      ms: () => {
        return "milisaniye";
      },
      decimal: ","
    },
    th: {
      y: () => {
        return "ปี";
      },
      mo: () => {
        return "เดือน";
      },
      w: () => {
        return "อาทิตย์";
      },
      d: () => {
        return "วัน";
      },
      h: () => {
        return "ชั่วโมง";
      },
      m: () => {
        return "นาที";
      },
      s: () => {
        return "วินาที";
      },
      ms: () => {
        return "มิลลิวินาที";
      },
      decimal: "."
    },
    vi: {
      y: () => {
        return "năm";
      },
      mo: () => {
        return "tháng";
      },
      w: () => {
        return "tuần";
      },
      d: () => {
        return "ngày";
      },
      h: () => {
        return "giờ";
      },
      m: () => {
        return "phút";
      },
      s: () => {
        return "giây";
      },
      ms: () => {
        return "mili giây";
      },
      decimal: ","
    },
    zh_CN: {
      y: () => {
        return "年";
      },
      mo: () => {
        return "个月";
      },
      w: () => {
        return "周";
      },
      d: () => {
        return "天";
      },
      h: () => {
        return "小时";
      },
      m: () => {
        return "分钟";
      },
      s: () => {
        return "秒";
      },
      ms: () => {
        return "毫秒";
      },
      decimal: "."
    },
    zh_TW: {
      y: () => {
        return "年";
      },
      mo: () => {
        return "個月";
      },
      w: () => {
        return "周";
      },
      d: () => {
        return "天";
      },
      h: () => {
        return "小時";
      },
      m: () => {
        return "分鐘";
      },
      s: () => {
        return "秒";
      },
      ms: () => {
        return "毫秒";
      },
      decimal: "."
    }
  };

  addLanguage(key: string, lang: Language): void {
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

  // Internal helper function for Arabic language.
  getArabicForm(c: number) {
    if (c <= 2) {
      return 0;
    }
    if (c > 2 && c < 11) {
      return 1;
    }
    return 0;
  }

  // Internal helper function for Slovak language.
  getCzechOrSlovakForm(c: number) {
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

  // Internal helper function for Latvian language.
  getLatvianForm(c: number) {
    if (c === 1 || (c % 10 === 1 && c % 100 !== 11)) {
      return 0;
    } else {
      return 1;
    }
  }
}
