import { ILocalAction, localActionTypes } from "src/state/localeReducer/types";
import { ITranslationKeys } from "client-tools/translate";
import { IThunkAction } from "..";
import translate from "client-tools/translate";
import cookie from "js-cookie";

export function setLanguage(
  language: ITranslationKeys
): IThunkAction<ILocalAction> {
  return function (dispatch) {
    translate.changeLanguage(language);
    cookie.set("lang", language);
    dispatch({ type: localActionTypes.SET_LANGUAGE, payload: language });
  };
}
