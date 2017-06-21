import React from "react";
import { Icon } from "./Icon";

export const Button = props => {
  const {
    children,
    className,
    icon,
    onClick
  } = props;

  return (
    <button className={className} onClick={onClick}>
      {icon && <Icon name={icon} size={18} />}{children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  className: null,
  icon: null,
  onClick: null
};
