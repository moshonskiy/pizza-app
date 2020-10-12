import { getTotalCount, getTotalPrice } from './cartFunctionHelpers';

import { ICart } from '../../interfaces/cart';
import { IPizza } from '../../interfaces/pizzas';

const initialState: ICart = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const ADD_PIZZA_CART = "ADD_PIZZA_CART";
export const CLEAR_CART = "CLEAR_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const MINUS_CART_ITEM = "MINUS_CART_ITEM";
export const PLUS_CART_ITEM = "PLUS_CART_ITEM";

export type AddPizzaCartActionType = {
  type: typeof ADD_PIZZA_CART;
  payload: IPizza;
};
export type ClearCartActionType = {
  type: typeof CLEAR_CART
};
export type RemoveCartItemActionType = {
  type: typeof REMOVE_CART_ITEM;
  payload: number;
};
export type MinusCartItemActionType = {
  type: typeof MINUS_CART_ITEM;
  payload: number;
};
export type PlusCartItemActionType = {
  type: typeof PLUS_CART_ITEM;
  payload: number;
};

type ActionTypesCart = AddPizzaCartActionType | ClearCartActionType | RemoveCartItemActionType | MinusCartItemActionType | PlusCartItemActionType;


export const cart = (state = initialState, action: ActionTypesCart): ICart => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
          totalCount: currentPizzaItems.length,
        },
      };
      const allPizzas = [].concat.apply(
        [],
        Object.values(newItems).map((obj: any) => obj.items)
      );
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case CLEAR_CART:
      return {
        ...state,
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    case REMOVE_CART_ITEM: {
      const newItems = { ...state.items };
      const currTotalPrice = newItems[action.payload].totalPrice;
      const currTotalCount = newItems[action.payload].totalCount;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice! - currTotalPrice,
        totalCount: state.totalCount! - currTotalCount,
      };
    }
    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
          totalCount: newObjItems.length,
        },
      };

      const totalCount = getTotalCount(newItems, "items.length");
      const totalPrice = getTotalCount(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case PLUS_CART_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length >= 1
          ? [
              ...state.items[action.payload].items,
              state.items[action.payload].items[0],
            ]
          : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
          totalCount: newObjItems.length,
        },
      };

      const totalCount = getTotalCount(newItems, "items.length");
      const totalPrice = getTotalCount(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};
