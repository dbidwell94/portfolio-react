import { Action } from "redux";

export enum ThemeActionTypes {
    SET_NAVBAR_HEIGHT
}

export interface IThemeAction extends Action {
    type: ThemeActionTypes,
    payload: number
}

export interface IThemeStore {
    navbarHeight: number
}