/* eslint-disable react/no-unescaped-entities */
import NextImage from "@/components/atom/NextImage/NextImage";
import LineMask from "public/line-mask.png";
import JpsCar from "public/car_1.png";
import Text from "@/components/atom/Text/Text";
import { ContactUs } from "../ContactUs/ContactUs";
import Heading from "@/components/atom/Heading/Heading";

const Opportunities = () => {
  return (
    <section>
      <div
        data-aos="fade-up"
        className="min-h-[50px] w-full mt-32 md:mt-40 mb-10 flex flex-col justify-center items-center"
      >
        <span className="uppercase absolute font-medium tracking-wide md:tracking-wider text-black text-3xl text-center md:text-4xl">
          Make Your Own Opportunities
        </span>
      </div>
      <NextImage
        data-aos="fade-up"
        className="w-[331.45px] h-[209px] md:hidden container mt-[35.19px]"
        src={JpsCar}
        alt="joint power security car"
      />

      <div className="container lg:px-5">
        <div
          data-aos="fade-up"
          className="text-gray-600 text-base md:text-2xl mt-[32px] mb-[92px]"
        >
          <Text data-aos="fade-up" className="">
            <span className=" md:text-secondary ">
              Joint Power Security Services
            </span>{" "}
            <span data-aos="fade-up">
              envisions collaborating with its team to make its surroundings one
              of the safest states in the world. We possess expertise in
              aviation patrol security, fire watch, healthcare facilities,
              telecommunication towers, apartment buildings, malls, hotels,
              individual stores, both commercial and private buildings, and much
              more.
            </span>
          </Text>
          <Text data-aos="fade-up" className=" pt-[24px]">
            We provide experienced security guards carefully selected through a
            stringent screening process and background checks. Our guards
            specialize in all aspects of private security, ensuring the
            protection of lives and properties with excellent and superior
            service across all cities in California.
          </Text>
        </div>

        <div className="grid md:grid-cols-2 mt-5 gap-10 md:gap-0 bg-white">
          <div className="text-center md:text-left flex justify-center flex-col gap-4 lg:px-4">
            <span
              data-aos="fade-up"
              className="text-2xl md:text-lg uppercase font-semibold text-secondary"
            >
              Contact JPSS
            </span>
            <p
              data-aos="fade-up"
              className="text-black text-lg md:text-3xl lg:text-5x xl:leading-[37px]"
            >
              Our security guards are highly skilled and trained in modern
              security practices.
            </p>
            <Text
              data-aos="fade-up"
              className="hidden md:block md:text-base lg:text-xl md:text-grey-6
               md:leading-9 xl:mb-[20px]"
            >
              You can now rest easily, sleep with your two eyes closed, knowing
              that you have Joint Power Security Services; The best private
              security company service in california, watching over you.
            </Text>
          </div>

          <ContactUs
            isContactDetailsRequired={false}
            className="md:mt-0"
            noHeader={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
