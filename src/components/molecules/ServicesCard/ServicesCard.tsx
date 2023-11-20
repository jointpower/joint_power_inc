import NextImage from "@/components/atom/NextImage/NextImage";
import { StaticImageData } from "next/image";
import React from "react";
interface ServicesCardProps {
  image_src: StaticImageData | string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}
const ServicesCard = ({ image_src, alt, children }: ServicesCardProps) => {
  return (
    <button className="relative group rounded-lg overflow-hidden w-[300px] md:max-w-[288px] lg:max-w-[388px] md:w-[288px] lg:w-[388px]  h-[300px] md:h-[393px] lg:h-[493px] shrink-0  min-w-[174px] md:min-w-[288px] lg:min-w-[388px]">
      <NextImage
        className="rounded-lg group-hover:scale-105 transition-all duration-300 ease-linear w-full h-full"
        alt={alt}
        src={image_src}
      />
      <div className="absolute bottom-0 h-20 bg-slate-500/60 w-full flex justify-center">{children}</div>
    </button>
  );
};

export default ServicesCard;
