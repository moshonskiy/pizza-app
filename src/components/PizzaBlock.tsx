import React, { useState } from "react";

import { Button } from "../components/Button";

import classNames from "classnames";

import { IPizza } from "../interfaces/pizzas";

interface Props {
  item: IPizza;
  onAddPizza(pizza: object): void;
  pizzaCount: any;
}

export const PizzaBlock: React.FC<Props> = ({item, onAddPizza, pizzaCount,}) => {
  const { id, imageUrl, name, types, sizes, price } = item;
  const avaliableTypes = ["тонкое", "традиционное"];
  const avaliavleSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState<number>(types[0]);
  const [activeSize, setActiveSize] = useState<number>(sizes[0]);

  const handleSelectType = (i: number): void => {
    setActiveType(i);
  };

  const handleSelectSize = (size: number): void => {
    setActiveSize(size);
  };

  const handleAddPizza = () => {
    const pizzaObj = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: avaliableTypes[activeType],
    };
    onAddPizza(pizzaObj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {avaliableTypes.map((type, i) => (
            <li
              key={type}
              className={classNames({
                active: activeType === i,
                disabled: !types.includes(i),
              })}
              onClick={() => handleSelectType(i)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {avaliavleSizes.map((size) => (
            <li
              key={size}
              className={classNames({
                active: activeSize === size,
                disabled: !sizes.includes(size),
              })}
              onClick={() => handleSelectSize(size)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={handleAddPizza} outline add>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {pizzaCount && <i>{pizzaCount}</i>}
        </Button>
      </div>
    </div>
  );
};
