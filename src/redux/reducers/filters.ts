import { IFilters, ISortParams } from '../../interfaces/filters';

const initialState: IFilters = {
  category: null,
  sortBy: { name: "популярности", type: "popular", order: "desc" },
};

export const SET_SORT_BY = "SET_SORT_BY";
export const SET_CATEGORY = "SET_CATEGORY";

export type SetSortByActionType = {
  type: typeof SET_SORT_BY;
  payload: ISortParams;
};

export type SetCategoryActionType = {
  type: typeof SET_CATEGORY;
  payload: number;
};

type ActionTypesFilters = SetSortByActionType | SetCategoryActionType;


export const filters = (state = initialState, action: ActionTypesFilters): IFilters => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
