import React from "react";

export interface IButtonProps {
  label: string;
}

const Button = ({ label }: IButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
