import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { SortPopUp } from "../components/SortPopUp";
import { LoadingBlock } from "../components/LoadingBlock";

import {
  setCategoryAction,
  setSortByAction
} from "../redux/actions/filtersAction";
import { fetchPizzasAction } from "../redux/actions/pizzasAction";
import { addPizzaToCartAction } from "../redux/actions/cartAction";

import { RootState } from "../interfaces/rootState";
import { IPizza } from '../interfaces/pizzas';
import { ISortParams } from '../interfaces/filters';

import { SORT_ITEMS, CATEGORY_NAMES } from '../constants/categories';


export const Home: React.FC = () => {
  const { items, isLoaded } = useSelector((state: RootState) => state.pizzas);
  const { category, sortBy } = useSelector((state: RootState) => state.filters);

  const pizzaItems: any = useSelector((state: RootState) => state.cart.items);

  const activeCategory: number | null = useSelector((state: RootState) => state.filters.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzasAction(category, sortBy));
  }, [category, sortBy]);

  const handleSelectCategory = (index: number): void => {
    dispatch(setCategoryAction(index));
  };

  const handleSelectSortType = (sortParams: ISortParams): void => {
    dispatch(setSortByAction(sortParams));
  };

  const handleAddPizza = (pizza: IPizza): void => {
    dispatch(addPizzaToCartAction(pizza));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={CATEGORY_NAMES}
          onClickCategory={handleSelectCategory}
          activeCategory={category}
        />

        <SortPopUp
          items={SORT_ITEMS}
          activeSortType={sortBy.type}
          onClickSortType={handleSelectSortType}
        />
      </div>
  <h2 className="content__title">{activeCategory !== null ? CATEGORY_NAMES[activeCategory] : "Все пиццы"}</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza: any) => {
              return (
                <PizzaBlock
                  onAddPizza={(pizza: any) => handleAddPizza(pizza)}
                  key={pizza.id}
                  item={pizza}
                  pizzaCount={
                    pizzaItems[pizza.id] && pizzaItems[pizza.id].items.length
                  }
                />
              );
            })
          : Array(10)
              .fill(0)
              .map((_, i) => <LoadingBlock key={i} />)}
      </div>
    </div>
  );
};
