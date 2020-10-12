import { IPizzas } from './pizzas';
import { IFilters } from './filters';
import { ICart } from './cart';

export interface RootState {
    pizzas: IPizzas;
    filters: IFilters;
    cart: ICart;
  }