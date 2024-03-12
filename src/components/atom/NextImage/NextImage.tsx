import React from "react";
import Image, { StaticImageData } from "next/image";

interface NextImageProps {
  src: string | StaticImageData;
  style?: { [key: string]: string };
  className?: string;
  alt: string;
  priority?: boolean;
  isImage?: boolean;
  blurDataURL?: string | StaticImageData;
}
const NextImage = ({
  className,
  alt,
  priority,
  src,
  isImage = false,
  blurDataURL,
  ...rest
}: NextImageProps) => {
  return (
    <div className={`${className ? className : null} relative`}>
      <Image
        priority={priority}
        alt={alt}
        src={src}
        fill
        placeholder="blur"
        className={`${isImage ? "object-cover" : ""}`}
        // @ts-ignore
        blurDataURL={blurDataURL}
        ob
        {...rest}
      ></Image>
    </div>
  );
};

export default NextImage;
