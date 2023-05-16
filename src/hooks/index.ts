import { useState, useRef, useEffect } from "react";

export const useBigLetterIterator = <T extends HTMLElement>() => {
  const [biggerLetterIndex, setBiggerLetterIndex] = useState(0);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const textArray = elementRef.current.innerText.toUpperCase().split("");

    const mirroredIndex = textArray.length - biggerLetterIndex;

    textArray[mirroredIndex] = textArray[mirroredIndex]?.toLowerCase();
    textArray[biggerLetterIndex] = textArray[biggerLetterIndex]?.toLowerCase();

    elementRef.current.innerText = textArray.join("");

    const timeout = setTimeout(
      () =>
        setBiggerLetterIndex((idx) =>
          idx + 1 < textArray.length ? idx + 1 : 0
        ),
      50
    );
    return () => clearTimeout(timeout);
  }, [biggerLetterIndex]);

  return { elementRef };
};
