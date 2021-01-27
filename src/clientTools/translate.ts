import en from "src/static/translation/en/strings.json";
import es from "src/static/translation/es/strings.json";
import fr from "src/static/translation/fr/strings.json";
import de from 'src/static/translation/de/strings.json';
import zh from 'src/static/translation/zh/strings.json';
import ru from 'src/static/translation/ru/strings.json';
import ko from 'src/static/translation/ko/strings.json';
import { decode } from "html-entities";

export type ITranslationStrings = keyof typeof en;

const strings = { de, en, es, fr, ko, ru, zh };

const htmlEntityRegex = /(&#\S+;)/gm;

export type ITranslationKeys = keyof typeof strings;

class Translate {
  private __currentLanguage: ITranslationKeys;

  constructor(languageCode: ITranslationKeys) {
    this.__currentLanguage = languageCode;
  }

  get currentLanguage() {
    return this.__currentLanguage;
  }

  get(toTranslate: ITranslationStrings): string {
    if (!(toTranslate in en)) {
      return toTranslate;
    }
    let translatedString = strings[this.__currentLanguage][toTranslate];
    const matches = translatedString.match(htmlEntityRegex);
    if (!matches || matches.length < 1) {
      return translatedString;
    }
    matches.forEach((match) => {
      translatedString = translatedString.replace(match, decode(match));
    });
    return translatedString;
  }

  changeLanguage(toChangeTo: ITranslationKeys): void {
    if (toChangeTo in strings) {
      this.__currentLanguage = toChangeTo;
    }
  }
}

export function getBrowserLanguages(): ITranslationKeys[] {
  const languages: ITranslationKeys[] = navigator.languages
    .map((language) => language.substr(0, 2))
    .filter((language) => language in strings) as ITranslationKeys[];
  return languages;
}

const translateClass = new Translate(getBrowserLanguages()[0] || "en");

export default translateClass;
