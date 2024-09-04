import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["אתרי תדמית", "דפי נחיתה", "חנות וירטואלית"];

  return (
    (<div className="h-[10rem] flex justify-center items-center ">
      <div
        className="text-7xl mx-auto font-normal text-neutral-800 dark:text-neutral-400 text-center">
        <FlipWords words={words} /> <br />
      </div>
    </div>)
  );
}
