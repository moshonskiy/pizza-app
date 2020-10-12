import React from "react";

import classNames from "classnames";

interface IProps {
  className?: string;
  cart?: boolean;
  outline?: boolean;
  add?: boolean;
  circle?: boolean;
  onClick?(): void;
}

export const Button: React.FC<IProps> = ({
  children,
  className,
  cart,
  outline,
  add,
  circle,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("button", className, {
        "button--cart": cart,
        "button--outline": outline,
        "button--add": add,
        "button--circle": circle,
      })}
    >
      {children}
    </button>
  );
};
