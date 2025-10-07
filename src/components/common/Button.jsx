import React from "react";

export const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant}`}
    >
      {children}
    </button>
  );
};
