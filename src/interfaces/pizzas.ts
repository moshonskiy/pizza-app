export interface IPizza {
    id: number;
    imageUrl: string;
    name: string;
    types: number[];
    sizes: number[];
    price: string;
    category: number;
    rating: number;
  }

export interface IPizzas {
    items: IPizza[];
    isLoaded: boolean;
  }