import { FC, useState } from "react";

export const Header: FC = () => {
  const [color, setColor] = useState("red");

  const switchColors = () =>
    setColor((color) => (color === "green" ? "red" : "green"));

  return (
    <header className="p-4">
      <h1
        className={`text-5xl text-${color}-500 select-none cursor-pointer`}
        onClick={switchColors}
      >
        Testproject™ for Testpurposes™
      </h1>

      <h2 className="text-2xl">
        Helping testing tests since{" "}
        <span className="line-through text-red-500">2023</span>
        <span className="text-green-500"> idk</span>
      </h2>
    </header>
  );
};
