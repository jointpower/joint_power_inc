import { useMediaQuery } from '@/base/MediaQuery';
import { Avatar } from '@/components/atom/Avatar/Avatar';
import Text from '@/components/atom/Text/Text';
import { StaticImageData } from 'next/image';

interface TestimonyProps {
  testimony: string;
  avatarUrl: string | StaticImageData;
  className?: string;
  textClass?: string;
  name: string;
}

const Testimony = ({
  testimony,
  avatarUrl,
  className,
  textClass,
  name,
}: TestimonyProps) => {
  const xtraSmall = useMediaQuery('(max-width: 395px)');

  return (
    <div className="flex flex-col justify-center items-center ">
      <div
        className={`${className}
           w-90% h-[130.18px] lg:w-[327px] lg:h-[255px] xl:w-[480px] xl:h-[206px] shadow-lg relative rounded-lg md:rounded-2xl flex flex-col items-center justify-center lg:mb-[40px]`}
      >
        <Text className="w-[90%] md:w-[63%]  text-base md:text-[18px] lg:text-xl font-medium">
          {testimony}
        </Text>
        <Avatar
          avatarUrl={avatarUrl}
          initials="IJ"
          hasBorder={false}
          alt={'police'}
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
        />
      </div>
      <Text
        className={`text-black -mt-[18px] pt-[40px] md:pt-[55px] lg:pt-[40px] text-sm md:text-[14px] lg:text-xl ${textClass}  xl:text-2xl`}
      >
        {name}
      </Text>
    </div>
  );
};

export default Testimony;
