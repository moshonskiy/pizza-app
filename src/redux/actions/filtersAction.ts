import { ISortParams } from '../../interfaces/filters'
import { SET_CATEGORY, SET_SORT_BY, SetCategoryActionType, SetSortByActionType } from '../reducers/filters';


export const setSortByAction = (sortParams: ISortParams): SetSortByActionType => {
  return { type: SET_SORT_BY, payload: sortParams };
};

export const setCategoryAction = (index: number): SetCategoryActionType => {
  return { type: SET_CATEGORY, payload: index };
};
