import {
  HumanizeDurationOptions,
  Language,
  Piece,
  UnitName
} from "./humanize-duration.interface";
import { HumanizeDurationLanguage } from "./humanize-duration.lang";

export class HumanizeDuration {
  defaultOptions: HumanizeDurationOptions = {
    language: "en",
    delimiter: ", ",
    spacer: " ",
    conjunction: "",
    serialComma: true,
    units: ["y", "mo", "w", "d", "h", "m", "s"],
    languages: {},
    largest: 10,
    decimal: ".",
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

  private options: HumanizeDurationOptions = undefined;

  constructor(private languageUtil: HumanizeDurationLanguage) {
    this.options = this.defaultOptions;
  }

  humanize(value: number, tempOptions?: HumanizeDurationOptions) {
    const options =
      tempOptions !== undefined
        ? this.extend(this.options, tempOptions)
        : this.defaultOptions;
    return this.doHumanization(value, options);
  }

  setOptions(passedOptions: HumanizeDurationOptions) {
    this.options =
      passedOptions !== undefined
        ? this.extend(this.defaultOptions, passedOptions)
        : this.defaultOptions;
  }

  getSupportedLanguages() {
    const result: string[] = [];
    for (const language in this.languageUtil.languages) {
      if (this.languageUtil.languages.hasOwnProperty(language)) {
        result.push(language);
      }
    }
    return result;
  }

  addLanguage(key: string, lang: Language) {
    this.languageUtil.addLanguage(key, lang);
  }

  private doHumanization(ms: number, options: HumanizeDurationOptions) {
    let i: number, len: number, piece: Piece;

    // Make sure we have a positive number.
    // Has the nice sideffect of turning Number objects into primitives.
    ms = Math.abs(ms);

    const dictionary =
      options.languages[options.language] ||
      this.languageUtil.languages[options.language];
    if (!dictionary) {
      throw new Error("No language " + dictionary + ".");
    }

    const pieces: Piece[] = [];

    // Start at the top and keep removing units, bit by bit.
    let unitName: UnitName;
    let unitMS: number, unitCount: number;
    for (i = 0, len = options.units.length; i < len; i++) {
      unitName = options.units[i];
      unitMS = options.unitMeasures[unitName];

      // What's the number of full units we can fit?
      if (i + 1 === len) {
        unitCount = ms / unitMS;
      } else {
        unitCount = Math.floor(ms / unitMS);
      }

      // Add the string.
      pieces.push({
        unitCount: unitCount,
        unitName: unitName
      });

      // Remove what we just figured out.
      ms -= unitCount * unitMS;
    }

    let firstOccupiedUnitIndex = 0;
    for (i = 0; i < pieces.length; i++) {
      if (pieces[i].unitCount) {
        firstOccupiedUnitIndex = i;
        break;
      }
    }

    if (options.round) {
      let ratioToLargerUnit: number, previousPiece: Piece;
      for (i = pieces.length - 1; i >= 0; i--) {
        piece = pieces[i];
        piece.unitCount = Math.round(piece.unitCount);

        if (i === 0) {
          break;
        }

        previousPiece = pieces[i - 1];

        ratioToLargerUnit =
          options.unitMeasures[previousPiece.unitName] /
          options.unitMeasures[piece.unitName];
        if (
          piece.unitCount % ratioToLargerUnit === 0 ||
          (options.largest && options.largest - 1 < i - firstOccupiedUnitIndex)
        ) {
          previousPiece.unitCount += piece.unitCount / ratioToLargerUnit;
          piece.unitCount = 0;
        }
      }
    }

    const result: string[] = [];
    for (i = 0, pieces.length; i < len; i++) {
      piece = pieces[i];
      if (piece.unitCount) {
        result.push(
          this.render(piece.unitCount, piece.unitName, dictionary, options)
        );
      }

      if (result.length === options.largest) {
        break;
      }
    }

    if (result.length) {
      if (!options.conjunction || result.length === 1) {
        return result.join(options.delimiter);
      } else if (result.length === 2) {
        return result.join(options.conjunction);
      } else if (result.length > 2) {
        return (
          result.slice(0, -1).join(options.delimiter) +
          (options.serialComma ? "," : "") +
          options.conjunction +
          result.slice(-1)
        );
      }
    } else {
      return this.render(
        0,
        options.units[options.units.length - 1],
        dictionary,
        options
      );
    }
  }

  private render(
    count: number,
    type: UnitName,
    dictionary: Language,
    options: HumanizeDurationOptions
  ) {
    let decimal: string;
    if (options.decimal === void 0) {
      decimal = dictionary.decimal;
    } else {
      decimal = options.decimal;
    }

    const countStr = count.toString().replace(".", decimal.toString());

    const word: string = dictionary[type](count);

    return countStr + options.spacer + word;
  }

  private extend(
    options: HumanizeDurationOptions,
    override: HumanizeDurationOptions
  ) {
    for (const prop in override) {
      if (options.hasOwnProperty(prop)) {
        options[prop] = override[prop];
      }
    }

    return options;
  }
}
