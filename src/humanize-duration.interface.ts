export interface IHumanizeDurationOptions {
    language: string;
    delimiter: string;
    spacer: string;
    conjunction: string;
    serialComma: boolean;
    units: string[];
    largest: number;
    languages: ILanguageItem;
    round: boolean;
    decimal: string;
    unitMeasures: {
        [key: string]: number;
    };
}

export interface ILanguageItem {
    [key: string]: {
        y: any;
        mo: any;
        w: any;
        d: any;
        h: any;
        m: any;
        s: any;
        ms: any;
        decimal: string
    };
}

export interface ILanguage {
    y: any;
    mo: any;
    w: any;
    d: any;
    h: any;
    m: any;
    s: any;
    ms: any;
    decimal: string;
}
