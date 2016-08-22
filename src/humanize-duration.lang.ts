import {ILanguage, ILanguageItem} from './humanize-duration.interface';

export class HumanizeDurationLanguage {

    languages: ILanguageItem = {
        ar: {
            y: (c: any) => { return c === 1 ? 'سنة' : 'سنوات'; },
            mo: (c: any) => { return c === 1 ? 'شهر' : 'أشهر'; },
            w: (c: any) => { return c === 1 ? 'أسبوع' : 'أسابيع'; },
            d: (c: any) => { return c === 1 ? 'يوم' : 'أيام'; },
            h: (c: any) => { return c === 1 ? 'ساعة' : 'ساعات'; },
            m: (c: any) => { return c === 1 ? 'دقيقة' : 'دقائق'; },
            s: (c: any) => { return c === 1 ? 'ثانية' : 'ثواني'; },
            ms: (c: any) => { return c === 1 ? 'جزء من الثانية' : 'أجزاء من الثانية'; },
            decimal: ','
        },
        ca: {
            y: (c: any) => { return 'any' + (c !== 1 ? 's' : ''); },
            mo: (c: any) => { return 'mes' + (c !== 1 ? 'os' : ''); },
            w: (c: any) => { return 'setman' + (c !== 1 ? 'es' : 'a'); },
            d: (c: any) => { return 'di' + (c !== 1 ? 'es' : 'a'); },
            h: (c: any) => { return 'hor' + (c !== 1 ? 'es' : 'a'); },
            m: (c: any) => { return 'minut' + (c !== 1 ? 's' : ''); },
            s: (c: any) => { return 'segon' + (c !== 1 ? 's' : ''); },
            ms: (c: any) => { return 'milisegon' + (c !== 1 ? 's' : ''); },
            decimal: ','
        },
        cs: {
            y: (c: any) => { return ['rok', 'roku', 'roky', 'let'][this.getCzechForm(c)]; },
            mo: (c: any) => { return ['měsíc', 'měsíce', 'měsíce', 'měsíců'][this.getCzechForm(c)]; },
            w: (c: any) => { return ['týden', 'týdne', 'týdny', 'týdnů'][this.getCzechForm(c)]; },
            d: (c: any) => { return ['den', 'dne', 'dny', 'dní'][this.getCzechForm(c)]; },
            h: (c: any) => { return ['hodina', 'hodiny', 'hodiny', 'hodin'][this.getCzechForm(c)]; },
            m: (c: any) => { return ['minuta', 'minuty', 'minuty', 'minut'][this.getCzechForm(c)]; },
            s: (c: any) => { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][this.getCzechForm(c)]; },
            ms: (c: any) => { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][this.getCzechForm(c)]; },
            decimal: ','
        },
        da: {
            y: 'år',
            mo: (c: any) => { return 'måned' + (c !== 1 ? 'er' : ''); },
            w: (c: any) => { return 'uge' + (c !== 1 ? 'r' : ''); },
            d: (c: any) => { return 'dag' + (c !== 1 ? 'e' : ''); },
            h: (c: any) => { return 'time' + (c !== 1 ? 'r' : ''); },
            m: (c: any) => { return 'minut' + (c !== 1 ? 'ter' : ''); },
            s: (c: any) => { return 'sekund' + (c !== 1 ? 'er' : ''); },
            ms: (c: any) => { return 'millisekund' + (c !== 1 ? 'er' : ''); },
            decimal: ','
        },
        de: {
            y: (c: any) => { return 'Jahr' + (c !== 1 ? 'e' : ''); },
            mo: (c: any) => { return 'Monat' + (c !== 1 ? 'e' : ''); },
            w: (c: any) => { return 'Woche' + (c !== 1 ? 'n' : ''); },
            d: (c: any) => { return 'Tag' + (c !== 1 ? 'e' : ''); },
            h: (c: any) => { return 'Stunde' + (c !== 1 ? 'n' : ''); },
            m: (c: any) => { return 'Minute' + (c !== 1 ? 'n' : ''); },
            s: (c: any) => { return 'Sekunde' + (c !== 1 ? 'n' : ''); },
            ms: (c: any) => { return 'Millisekunde' + (c !== 1 ? 'n' : ''); },
            decimal: ','
        },
        en: {
            y: (c: any) => { return 'year' + (c !== 1 ? 's' : ''); },
            mo: (c: any) => { return 'month' + (c !== 1 ? 's' : ''); },
            w: (c: any) => { return 'week' + (c !== 1 ? 's' : ''); },
            d: (c: any) => { return 'day' + (c !== 1 ? 's' : ''); },
            h: (c: any) => { return 'hour' + (c !== 1 ? 's' : ''); },
            m: (c: any) => { return 'minute' + (c !== 1 ? 's' : ''); },
            s: (c: any) => { return 'second' + (c !== 1 ? 's' : ''); },
            ms: (c: any) => { return 'millisecond' + (c !== 1 ? 's' : ''); },
            decimal: '.'
        },
        es: {
            y: (c: any) => { return 'año' + (c !== 1 ? 's' : ''); },
            mo: (c: any) => { return 'mes' + (c !== 1 ? 'es' : ''); },
            w: (c: any) => { return 'semana' + (c !== 1 ? 's' : ''); },
            d: (c: any) => { return 'día' + (c !== 1 ? 's' : ''); },
            h: (c: any) => { return 'hora' + (c !== 1 ? 's' : ''); },
            m: (c: any) => { return 'minuto' + (c !== 1 ? 's' : ''); },
            s: (c: any) => { return 'segundo' + (c !== 1 ? 's' : ''); },
            ms: (c: any) => { return 'milisegundo' + (c !== 1 ? 's' : ''); },
            decimal: ','
        },
        fi: {
            y: (c: any) => { return c === 1 ? 'vuosi' : 'vuotta'; },
            mo: (c: any) => { return c === 1 ? 'kuukausi' : 'kuukautta'; },
            w: (c: any) => { return 'viikko' + (c !== 1 ? 'a' : ''); },
            d: (c: any) => { return 'päivä' + (c !== 1 ? 'ä' : ''); },
            h: (c: any) => { return 'tunti' + (c !== 1 ? 'a' : ''); },
            m: (c: any) => { return 'minuutti' + (c !== 1 ? 'a' : ''); },
            s: (c: any) => { return 'sekunti' + (c !== 1 ? 'a' : ''); },
            ms: (c: any) => { return 'millisekunti' + (c !== 1 ? 'a' : ''); },
            decimal: ','
        },
        fr: {
            y: (c: any) => { return 'an' + (c !== 1 ? 's' : ''); },
            mo: 'mois',
            w: (c: any) => { return 'semaine' + (c !== 1 ? 's' : ''); },
            d: (c: any) => { return 'jour' + (c !== 1 ? 's' : ''); },
            h: (c: any) => { return 'heure' + (c !== 1 ? 's' : ''); },
            m: (c: any) => { return 'minute' + (c !== 1 ? 's' : ''); },
            s: (c: any) => { return 'seconde' + (c !== 1 ? 's' : ''); },
            ms: (c: any) => { return 'milliseconde' + (c !== 1 ? 's' : ''); },
            decimal: ','
        },
        gr: {
            y: (c: any) => { return c === 1 ? 'χρόνος' : 'χρόνια'; },
            mo: (c: any) => { return c === 1 ? 'μήνας' : 'μήνες'; },
            w: (c: any) => { return c === 1 ? 'εβδομάδα' : 'εβδομάδες'; },
            d: (c: any) => { return c === 1 ? 'μέρα' : 'μέρες'; },
            h: (c: any) => { return c === 1 ? 'ώρα' : 'ώρες'; },
            m: (c: any) => { return c === 1 ? 'λεπτό' : 'λεπτά'; },
            s: (c: any) => { return c === 1 ? 'δευτερόλεπτο' : 'δευτερόλεπτα'; },
            ms: (c: any) => { return c === 1 ? 'χιλιοστό του δευτερολέπτου' : 'χιλιοστά του δευτερολέπτου'; },
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
            y: (c: any) => { return 'ann' + (c !== 1 ? 'i' : 'o'); },
            mo: (c: any) => { return 'mes' + (c !== 1 ? 'i' : 'e'); },
            w: (c: any) => { return 'settiman' + (c !== 1 ? 'e' : 'a'); },
            d: (c: any) => { return 'giorn' + (c !== 1 ? 'i' : 'o'); },
            h: (c: any) => { return 'or' + (c !== 1 ? 'e' : 'a'); },
            m: (c: any) => { return 'minut' + (c !== 1 ? 'i' : 'o'); },
            s: (c: any) => { return 'second' + (c !== 1 ? 'i' : 'o'); },
            ms: (c: any) => { return 'millisecond' + (c !== 1 ? 'i' : 'o'); },
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
            y: (c: any) => { return ((c % 10 === 0) || (c % 100 >= 10 && c % 100 <= 20)) ? 'metų' : 'metai'; },
            mo: (c: any) => { return ['mėnuo', 'mėnesiai', 'mėnesių'][this.getLithuanianForm(c)]; },
            w: (c: any) => { return ['savaitė', 'savaitės', 'savaičių'][this.getLithuanianForm(c)]; },
            d: (c: any) => { return ['diena', 'dienos', 'dienų'][this.getLithuanianForm(c)]; },
            h: (c: any) => { return ['valanda', 'valandos', 'valandų'][this.getLithuanianForm(c)]; },
            m: (c: any) => { return ['minutė', 'minutės', 'minučių'][this.getLithuanianForm(c)]; },
            s: (c: any) => { return ['sekundė', 'sekundės', 'sekundžių'][this.getLithuanianForm(c)]; },
            ms: (c: any) => { return ['milisekundė', 'milisekundės', 'milisekundžių'][this.getLithuanianForm(c)]; },
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
            mo: (c: any) => { return c === 1 ? 'maand' : 'maanden'; },
            w: (c: any) => { return c === 1 ? 'week' : 'weken'; },
            d: (c: any) => { return c === 1 ? 'dag' : 'dagen'; },
            h: 'uur',
            m: (c: any) => { return c === 1 ? 'minuut' : 'minuten'; },
            s: (c: any) => { return c === 1 ? 'seconde' : 'seconden'; },
            ms: (c: any) => { return c === 1 ? 'milliseconde' : 'milliseconden'; },
            decimal: ','
        },
        no: {
            y: 'år',
            mo: (c: any) => { return 'måned' + (c !== 1 ? 'er' : ''); },
            w: (c: any) => { return 'uke' + (c !== 1 ? 'r' : ''); },
            d: (c: any) => { return 'dag' + (c !== 1 ? 'er' : ''); },
            h: (c: any) => { return 'time' + (c !== 1 ? 'r' : ''); },
            m: (c: any) => { return 'minutt' + (c !== 1 ? 'er' : ''); },
            s: (c: any) => { return 'sekund' + (c !== 1 ? 'er' : ''); },
            ms: (c: any) => { return 'millisekund' + (c !== 1 ? 'er' : ''); },
            decimal: ','
        },
        pl: {
            y: (c: any) => { return ['rok', 'roku', 'lata', 'lat'][this.getPolishForm(c)]; },
            mo: (c: any) => { return ['miesiąc', 'miesiąca', 'miesiące', 'miesięcy'][this.getPolishForm(c)]; },
            w: (c: any) => { return ['tydzień', 'tygodnia', 'tygodnie', 'tygodni'][this.getPolishForm(c)]; },
            d: (c: any) => { return ['dzień', 'dnia', 'dni', 'dni'][this.getPolishForm(c)]; },
            h: (c: any) => { return ['godzina', 'godziny', 'godziny', 'godzin'][this.getPolishForm(c)]; },
            m: (c: any) => { return ['minuta', 'minuty', 'minuty', 'minut'][this.getPolishForm(c)]; },
            s: (c: any) => { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][this.getPolishForm(c)]; },
            ms: (c: any) => { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][this.getPolishForm(c)]; },
            decimal: ','
        },
        pt: {
            y: (c: any) => { return 'ano' + (c !== 1 ? 's' : ''); },
            mo: (c: any) => { return c !== 1 ? 'meses' : 'mês'; },
            w: (c: any) => { return 'semana' + (c !== 1 ? 's' : ''); },
            d: (c: any) => { return 'dia' + (c !== 1 ? 's' : ''); },
            h: (c: any) => { return 'hora' + (c !== 1 ? 's' : ''); },
            m: (c: any) => { return 'minuto' + (c !== 1 ? 's' : ''); },
            s: (c: any) => { return 'segundo' + (c !== 1 ? 's' : ''); },
            ms: (c: any) => { return 'milissegundo' + (c !== 1 ? 's' : ''); },
            decimal: ','
        },
        ru: {
            y: (c: any) => { return ['лет', 'год', 'года'][this.getSlavicForm(c)]; },
            mo: (c: any) => { return ['месяцев', 'месяц', 'месяца'][this.getSlavicForm(c)]; },
            w: (c: any) => { return ['недель', 'неделя', 'недели'][this.getSlavicForm(c)]; },
            d: (c: any) => { return ['дней', 'день', 'дня'][this.getSlavicForm(c)]; },
            h: (c: any) => { return ['часов', 'час', 'часа'][this.getSlavicForm(c)]; },
            m: (c: any) => { return ['минут', 'минута', 'минуты'][this.getSlavicForm(c)]; },
            s: (c: any) => { return ['секунд', 'секунда', 'секунды'][this.getSlavicForm(c)]; },
            ms: (c: any) => { return ['миллисекунд', 'миллисекунда', 'миллисекунды'][this.getSlavicForm(c)]; },
            decimal: ','
        },
        uk: {
            y: (c: any) => { return ['років', 'рік', 'роки'][this.getSlavicForm(c)]; },
            mo: (c: any) => { return ['місяців', 'місяць', 'місяці'][this.getSlavicForm(c)]; },
            w: (c: any) => { return ['неділь', 'неділя', 'неділі'][this.getSlavicForm(c)]; },
            d: (c: any) => { return ['днів', 'день', 'дні'][this.getSlavicForm(c)]; },
            h: (c: any) => { return ['годин', 'година', 'години'][this.getSlavicForm(c)]; },
            m: (c: any) => { return ['хвилин', 'хвилина', 'хвилини'][this.getSlavicForm(c)]; },
            s: (c: any) => { return ['секунд', 'секунда', 'секунди'][this.getSlavicForm(c)]; },
            ms: (c: any) => { return ['мілісекунд', 'мілісекунда', 'мілісекунди'][this.getSlavicForm(c)]; },
            decimal: ','
        },
        sv: {
            y: 'år',
            mo: (c: any) => { return 'månad' + (c !== 1 ? 'er' : ''); },
            w: (c: any) => { return 'veck' + (c !== 1 ? 'or' : 'a'); },
            d: (c: any) => { return 'dag' + (c !== 1 ? 'ar' : ''); },
            h: (c: any) => { return 'timm' + (c !== 1 ? 'ar' : 'e'); },
            m: (c: any) => { return 'minut' + (c !== 1 ? 'er' : ''); },
            s: (c: any) => { return 'sekund' + (c !== 1 ? 'er' : ''); },
            ms: (c: any) => { return 'millisekund' + (c !== 1 ? 'er' : ''); },
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

    addLanguage(key: string, lang: ILanguage) {
        this.languages[key] = lang;
    }

    // Internal helper function for Czech language.
    getCzechForm(c: any) {
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
    getPolishForm(c: any) {
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
    getSlavicForm(c: any) {
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
    }

    // Internal helper function for Lithuanian language.
    getLithuanianForm(c: any) {
        if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
            return 0;
        } else if (Math.floor(c) !== c || (c % 10 >= 2 && c % 100 > 20) || (c % 10 >= 2 && c % 100 < 10)) {
            return 1;
        } else {
            return 2;
        }
    }

}
