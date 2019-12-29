import { HumanizeDuration } from "./humanize-duration";
import { HumanizeDurationLanguage } from "./humanize-duration.lang";

describe("HumanizeDuration", () => {
  it("humanizes get supported languages", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    expect(service.getSupportedLanguages()).toEqual([
      "ar",
      "bg",
      "ca",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "es",
      "et",
      "fa",
      "fi",
      "fo",
      "fr",
      "hr",
      "hu",
      "id",
      "is",
      "it",
      "ja",
      "ko",
      "lo",
      "lt",
      "lv",
      "ms",
      "nl",
      "no",
      "pl",
      "pt",
      "ro",
      "ru",
      "uk",
      "ur",
      "sk",
      "sv",
      "tr",
      "th",
      "vi",
      "zh_CN",
      "zh_TW"
    ]);
  });

  it("humanizes English when passed no arguments", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    expect(service.humanize(1000)).toBe("1 second");
  });

  it("humanizes English when passed an empty object", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({});
    expect(service.humanize(1000)).toBe("1 second");
  });

  it("can change the delimiter", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ delimiter: "+" });
    expect(service.humanize(0)).toBe("0 seconds");
    expect(service.humanize(1000)).toBe("1 second");
    expect(service.humanize(363000)).toBe("6 minutes+3 seconds");
  });

  it("can change the spacer", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ spacer: " whole " });
    expect(service.humanize(0)).toBe("0 whole seconds");
    expect(service.humanize(1000)).toBe("1 whole second");
    expect(service.humanize(260040000)).toBe("3 whole days, 14 whole minutes");
  });

  it("can use a conjunction", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ conjunction: " and " });
    expect(service.humanize(0)).toBe("0 seconds");
    expect(service.humanize(1000)).toBe("1 second");
    expect(service.humanize(260040000)).toBe("3 days and 14 minutes");
    expect(service.humanize(10874000)).toBe(
      "3 hours, 1 minute, and 14 seconds"
    );
  });

  it("can use a conjunction without a serial comma", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());

    service.setOptions({
      conjunction: " & ",
      serialComma: false
    });

    expect(service.humanize(1000)).toBe("1 second");
    expect(service.humanize(260040000)).toBe("3 days & 14 minutes");
    expect(service.humanize(10874000)).toBe("3 hours, 1 minute & 14 seconds");
  });

  it("can change the units", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ units: ["d"] });

    expect(service.humanize(0)).toBe("0 days");
    expect(service.humanize(21600 * 1000)).toBe("0.25 days");
    expect(service.humanize(604800 * 1000)).toBe("7 days");
  });

  it("can overwrite the unit measures in the initializer", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({
      unitMeasures: {
        y: 10512000000,
        mo: 864000000,
        w: 144000000,
        d: 28800000,
        h: 3600000,
        m: 60000,
        s: 1000,
        ms: 1
      }
    });

    expect(service.humanize(1000)).toBe("1 second");
    expect(service.humanize(3600000)).toBe("1 hour");
    expect(service.humanize(28800000)).toBe("1 day");
    expect(service.humanize(144000000)).toBe("1 week");
  });

  it("can change the decimal", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({
      units: ["s"],
      decimal: "what"
    });

    expect(service.humanize(1234)).toBe("1what234 seconds");
    expect(
      service.humanize(1234, {
        decimal: "!!"
      })
    ).toBe("1!!234 seconds");
  });

  it("can do simple rounding", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ round: true });

    expect(service.humanize(0)).toBe("0 seconds");
    expect(service.humanize(499)).toBe("0 seconds");
    expect(service.humanize(500)).toBe("1 second");
    expect(service.humanize(1000)).toBe("1 second");
    expect(service.humanize(1499)).toBe("1 second");
    expect(service.humanize(1500)).toBe("2 seconds");
    expect(service.humanize(1500)).toBe("2 seconds");
    expect(service.humanize(121499)).toBe("2 minutes, 1 second");
    expect(service.humanize(121500)).toBe("2 minutes, 2 seconds");
  });

  it('can do rounding with the "units" option', () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ round: true });

    expect(
      service.humanize(86364000, { units: ["y", "mo", "w", "d", "h"] })
    ).toBe("1 day");
    expect(
      service.humanize(1209564000, { units: ["y", "mo", "w", "d", "h"] })
    ).toBe("2 weeks");
    expect(service.humanize(3692131200000, { units: ["y", "mo"] })).toBe(
      "117 years"
    );
    expect(
      service.humanize(3692131200001, {
        units: ["y", "mo", "w", "d", "h", "m"]
      })
    ).toBe("116 years, 11 months, 4 weeks, 1 day, 4 hours, 30 minutes");
  });

  it('can do rounding with the "largest" option', () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ round: true });

    expect(service.humanize(3692131200000, { largest: 1 })).toBe("117 years");
    expect(service.humanize(3692131200000, { largest: 2 })).toBe("117 years");
    expect(service.humanize(3692131200001, { largest: 100 })).toBe(
      "116 years, 11 months, 4 weeks, 1 day, 4 hours, 30 minutes"
    );
    expect(service.humanize(2838550, { largest: 3 })).toBe(
      "47 minutes, 19 seconds"
    );
  });

  it("can ask for the largest units", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({ largest: 2 });

    expect(service.humanize(0)).toBe("0 seconds");
    expect(service.humanize(1000)).toBe("1 second");
    expect(service.humanize(2000)).toBe("2 seconds");
    expect(service.humanize(540360012)).toBe("6 days, 6 hours");
    expect(service.humanize(540360012)).toBe("6 days, 6 hours");
    expect(service.humanize(540360012, { largest: 3 })).toBe(
      "6 days, 6 hours, 6 minutes"
    );
    expect(service.humanize(540360012, { largest: 100 })).toBe(
      "6 days, 6 hours, 6 minutes, 0.012 seconds"
    );
  });

  it("should work for czech language", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({
      language: "cs"
    });
    expect(service.humanize(71177400000)).toBe("2 roky, 3 měsíce, 2 dny");
  });

  it("should work for overwrite language", () => {
    const service = new HumanizeDuration(new HumanizeDurationLanguage());
    service.setOptions({
      language: "shortEn",
      languages: {
        shortEn: {
          y: () => {
            return "y";
          },
          mo: () => {
            return "mo";
          },
          w: () => {
            return "w";
          },
          d: () => {
            return "d";
          },
          h: () => {
            return "h";
          },
          m: () => {
            return "m";
          },
          s: () => {
            return "s";
          },
          ms: () => {
            return "ms";
          },
          decimal: ","
        }
      }
    });
    expect(service.humanize(71177400000)).toBe("2 y, 3 mo, 2 d");
  });
});
