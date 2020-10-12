import { IPizza } from '../../interfaces/pizzas';
import { 
  ADD_PIZZA_CART, 
  CLEAR_CART, 
  REMOVE_CART_ITEM, 
  MINUS_CART_ITEM, 
  PLUS_CART_ITEM, 
  AddPizzaCartActionType, 
  ClearCartActionType, 
  RemoveCartItemActionType, 
  MinusCartItemActionType, 
  PlusCartItemActionType } from '../reducers/cart';

export const addPizzaToCartAction = (pizzaObj: IPizza): AddPizzaCartActionType => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCartAction = (): ClearCartActionType => ({
  type: CLEAR_CART,
});

export const removeCartItemAction = (id: number): RemoveCartItemActionType => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const minusCartItemAction = (id: number): MinusCartItemActionType => ({
  type: MINUS_CART_ITEM,
  payload: id,
});

export const plusCartItemAction = (id: number): PlusCartItemActionType => ({
  type: PLUS_CART_ITEM,
  payload: id,
});
