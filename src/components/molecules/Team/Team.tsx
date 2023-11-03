import Heading from '@/components/atom/Heading/Heading';
import Links from '@/components/atom/Links/Links';
import NextImage from '@/components/atom/NextImage/NextImage';
import SocialIcons from '@/components/atom/SocialIcons/SocialIcons';
import Text from '@/components/atom/Text/Text';
import Image, { StaticImageData } from 'next/image';
import wilson from 'public/wilson.jpg';
import golden from 'public/golden.jpg';
import brian from 'public/brian.jpg';
import DiokpalaMaryJune from 'public/maryJune-1.png';
import OurTeam from '@/components/organisms/Sections/OurTeam/OurTeam';

interface TeamProps {
  src: string | StaticImageData;
  teamName: string;
  founder?: string;
  Class?: string;
}
export const Team = ({ src, teamName, founder, Class }: TeamProps) => {
  const social_links = [
    {
      type: 'instagram',
      url: 'https://www.instagram.com/jointpowersecurity/',
    },
    { type: 'facebook', url: '' },
    { type: 'twitter', url: '' },
    ,
    { type: 'linkedin', url: '' },
  ];
  return (
    <div
      className={`flex flex-col items-center container overflow-hidden justify-end md:w-[444px] w-[174.7px] mt-[47px]`}
    >
      <OurTeam />
      {/* <NextImage
        src={src}
        alt="our team picture"
        className={` ${Class} w-[174.7px] h-[125.93px] md:w-[441px] md:h-[419.56px]`}
        isImage
      /> */}

      {/* <Image src={wilson} alt="founder" /> */}

      {/* <div className="flex flex-col items-center bg-normal justify-center w-[174.7px] md:w-[443px] -mt-[4px] md:-mt-[8px]"> */}
      {/* <Heading
          level={4}
          className="text-[16.51px] md:text-[41.93px] font-semibold text-white mt-[27px] uppercase"
        >
          {teamName}
        </Heading>
        <Text className="text-secondary md:text-[33.52px] text-[13.21px] my-[12px] md:[20px]">
          {founder}
        </Text> */}
      <div className="flex bg-normal justify-around gap-2 md:gap-6 mb-[32.91px] md:mb-[32.91px]  md:flex md:text-[32px] text-[12px] w-[174.7px] md:w-[443px]">
        {social_links.map((link, index) =>
          link?.type === 'instagram' ? (
            <a key={index} target="_blank" href={link?.url} rel="noreferrer">
              <SocialIcons type={`${link?.type}`} />
            </a>
          ) : (
            <Links key={index} url="/#">
              <SocialIcons type={`${link?.type}`} />
            </Links>
          )
        )}
      </div>
      {/* </div> */}
    </div>
  );
};
