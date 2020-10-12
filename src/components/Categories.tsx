import React from "react";

import classNames from "classnames";

interface Props {
  items: string[];
  onClickCategory(i: number | null): void;
  activeCategory: null | number;
}

export const Categories: React.FC<Props> = React.memo(
  ({ items, onClickCategory, activeCategory }) => {
    return (
      <div className="categories">
        <ul>
          <li
            className={classNames({ active: null === activeCategory })}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {items.map((name, i) => (
            <li
              className={classNames("", { active: i === activeCategory })}
              key={name}
              onClick={() => onClickCategory(i)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
