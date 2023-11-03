import NextImage from "@/components/atom/NextImage/NextImage";
import { StaticImageData } from "next/image";
import React from "react";
interface ServicesCardProps {
    image_src: StaticImageData | string;
    alt: string;
    className?: string;
}
const ServicesCard = ({ image_src, alt }: ServicesCardProps) => {
    return (
        <button className="group rounded-lg overflow-hidden max-w-[174px] md:max-w-[288px] lg:max-w-[388px] w-[174px] md:w-[288px] lg:w-[388px]  h-[197px] md:h-[393px] lg:h-[493px] shrink-0  min-w-[174px] md:min-w-[288px] lg:min-w-[388px]">
            <NextImage className="group-hover:scale-105 transition-all duration-300 ease-linear w-full h-full" alt={alt} src={image_src} />
        </button>
    );
};

export default ServicesCard;
