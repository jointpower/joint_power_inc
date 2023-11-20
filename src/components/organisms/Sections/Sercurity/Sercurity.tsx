import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import SER1 from "public/HOUSE.jpg";
import Heading from "@/components/atom/Heading/Heading";

export const Security = () => {
  return (
    <section className="mb-20 max-w-[332px] md:max-w-none bg-grey-7 md:bg-[unset] rounded-md md:rounded-none shadow-lg md:shadow-none flex flex-col md:flex-row container md:justify-center gap-5 md:mb-[51px] items-center ">
      <div>
        {/* <NextImage
          src={SercurityMobile}
          alt="sercurity image"
          className="w-[300px] h-[429px] md:hidden"
          priority
        /> */}
        <div className="rounded-md overflow-hidden">
          <NextImage
            data-aos="fade-up"
            src={SER1}
            alt="sercurity image"
            className="w-[330px] h-[300px] lg:w-[550px] object-cover rounded-md lg:h-[500px] flex"
            priority
          />
        </div>
      </div>

      <div className="text-left flex flex-col md:mt-[10px] lg:mt-0 w-[300px] lg:w-[650px]">
        <Text
          data-aos="fade-up"
          className="text-lg bg-transparent px-1 md:px-12 py-[30px] w-full block lg:text-xl text-black  leading-9"
        >
          <Heading
            level={1}
            className={`text-black text-[28px] md:text-[40px] xl:text-[45px] md:w-full flex-1 font-semibold leading-tight mb-3 md:mb-[30px]`}
          >
            Emergency
          </Heading>
          <p className="text-left" data-aos="fade-up">
            Joint Power Security offers{" "}
            <span className="text-secondary">24 Hours</span> emergency security
            guard services. Whether it's for hospitals, shopping malls, hotels,
            apartments, or construction sites, we've got you covered.
            <br />
            <br />
            Our skilled security guards are accessible
            <span className="text-secondary">
              {" "}
              24/7, every day of the week.
            </span>
          </p>
        </Text>
      </div>
    </section>
  );
};
