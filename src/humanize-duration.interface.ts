export interface HumanizeDurationOptions {
  language?: string;
  delimiter?: string;
  spacer?: string;
  conjunction?: string;
  serialComma?: boolean;
  units?: UnitName[];
  largest?: number;
  languages?: LanguageItem;
  round?: boolean;
  decimal?: string;
  unitMeasures?: {
    [key: string]: number;
  };
}

export interface LanguageItem {
  [key: string]: Language;
}

export interface Language {
  y(count: number): string;
  mo(count: number): string;
  w(count: number): string;
  d(count: number): string;
  h(count: number): string;
  m(count: number): string;
  s(count: number): string;
  ms(count: number): string;
  decimal: string;
}

export interface Piece {
  unitCount: number;
  unitName: UnitName;
}

export type UnitName = "y" | "mo" | "w" | "d" | "h" | "m" | "s" | "ms";
