import { FC, useState } from "react";
import { useBigLetterIterator } from "hooks";

export const Header: FC = () => {
  const [color, setColor] = useState("red");

  const switchColors = () =>
    setColor((color) => (color === "green" ? "red" : "green"));

  const { elementRef } = useBigLetterIterator<HTMLHeadingElement>();

  return (
    <header className="p-4">
      <h1
        className={`text-5xl text-${color}-500 select-none cursor-pointer`}
        onClick={switchColors}
      >
        Testproject™ for Testpurposes™
      </h1>

      <h2 ref={elementRef} className="text-green-500 text-2xl">
        Happy development!
      </h2>
    </header>
  );
};
