import { createStore, applyMiddleware, combineReducers, Action } from "redux";
import { createSelectorHook } from "react-redux";
import thunk, { ThunkAction } from "redux-thunk";
import logger from "redux-logger";
import {useDispatch as reduxDispatch} from 'react-redux';

import themeReducer from "src/state/themeReducer/themeReducer";
import localeReducer from "src/state/localeReducer/localeReducer";

const globalStore = combineReducers({ localeReducer, themeReducer });

export type IGlobalState = ReturnType<typeof globalStore>;

export type IThunkAction<T extends Action> = ThunkAction<
  void,
  IGlobalState,
  null,
  T
>;

export const useSelector = createSelectorHook<IGlobalState>();
export const useDispatch = reduxDispatch;

export default createStore(globalStore, applyMiddleware(thunk, logger));
