import en from "src/static/translation/en/strings.json";
import es from "src/static/translation/es/strings.json";
import fr from "src/static/translation/fr/strings.json";
import de from "src/static/translation/de/strings.json";
import zh from "src/static/translation/zh/strings.json";
import ru from "src/static/translation/ru/strings.json";
import ko from "src/static/translation/ko/strings.json";
import { decode } from "html-entities";
import cookie from "js-cookie";
import React, {useState} from 'react';

export type ITranslationStrings = keyof typeof en;

const htmlEntityRegex = /(&#\S+;)/gm;

export type ITranslationKeys = keyof typeof Translate.translationStrings;

export default class Translate {
  private __currentLanguage: ITranslationKeys;
  static readonly translationStrings = { de, en, es, fr, ko, ru, zh };

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
    let translatedString =
      Translate.translationStrings[this.__currentLanguage][toTranslate];
    const matches = translatedString.match(htmlEntityRegex);
    if (!matches || matches.length < 1) {
      return translatedString;
    }
    matches.forEach((match) => {
      translatedString = translatedString.replace(match, decode(match));
    });
    return translatedString;
  }

  static getBrowserLanguages(): ITranslationKeys[] {
    const languages: ITranslationKeys[] = navigator.languages
      .map((language) => language.substr(0, 2))
      .filter(
        (language) => language in Translate.translationStrings
      ) as ITranslationKeys[];
    return languages;
  }

  static getBrowserLanguageFromCookie(): ITranslationKeys | null {
    const langKey = cookie.get("lang");
    if (!langKey) {
      return null;
    }

    const toReturn = Object.keys(Translate.translationStrings).filter(
      (key) => key === langKey
    );

    return (toReturn as any) as ITranslationKeys;
  }

  get strings() {
    return Translate.translationStrings;
  }
}
