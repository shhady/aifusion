"use client";
import React, {useEffect, useState} from "react";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FlipWordsDemo } from "../web/FlipWordsDemo";

export const HeroParallax = ({ products }) => {
  const [xValues, setXValues] = useState(["100%", "-150%"]);
  const firstRow = products.slice(0, 6);
  // const secondRow = products.slice(3, 6);

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Static rotation and opacity values
  const rotateX = useSpring(15, springConfig);
  const rotateZ = useSpring(20, springConfig);
  const opacity = useSpring(0.4, springConfig);
  

  useEffect(() => {
    // Define a function to check the screen size
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile: 768px and below
        setXValues(["100%", "-700%"]);
      } else {
        // Desktop: Above 768px
        setXValues(["100%", "-180%"]);
      }
    };
  
    // Set the initial values based on the current screen size
    handleResize();
  
    // Add an event listener to handle screen resizing
    window.addEventListener("resize", handleResize);
  
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
    className="h-[90vh] pt-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
  >
    {/* Content Container */}
    <div className="max-w-7xl mx-auto py-20 md:py-40 px-4 w-full absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10">
      <FlipWordsDemo />
      <div className="w-full flex justify-center items-center">
     <Link href='/calendly'>  <button className="inline-flex mt-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#fff,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          קביעת פגישה
        </button></Link> 
      </div>
    </div>
  
    {/* Background Images Container */}
    <motion.div
      style={{
        rotateX,
        rotateZ,
        opacity,
      }}
      className="absolute inset-0 flex flex-col z-0"
    >
      <motion.div
        className="flex flex-row-reverse space-x-reverse gap-4 mb-2"
        animate={{ x: xValues }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {firstRow.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </motion.div>
      {/* Uncomment this section if you want to use the second row of products */}
      {/* <motion.div
        className="flex flex-row-reverse gap-4 mb-2"
        animate={{ x: ["-50%", "50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {secondRow.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </motion.div> */}
    </motion.div>
  
    {/* Gradient Overlay */}
    <div className="w-full absolute bottom-0 inset-x-0 h-[40vh] bg-gradient-to-b pointer-events-none select-none from-transparent to-[#131313]" />
  </div>
  
  );
};

export const ProductCard = ({ product }) => {
  return (
    <motion.div
      key={product.title}
      className="group/product h-[600px] w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="800"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
