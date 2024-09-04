"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 2;
  }

  return (
    <div>
      <Slider {...settings}>
        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/alfares.png"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl max-h-[400px] object-cover 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/shhady.png"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl max-h-[400px] object-contain 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/toppick.png"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl max-h-[400px] object-contain 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10">
            <Image
              priority
              src="/funan.png"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl max-h-[400px] object-contain 
                      "
            />
          </div>
        </>

        <>
          <div className="rounded-md px-2 md:p-10 ">
            <Image
              priority
              src="/arabrew.png"
              alt="logo"
              width={500}
              height={500}
              className="
                  rounded-2xl max-h-[400px] object-contain 
                      "
            />
          </div>
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;