import React, { useState } from "react";

type ButtonProps = { message: string };

export const Button: React.FC<ButtonProps> = ({ message }) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    console.log(`Message: ${message}`);
    setCount(count + 1);
  };
  return <button onClick={handleClick}>{`Message: ${message} and count: ${count}`}</button>;
};
