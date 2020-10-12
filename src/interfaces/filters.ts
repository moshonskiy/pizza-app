export interface IFilters {
    category: null | number;
    sortBy: ISortBy;
  }

  export interface ISortBy {
    name: string;
    type: string;
    order: string;
  }
  
  export interface ISortParams {
    name: string;
    type: string;
    order: string;
  }