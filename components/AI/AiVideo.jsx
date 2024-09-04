import React from 'react';

export default function AiVideo() {
  return (
    <div className="p-4  bg-[#131313]  px-4">
                <h1 className="p-4 text-2xl"> סרטונים</h1>
      <video controls className="w-full  h-[500px]">
        <source src={'/gabi-ad.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
}