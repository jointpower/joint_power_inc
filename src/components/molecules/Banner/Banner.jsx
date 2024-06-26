import React from "react";
import banner from "public/banner_inner.jpg";
import NextImage from "@/components/atom/NextImage/NextImage";

const Banner = ({ text }) => {
  return (
    <div className="relative">
      <NextImage src={banner} alt="banner url" className="w-full h-[200px] md:h-[350px]" />
      <p data-aos="fade-up" className="text-center text-2xl sm:text-3xl font-semibold text-white absolute top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2">
        {text}
      </p>
    </div>
  );
};

export default Banner;
