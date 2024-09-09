"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/alfares.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/shhady.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/toppick.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/funan.png",
  },
  {
    title: "Editrix",
    link: "https://editrix.ai",
    thumbnail:
      "/arabrew.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/shhadyse.png",
  },
];
