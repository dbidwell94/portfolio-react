import {
  IThemeStore,
  IThemeAction,
  ThemeActionTypes,
} from "src/state/themeReducer/types";

const initialState: IThemeStore = {
  navbarHeight: 6,
};

export default function (
  state = initialState,
  action: IThemeAction
): IThemeStore {
  switch (action.type) {
    case ThemeActionTypes.SET_NAVBAR_HEIGHT:
      return { ...state, navbarHeight: action.payload };

    default:
      return state;
  }
}
