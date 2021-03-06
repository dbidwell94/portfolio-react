import { Action } from "redux";
import { ITranslationKeys } from "client-tools/translate";

export enum localActionTypes {
  SET_LANGUAGE = "SET_LANGUAGE",
}

export interface ILocalAction extends Action {
  type: localActionTypes;
  payload: ITranslationKeys;
}

export interface ILocaleStore {
    currentLanguage: ITranslationKeys
}