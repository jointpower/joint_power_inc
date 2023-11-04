import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface NextImageProps {
  src: string | StaticImageData;
  className?: string;
  alt: string;
  priority?: boolean;
  isImage?: boolean;
}
const NextImage = ({
  className,
  alt,
  priority,
  src,
  isImage = false,
}: NextImageProps) => {
  return (
    <div className={`${className ? className : null} relative`}>
      <Image
        priority={priority}
        alt={alt}
        src={src}
        fill
        placeholder="blur"
        className={`${isImage ? 'object-cover' : ''}`}
      ></Image>
    </div>
  );
};

export default NextImage;
