import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pizzas as pizzasReducer } from "./reducers/pizzas";
import { filters as filtersReducer } from "./reducers/filters";
import { cart as cartReducer } from "./reducers/cart";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
  cart: cartReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
