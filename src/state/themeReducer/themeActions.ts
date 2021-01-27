import { ThemeActionTypes, IThemeAction } from "src/state/themeReducer/types";
import { IThunkAction } from "src/state";

export function setNavbarHeight(height: number): IThemeAction {
  return { payload: height, type: ThemeActionTypes.SET_NAVBAR_HEIGHT };
}
