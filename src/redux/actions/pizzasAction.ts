import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from '../../interfaces/rootState';

import { ISortBy } from "../../interfaces/filters";
import { IPizza } from "../../interfaces/pizzas";

import { SET_PIZZAS, SET_LOADED, SetLoadedActionType, SetPizzasActionType } from '../reducers/pizzas';

export const fetchPizzasAction = (category: null | number, sortBy: ISortBy): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch: (data:any) => void) => {
  dispatch(setLoadedAction(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ""}&_sort=${
        sortBy.type
      }&_order=${sortBy.order}`
    )
    .then(({ data }) => dispatch(setPizzasAction(data)));
};

export const setLoadedAction = (value: boolean): SetLoadedActionType => {
  return { type: SET_LOADED, payload: value };
};

const setPizzasAction = (items: IPizza[]): SetPizzasActionType => {
  return { type: SET_PIZZAS, payload: items };
};
