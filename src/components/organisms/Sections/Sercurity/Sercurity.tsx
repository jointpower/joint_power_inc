import NextImage from '@/components/atom/NextImage/NextImage';
import Text from '@/components/atom/Text/Text';
import SercurityMobile from 'public/sercurity-mobile.png';
import SercurityDesktop from 'public/sercurity-desktop.png';
import SER1 from 'public/SER1.png';

export const Security = () => {
  return (
    <section className="flex flex-col md:flex-row container md:justify-center gap-10 md:mt-[56px] md:mb-[51px] items-center ">
      <div>
        <NextImage
          src={SercurityMobile}
          alt="sercurity image"
          className="w-[300px] h-[429px] md:hidden"
          priority
        />
        <NextImage
          src={SER1}
          alt="sercurity image"
          className="w-[350px] h-[450px] lg:w-[480px] lg:h-[550px] xl:w-[561px] xl:h-[601px] hidden md:flex"
          priority
        />
      </div>
      <div className=" flex flex-col md:mt-[10px] lg:mt-0 w-[300px] lg:w-[520.36px]">
        <Text className="bg-grey-7 px-12 py-[30px] w-full lg:w-[80%]  hidden md:block text-[20px] lg:text-[24px] text-black  shadow-xl lg:mt-[330px] leading-9 font-bold capitalize">
          Joint Power Security has{' '}
          <span className="text-secondary">24 Hours</span> Emergency Security
          Guard Services <br />
          <br />
          Whether you need security guards for an hospital, shopping mall,
          hotel, apartments and social security.
          <br />
          <br />
          Trained security guards are available{' '}
          <span className="text-secondary">
            24 Hours per day – 7 days per week.
          </span>
        </Text>
      </div>
    </section>
  );
};
