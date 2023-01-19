import React from "react";

type ButtonProps = { message: string };

export const Button: React.FC<ButtonProps> = ({ message }) => {
  return <div onClick={() => console.log(`Message: ${message}`)}>{message}</div>;
};
