import {
  ILocalAction,
  localActionTypes,
  ILocaleStore,
} from "src/state/localeReducer/types";
import { getBrowserLanguages } from "client-tools/translate";

const initialState: ILocaleStore = {
  currentLanguage: getBrowserLanguages()[0] || "en",
};

export default function (
  state = initialState,
  action: ILocalAction
): ILocaleStore {
  switch (action.type) {
    case localActionTypes.SET_LANGUAGE:
      if (typeof action.type === "string") {
        return { ...state, currentLanguage: action.payload };
      }
      return state;

    default:
      return state;
  }
}
