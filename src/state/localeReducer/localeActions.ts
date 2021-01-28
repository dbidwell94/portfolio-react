import { ILocalAction, localActionTypes } from "src/state/localeReducer/types";
import { ITranslationKeys } from "client-tools/translate";
import { IThunkAction } from "..";
import cookie from "js-cookie";

export function setLanguage(
  language: ITranslationKeys
): IThunkAction<ILocalAction> {
  return function (dispatch) {
    cookie.set("lang", language);
    dispatch({ type: localActionTypes.SET_LANGUAGE, payload: language });
  };
}
