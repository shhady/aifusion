import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    (<div
      className="p-4  bg-[#131313]  px-4">
        <h1 className="p-4 text-2xl"> תמונות</h1>
      <Compare
        firstImage="before.png"
        secondImage="after.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[400px] w-full md:h-[500px] md:w-full"
        slideMode="hover" />
        
    </div>)
  );
}
