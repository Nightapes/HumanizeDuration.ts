System.registerDynamic("src/humanize-duration.lang", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var HumanizeDurationLanguage = (function() {
    function HumanizeDurationLanguage() {
      this.languages = {
        ar: {
          y: function(c) {
            return c === 1 ? 'سنة' : 'سنوات';
          },
          mo: function(c) {
            return c === 1 ? 'شهر' : 'أشهر';
          },
          w: function(c) {
            return c === 1 ? 'أسبوع' : 'أسابيع';
          },
          d: function(c) {
            return c === 1 ? 'يوم' : 'أيام';
          },
          h: function(c) {
            return c === 1 ? 'ساعة' : 'ساعات';
          },
          m: function(c) {
            return c === 1 ? 'دقيقة' : 'دقائق';
          },
          s: function(c) {
            return c === 1 ? 'ثانية' : 'ثواني';
          },
          ms: function(c) {
            return c === 1 ? 'جزء من الثانية' : 'أجزاء من الثانية';
          },
          decimal: ','
        },
        ca: {
          y: function(c) {
            return 'any' + (c !== 1 ? 's' : '');
          },
          mo: function(c) {
            return 'mes' + (c !== 1 ? 'os' : '');
          },
          w: function(c) {
            return 'setman' + (c !== 1 ? 'es' : 'a');
          },
          d: function(c) {
            return 'di' + (c !== 1 ? 'es' : 'a');
          },
          h: function(c) {
            return 'hor' + (c !== 1 ? 'es' : 'a');
          },
          m: function(c) {
            return 'minut' + (c !== 1 ? 's' : '');
          },
          s: function(c) {
            return 'segon' + (c !== 1 ? 's' : '');
          },
          ms: function(c) {
            return 'milisegon' + (c !== 1 ? 's' : '');
          },
          decimal: ','
        },
        cs: {
          y: function(c) {
            return ['rok', 'roku', 'roky', 'let'][this.getCzechForm(c)];
          },
          mo: function(c) {
            return ['měsíc', 'měsíce', 'měsíce', 'měsíců'][this.getCzechForm(c)];
          },
          w: function(c) {
            return ['týden', 'týdne', 'týdny', 'týdnů'][this.getCzechForm(c)];
          },
          d: function(c) {
            return ['den', 'dne', 'dny', 'dní'][this.getCzechForm(c)];
          },
          h: function(c) {
            return ['hodina', 'hodiny', 'hodiny', 'hodin'][this.getCzechForm(c)];
          },
          m: function(c) {
            return ['minuta', 'minuty', 'minuty', 'minut'][this.getCzechForm(c)];
          },
          s: function(c) {
            return ['sekunda', 'sekundy', 'sekundy', 'sekund'][this.getCzechForm(c)];
          },
          ms: function(c) {
            return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][this.getCzechForm(c)];
          },
          decimal: ','
        },
        da: {
          y: 'år',
          mo: function(c) {
            return 'måned' + (c !== 1 ? 'er' : '');
          },
          w: function(c) {
            return 'uge' + (c !== 1 ? 'r' : '');
          },
          d: function(c) {
            return 'dag' + (c !== 1 ? 'e' : '');
          },
          h: function(c) {
            return 'time' + (c !== 1 ? 'r' : '');
          },
          m: function(c) {
            return 'minut' + (c !== 1 ? 'ter' : '');
          },
          s: function(c) {
            return 'sekund' + (c !== 1 ? 'er' : '');
          },
          ms: function(c) {
            return 'millisekund' + (c !== 1 ? 'er' : '');
          },
          decimal: ','
        },
        de: {
          y: function(c) {
            return 'Jahr' + (c !== 1 ? 'e' : '');
          },
          mo: function(c) {
            return 'Monat' + (c !== 1 ? 'e' : '');
          },
          w: function(c) {
            return 'Woche' + (c !== 1 ? 'n' : '');
          },
          d: function(c) {
            return 'Tag' + (c !== 1 ? 'e' : '');
          },
          h: function(c) {
            return 'Stunde' + (c !== 1 ? 'n' : '');
          },
          m: function(c) {
            return 'Minute' + (c !== 1 ? 'n' : '');
          },
          s: function(c) {
            return 'Sekunde' + (c !== 1 ? 'n' : '');
          },
          ms: function(c) {
            return 'Millisekunde' + (c !== 1 ? 'n' : '');
          },
          decimal: ','
        },
        en: {
          y: function(c) {
            return 'year' + (c !== 1 ? 's' : '');
          },
          mo: function(c) {
            return 'month' + (c !== 1 ? 's' : '');
          },
          w: function(c) {
            return 'week' + (c !== 1 ? 's' : '');
          },
          d: function(c) {
            return 'day' + (c !== 1 ? 's' : '');
          },
          h: function(c) {
            return 'hour' + (c !== 1 ? 's' : '');
          },
          m: function(c) {
            return 'minute' + (c !== 1 ? 's' : '');
          },
          s: function(c) {
            return 'second' + (c !== 1 ? 's' : '');
          },
          ms: function(c) {
            return 'millisecond' + (c !== 1 ? 's' : '');
          },
          decimal: '.'
        },
        es: {
          y: function(c) {
            return 'año' + (c !== 1 ? 's' : '');
          },
          mo: function(c) {
            return 'mes' + (c !== 1 ? 'es' : '');
          },
          w: function(c) {
            return 'semana' + (c !== 1 ? 's' : '');
          },
          d: function(c) {
            return 'día' + (c !== 1 ? 's' : '');
          },
          h: function(c) {
            return 'hora' + (c !== 1 ? 's' : '');
          },
          m: function(c) {
            return 'minuto' + (c !== 1 ? 's' : '');
          },
          s: function(c) {
            return 'segundo' + (c !== 1 ? 's' : '');
          },
          ms: function(c) {
            return 'milisegundo' + (c !== 1 ? 's' : '');
          },
          decimal: ','
        },
        fi: {
          y: function(c) {
            return c === 1 ? 'vuosi' : 'vuotta';
          },
          mo: function(c) {
            return c === 1 ? 'kuukausi' : 'kuukautta';
          },
          w: function(c) {
            return 'viikko' + (c !== 1 ? 'a' : '');
          },
          d: function(c) {
            return 'päivä' + (c !== 1 ? 'ä' : '');
          },
          h: function(c) {
            return 'tunti' + (c !== 1 ? 'a' : '');
          },
          m: function(c) {
            return 'minuutti' + (c !== 1 ? 'a' : '');
          },
          s: function(c) {
            return 'sekunti' + (c !== 1 ? 'a' : '');
          },
          ms: function(c) {
            return 'millisekunti' + (c !== 1 ? 'a' : '');
          },
          decimal: ','
        },
        fr: {
          y: function(c) {
            return 'an' + (c !== 1 ? 's' : '');
          },
          mo: 'mois',
          w: function(c) {
            return 'semaine' + (c !== 1 ? 's' : '');
          },
          d: function(c) {
            return 'jour' + (c !== 1 ? 's' : '');
          },
          h: function(c) {
            return 'heure' + (c !== 1 ? 's' : '');
          },
          m: function(c) {
            return 'minute' + (c !== 1 ? 's' : '');
          },
          s: function(c) {
            return 'seconde' + (c !== 1 ? 's' : '');
          },
          ms: function(c) {
            return 'milliseconde' + (c !== 1 ? 's' : '');
          },
          decimal: ','
        },
        gr: {
          y: function(c) {
            return c === 1 ? 'χρόνος' : 'χρόνια';
          },
          mo: function(c) {
            return c === 1 ? 'μήνας' : 'μήνες';
          },
          w: function(c) {
            return c === 1 ? 'εβδομάδα' : 'εβδομάδες';
          },
          d: function(c) {
            return c === 1 ? 'μέρα' : 'μέρες';
          },
          h: function(c) {
            return c === 1 ? 'ώρα' : 'ώρες';
          },
          m: function(c) {
            return c === 1 ? 'λεπτό' : 'λεπτά';
          },
          s: function(c) {
            return c === 1 ? 'δευτερόλεπτο' : 'δευτερόλεπτα';
          },
          ms: function(c) {
            return c === 1 ? 'χιλιοστό του δευτερολέπτου' : 'χιλιοστά του δευτερολέπτου';
          },
          decimal: ','
        },
        hu: {
          y: 'év',
          mo: 'hónap',
          w: 'hét',
          d: 'nap',
          h: 'óra',
          m: 'perc',
          s: 'másodperc',
          ms: 'ezredmásodperc',
          decimal: ','
        },
        id: {
          y: 'tahun',
          mo: 'bulan',
          w: 'minggu',
          d: 'hari',
          h: 'jam',
          m: 'menit',
          s: 'detik',
          ms: 'milidetik',
          decimal: '.'
        },
        it: {
          y: function(c) {
            return 'ann' + (c !== 1 ? 'i' : 'o');
          },
          mo: function(c) {
            return 'mes' + (c !== 1 ? 'i' : 'e');
          },
          w: function(c) {
            return 'settiman' + (c !== 1 ? 'e' : 'a');
          },
          d: function(c) {
            return 'giorn' + (c !== 1 ? 'i' : 'o');
          },
          h: function(c) {
            return 'or' + (c !== 1 ? 'e' : 'a');
          },
          m: function(c) {
            return 'minut' + (c !== 1 ? 'i' : 'o');
          },
          s: function(c) {
            return 'second' + (c !== 1 ? 'i' : 'o');
          },
          ms: function(c) {
            return 'millisecond' + (c !== 1 ? 'i' : 'o');
          },
          decimal: ','
        },
        ja: {
          y: '年',
          mo: '月',
          w: '週',
          d: '日',
          h: '時間',
          m: '分',
          s: '秒',
          ms: 'ミリ秒',
          decimal: '.'
        },
        ko: {
          y: '년',
          mo: '개월',
          w: '주일',
          d: '일',
          h: '시간',
          m: '분',
          s: '초',
          ms: '밀리 초',
          decimal: '.'
        },
        lt: {
          y: function(c) {
            return ((c % 10 === 0) || (c % 100 >= 10 && c % 100 <= 20)) ? 'metų' : 'metai';
          },
          mo: function(c) {
            return ['mėnuo', 'mėnesiai', 'mėnesių'][this.getLithuanianForm(c)];
          },
          w: function(c) {
            return ['savaitė', 'savaitės', 'savaičių'][this.getLithuanianForm(c)];
          },
          d: function(c) {
            return ['diena', 'dienos', 'dienų'][this.getLithuanianForm(c)];
          },
          h: function(c) {
            return ['valanda', 'valandos', 'valandų'][this.getLithuanianForm(c)];
          },
          m: function(c) {
            return ['minutė', 'minutės', 'minučių'][this.getLithuanianForm(c)];
          },
          s: function(c) {
            return ['sekundė', 'sekundės', 'sekundžių'][this.getLithuanianForm(c)];
          },
          ms: function(c) {
            return ['milisekundė', 'milisekundės', 'milisekundžių'][this.getLithuanianForm(c)];
          },
          decimal: ','
        },
        ms: {
          y: 'tahun',
          mo: 'bulan',
          w: 'minggu',
          d: 'hari',
          h: 'jam',
          m: 'minit',
          s: 'saat',
          ms: 'milisaat',
          decimal: '.'
        },
        nl: {
          y: 'jaar',
          mo: function(c) {
            return c === 1 ? 'maand' : 'maanden';
          },
          w: function(c) {
            return c === 1 ? 'week' : 'weken';
          },
          d: function(c) {
            return c === 1 ? 'dag' : 'dagen';
          },
          h: 'uur',
          m: function(c) {
            return c === 1 ? 'minuut' : 'minuten';
          },
          s: function(c) {
            return c === 1 ? 'seconde' : 'seconden';
          },
          ms: function(c) {
            return c === 1 ? 'milliseconde' : 'milliseconden';
          },
          decimal: ','
        },
        no: {
          y: 'år',
          mo: function(c) {
            return 'måned' + (c !== 1 ? 'er' : '');
          },
          w: function(c) {
            return 'uke' + (c !== 1 ? 'r' : '');
          },
          d: function(c) {
            return 'dag' + (c !== 1 ? 'er' : '');
          },
          h: function(c) {
            return 'time' + (c !== 1 ? 'r' : '');
          },
          m: function(c) {
            return 'minutt' + (c !== 1 ? 'er' : '');
          },
          s: function(c) {
            return 'sekund' + (c !== 1 ? 'er' : '');
          },
          ms: function(c) {
            return 'millisekund' + (c !== 1 ? 'er' : '');
          },
          decimal: ','
        },
        pl: {
          y: function(c) {
            return ['rok', 'roku', 'lata', 'lat'][this.getPolishForm(c)];
          },
          mo: function(c) {
            return ['miesiąc', 'miesiąca', 'miesiące', 'miesięcy'][this.getPolishForm(c)];
          },
          w: function(c) {
            return ['tydzień', 'tygodnia', 'tygodnie', 'tygodni'][this.getPolishForm(c)];
          },
          d: function(c) {
            return ['dzień', 'dnia', 'dni', 'dni'][this.getPolishForm(c)];
          },
          h: function(c) {
            return ['godzina', 'godziny', 'godziny', 'godzin'][this.getPolishForm(c)];
          },
          m: function(c) {
            return ['minuta', 'minuty', 'minuty', 'minut'][this.getPolishForm(c)];
          },
          s: function(c) {
            return ['sekunda', 'sekundy', 'sekundy', 'sekund'][this.getPolishForm(c)];
          },
          ms: function(c) {
            return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][this.getPolishForm(c)];
          },
          decimal: ','
        },
        pt: {
          y: function(c) {
            return 'ano' + (c !== 1 ? 's' : '');
          },
          mo: function(c) {
            return c !== 1 ? 'meses' : 'mês';
          },
          w: function(c) {
            return 'semana' + (c !== 1 ? 's' : '');
          },
          d: function(c) {
            return 'dia' + (c !== 1 ? 's' : '');
          },
          h: function(c) {
            return 'hora' + (c !== 1 ? 's' : '');
          },
          m: function(c) {
            return 'minuto' + (c !== 1 ? 's' : '');
          },
          s: function(c) {
            return 'segundo' + (c !== 1 ? 's' : '');
          },
          ms: function(c) {
            return 'milissegundo' + (c !== 1 ? 's' : '');
          },
          decimal: ','
        },
        ru: {
          y: function(c) {
            return ['лет', 'год', 'года'][this.getSlavicForm(c)];
          },
          mo: function(c) {
            return ['месяцев', 'месяц', 'месяца'][this.getSlavicForm(c)];
          },
          w: function(c) {
            return ['недель', 'неделя', 'недели'][this.getSlavicForm(c)];
          },
          d: function(c) {
            return ['дней', 'день', 'дня'][this.getSlavicForm(c)];
          },
          h: function(c) {
            return ['часов', 'час', 'часа'][this.getSlavicForm(c)];
          },
          m: function(c) {
            return ['минут', 'минута', 'минуты'][this.getSlavicForm(c)];
          },
          s: function(c) {
            return ['секунд', 'секунда', 'секунды'][this.getSlavicForm(c)];
          },
          ms: function(c) {
            return ['миллисекунд', 'миллисекунда', 'миллисекунды'][this.getSlavicForm(c)];
          },
          decimal: ','
        },
        uk: {
          y: function(c) {
            return ['років', 'рік', 'роки'][this.getSlavicForm(c)];
          },
          mo: function(c) {
            return ['місяців', 'місяць', 'місяці'][this.getSlavicForm(c)];
          },
          w: function(c) {
            return ['неділь', 'неділя', 'неділі'][this.getSlavicForm(c)];
          },
          d: function(c) {
            return ['днів', 'день', 'дні'][this.getSlavicForm(c)];
          },
          h: function(c) {
            return ['годин', 'година', 'години'][this.getSlavicForm(c)];
          },
          m: function(c) {
            return ['хвилин', 'хвилина', 'хвилини'][this.getSlavicForm(c)];
          },
          s: function(c) {
            return ['секунд', 'секунда', 'секунди'][this.getSlavicForm(c)];
          },
          ms: function(c) {
            return ['мілісекунд', 'мілісекунда', 'мілісекунди'][this.getSlavicForm(c)];
          },
          decimal: ','
        },
        sv: {
          y: 'år',
          mo: function(c) {
            return 'månad' + (c !== 1 ? 'er' : '');
          },
          w: function(c) {
            return 'veck' + (c !== 1 ? 'or' : 'a');
          },
          d: function(c) {
            return 'dag' + (c !== 1 ? 'ar' : '');
          },
          h: function(c) {
            return 'timm' + (c !== 1 ? 'ar' : 'e');
          },
          m: function(c) {
            return 'minut' + (c !== 1 ? 'er' : '');
          },
          s: function(c) {
            return 'sekund' + (c !== 1 ? 'er' : '');
          },
          ms: function(c) {
            return 'millisekund' + (c !== 1 ? 'er' : '');
          },
          decimal: ','
        },
        tr: {
          y: 'yıl',
          mo: 'ay',
          w: 'hafta',
          d: 'gün',
          h: 'saat',
          m: 'dakika',
          s: 'saniye',
          ms: 'milisaniye',
          decimal: ','
        },
        vi: {
          y: 'năm',
          mo: 'tháng',
          w: 'tuần',
          d: 'ngày',
          h: 'giờ',
          m: 'phút',
          s: 'giây',
          ms: 'mili giây',
          decimal: ','
        },
        zh_CN: {
          y: '年',
          mo: '个月',
          w: '周',
          d: '天',
          h: '小时',
          m: '分钟',
          s: '秒',
          ms: '毫秒',
          decimal: '.'
        },
        zh_TW: {
          y: '年',
          mo: '個月',
          w: '周',
          d: '天',
          h: '小時',
          m: '分鐘',
          s: '秒',
          ms: '毫秒',
          decimal: '.'
        }
      };
    }
    HumanizeDurationLanguage.prototype.addLanguage = function(key, lang) {
      this.languages[key] = lang;
    };
    HumanizeDurationLanguage.prototype.getCzechForm = function(c) {
      if (c === 1) {
        return 0;
      } else if (Math.floor(c) !== c) {
        return 1;
      } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
        return 2;
      } else {
        return 3;
      }
    };
    HumanizeDurationLanguage.prototype.getPolishForm = function(c) {
      if (c === 1) {
        return 0;
      } else if (Math.floor(c) !== c) {
        return 1;
      } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
        return 2;
      } else {
        return 3;
      }
    };
    HumanizeDurationLanguage.prototype.getSlavicForm = function(c) {
      if (Math.floor(c) !== c) {
        return 2;
      } else if ((c >= 5 && c <= 20) || (c % 10 >= 5 && c % 10 <= 9) || c % 10 === 0) {
        return 0;
      } else if (c % 10 === 1) {
        return 1;
      } else if (c > 1) {
        return 2;
      } else {
        return 0;
      }
    };
    HumanizeDurationLanguage.prototype.getLithuanianForm = function(c) {
      if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
        return 0;
      } else if (Math.floor(c) !== c || (c % 10 >= 2 && c % 100 > 20) || (c % 10 >= 2 && c % 100 < 10)) {
        return 1;
      } else {
        return 2;
      }
    };
    return HumanizeDurationLanguage;
  }());
  exports.HumanizeDurationLanguage = HumanizeDurationLanguage;
  return module.exports;
});

System.registerDynamic("src/humanize-duration", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var HumanizeDuration = (function() {
    function HumanizeDuration(languageUtil) {
      this.languageUtil = languageUtil;
      this.defaultOptions = {
        language: 'en',
        delimiter: ', ',
        spacer: ' ',
        conjunction: '',
        serialComma: true,
        units: ['y', 'mo', 'w', 'd', 'h', 'm', 's'],
        languages: {},
        largest: 10,
        decimal: '.',
        round: false,
        unitMeasures: {
          y: 31557600000,
          mo: 2629800000,
          w: 604800000,
          d: 86400000,
          h: 3600000,
          m: 60000,
          s: 1000,
          ms: 1
        }
      };
      this.options = undefined;
      this.options = this.defaultOptions;
    }
    HumanizeDuration.prototype.humanize = function(value, tempOptions) {
      var options = tempOptions !== undefined ? this.extend(this.defaultOptions, tempOptions) : this.defaultOptions;
      return this.doHumanization(value, options);
    };
    HumanizeDuration.prototype.setOptions = function(passedOptions) {
      this.options = passedOptions !== undefined ? this.extend(this.defaultOptions, passedOptions) : this.defaultOptions;
    };
    HumanizeDuration.prototype.getSupportedLanguages = function() {
      var result = [];
      for (var language in this.languageUtil.languages) {
        if (this.languageUtil.languages.hasOwnProperty(language)) {
          result.push(language);
        }
      }
      return result;
    };
    HumanizeDuration.prototype.addLanguage = function(key, lang) {
      this.languageUtil.addLanguage(key, lang);
    };
    HumanizeDuration.prototype.doHumanization = function(ms, options) {
      var i,
          len,
          piece;
      ms = Math.abs(ms);
      var dictionary = options.languages[options.language] || this.languageUtil.languages[options.language];
      if (!dictionary) {
        throw new Error('No language ' + dictionary + '.');
      }
      var pieces = [];
      var unitName;
      var unitMS,
          unitCount;
      for (i = 0, len = options.units.length; i < len; i++) {
        unitName = options.units[i];
        unitMS = options.unitMeasures[unitName];
        if (i + 1 === len) {
          unitCount = ms / unitMS;
        } else {
          unitCount = Math.floor(ms / unitMS);
        }
        pieces.push({
          unitCount: unitCount,
          unitName: unitName
        });
        ms -= unitCount * unitMS;
      }
      var firstOccupiedUnitIndex = 0;
      for (i = 0; i < pieces.length; i++) {
        if (pieces[i].unitCount) {
          firstOccupiedUnitIndex = i;
          break;
        }
      }
      if (options.round) {
        var ratioToLargerUnit = void 0,
            previousPiece = void 0;
        for (i = pieces.length - 1; i >= 0; i--) {
          piece = pieces[i];
          piece.unitCount = Math.round(piece.unitCount);
          if (i === 0) {
            break;
          }
          ;
          previousPiece = pieces[i - 1];
          ratioToLargerUnit = options.unitMeasures[previousPiece.unitName] / options.unitMeasures[piece.unitName];
          if ((piece.unitCount % ratioToLargerUnit) === 0 || (options.largest && ((options.largest - 1) < (i - firstOccupiedUnitIndex)))) {
            previousPiece.unitCount += piece.unitCount / ratioToLargerUnit;
            piece.unitCount = 0;
          }
        }
      }
      var result = [];
      for (i = 0, pieces.length; i < len; i++) {
        piece = pieces[i];
        if (piece.unitCount) {
          result.push(this.render(piece.unitCount, piece.unitName, dictionary, options));
        }
        if (result.length === options.largest) {
          break;
        }
        ;
      }
      if (result.length) {
        if (!options.conjunction || result.length === 1) {
          return result.join(options.delimiter);
        } else if (result.length === 2) {
          return result.join(options.conjunction);
        } else if (result.length > 2) {
          return result.slice(0, -1).join(options.delimiter) + (options.serialComma ? ',' : '') + options.conjunction + result.slice(-1);
        }
      } else {
        return this.render(0, options.units[options.units.length - 1], dictionary, options);
      }
    };
    HumanizeDuration.prototype.render = function(count, type, dictionary, options) {
      var decimal;
      if (options.decimal === void 0) {
        decimal = dictionary.decimal;
      } else {
        decimal = options.decimal;
      }
      var countStr = count.toString().replace('.', decimal.toString());
      var dictionaryValue = dictionary[type];
      var word;
      if (typeof dictionaryValue === 'function') {
        word = dictionaryValue(count);
      } else {
        word = dictionaryValue;
      }
      return countStr + options.spacer + word;
    };
    HumanizeDuration.prototype.extend = function(options, override) {
      for (var prop in override) {
        if (options.hasOwnProperty(prop)) {
          options[prop] = override[prop];
        }
      }
      return options;
    };
    return HumanizeDuration;
  }());
  exports.HumanizeDuration = HumanizeDuration;
  return module.exports;
});

System.registerDynamic("humanize-duration-ts", ["./src/humanize-duration.lang", "./src/humanize-duration"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  __export($__require('./src/humanize-duration.lang'));
  __export($__require('./src/humanize-duration'));
  return module.exports;
});
