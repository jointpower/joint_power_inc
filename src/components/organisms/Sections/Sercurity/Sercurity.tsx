import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import SercurityMobile from "public/sercurity-mobile.png";
import SercurityDesktop from "public/sercurity-desktop.png";
import SER1 from "public/SER1.png";
import Heading from "@/components/atom/Heading/Heading";

export const Security = () => {
  return (
    <section className="flex flex-col md:flex-row container md:justify-center gap-5 md:mb-[51px] items-center ">
      <div>
        <NextImage
          src={SercurityMobile}
          alt="sercurity image"
          className="w-[300px] h-[429px] md:hidden"
          priority
        />
        <div className="rounded-md overflow-hidden">
          <NextImage
            src={SER1}
            alt="sercurity image"
            className="w-[350px] h-[350px] lg:w-[550px] object-cover rounded-md lg:h-[370px] hidden md:flex"
            priority
          />
        </div>
      </div>

      <div className=" flex flex-col md:mt-[10px] lg:mt-0 w-[300px] lg:w-[650px]">
        <Text className="bg-transparent px-12 py-[30px] w-full hidden md:block text-[20px] lg:text-xl text-black  leading-9">
          <Heading
            level={1}
            className={`text-black text-[24px] md:text-[40px] xl:text-[45px] md:w-full flex-1 font-semibold leading-tight  md:mb-[30px]`}
          >
            Emergency
          </Heading>
          Joint Power Security has{" "}
          <span className="text-secondary">24 Hours</span> Emergency Security
          Guard Services. Whether you need security guards for an hospital,
          shopping mall, hotel, apartments and social security.
          <br />
          <br />
          Trained security guards are available{" "}
          <span className="text-secondary">
            24 Hours per day – 7 days per week.
          </span>
        </Text>
      </div>
    </section>
  );
};
