import NextImage from "../NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import { StaticImageData } from "next/image";

interface AvatarProps {
  avatarUrl?: string | StaticImageData;
  initials?: string;
  alt: string;
  hasBorder?: boolean;
  className?: string;
  avClassName?: string;
}
export const Avatar = ({
  avatarUrl,
  initials,
  hasBorder,
  alt,
  className,
  ...rest
}: AvatarProps) => {
  return (
    <div
      className={`${className} ${
        hasBorder ? "border-2" : " "
      } w-[33px] h-[33px] md:w-[60px] md:h-[60px] lg:w-[90px] lg:h-[90px] xl:w-[120px] xl:h-[120px] rounded-full p-0 m-0 flex items-center justify-center bg-primary overflow-hidden`}
    >
      {avatarUrl ? (
        <NextImage
          className={
            " w-[33px] h-[33px] md:w-[60px] md:h-[60px] lg:w-[120px] lg:h-[120px] "
          }
          alt={alt}
          src={avatarUrl}
          {...rest}
        />
      ) : (
        <Text
          className={`text-[12px] md:text-[24px] lg:text-[32px] text-white`}
          {...rest}
        >
          {initials}
        </Text>
      )}
    </div>
  );
};
