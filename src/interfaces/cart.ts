export interface ICartPizzaItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  size: number;
  type: string;
}

export interface ICart {
  items: any;
  totalPrice: number;
  totalCount: number;
}

