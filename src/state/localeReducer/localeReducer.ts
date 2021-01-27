import {
  ILocalAction,
  localActionTypes,
  ILocalStore,
} from "src/state/localeReducer/types";
import { getBrowserLanguages } from "client-tools/translate";

const initialState: ILocalStore = {
  currentLanguage: getBrowserLanguages()[0] || "en",
};

export default function (
  state = initialState,
  action: ILocalAction
): ILocalStore {
  switch (action.type) {
    case localActionTypes.SET_LANGUAGE:
      return { ...state, currentLanguage: action.payload };

    default:
      return state;
  }
}
