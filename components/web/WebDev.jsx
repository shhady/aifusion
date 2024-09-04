"use client";
import React from 'react'
import { FlipWordsDemo } from './FlipWordsDemo'
import SliderOne from './SliderOne'
import { HeroParallaxDemo } from './HeroParallaxDemo'
import { SparklesCore } from "../ui/sparkles";

export default function WebDev() {
  return (
    <div className=''>
        

 
    <div
      className="h-[5rem] w-full bg-white flex flex-col items-center justify-start overflow-hidden rounded-md">
      <h1
        className="md:text-4xl text-3xl lg:text-4xl font-bold text-center text-black relative z-20">
       בניית אתרים
      </h1>
      <div className="w-[40rem] h-10 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#131313" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-[15vh] bg-white [mask-image:radial-gradient(200px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
       {/* <h1 className='text-4xl text-center h-[10vh] flex justify-center items-center'> </h1> */}
        {/* <FlipWordsDemo /> */}
        {/* <SliderOne /> */}
        <HeroParallaxDemo />
    </div>
  )
}
