'use client'
import React from 'react'
import { InlineWidget } from "react-calendly";

export default function page() {
  return (
    <div className='h-screen mt-28 bg-[#131313]'>
         <div className="bg-[#131313]">
      <InlineWidget url="https://calendly.com/shhadyse/30min" styles={{
  height: '1000px'
}} pageSettings={{
    backgroundColor: '#131313',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: 'ffffff'
  }} />
    </div>
    </div>
  )
}
