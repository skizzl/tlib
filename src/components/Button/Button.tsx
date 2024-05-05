import React from "react";
import "./Button.css";

export interface IButtonProps {
  label: string;
}

const Button = ({ label }: IButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
