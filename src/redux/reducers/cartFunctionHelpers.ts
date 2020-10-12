import { IPizza } from '../../interfaces/pizzas';

/* Функция позволяет получить внутренний массив с пиццами каждого положенного в корзину элемента 
   и использовать его для вычисления текущего кол-ва пицц или текущей цены всех пицц в корзине */

const getObjectKey = (obj: any, path: string): number => {
    const [firstKey, ...keys] = path.split(".");
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };

/* с помощью массива полученного из функции выше вычисляется текущая стоимость строки с пиццей в корзине */

export const getTotalCount = (obj: any, path: string): number => {
  return Object.values(obj).reduce((sum:number, obj) => {
    const value = getObjectKey(obj, path);
    return sum + value;
  }, 0);
};

export const getTotalPrice = (arr: IPizza[]): number =>
arr.reduce((sum: number, pizza: IPizza) => (sum += +pizza.price), 0);