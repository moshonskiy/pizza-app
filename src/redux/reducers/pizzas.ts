import { IPizza, IPizzas } from "../../interfaces/pizzas";

const initialState: IPizzas = {
  items: [],
  isLoaded: false,
};

export const SET_PIZZAS = "SET_PIZZAS";
export const SET_LOADED = "SET_LOADED";

export type SetPizzasActionType = {
  type: typeof SET_PIZZAS;
  payload: IPizza[];
}

export type SetLoadedActionType = {
  type: typeof SET_LOADED;
  payload: boolean;
}

export type ActionTypesPizzas = SetPizzasActionType | SetLoadedActionType;

export const pizzas = (state = initialState, action: ActionTypesPizzas): IPizzas => {
  switch (action.type) {
    case SET_PIZZAS:
      return { ...state, items: action.payload, isLoaded: true };
    case SET_LOADED:
      return { ...state, isLoaded: action.payload };
    default:
      return state;
  }
};
