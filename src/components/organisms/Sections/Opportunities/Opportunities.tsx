/* eslint-disable react/no-unescaped-entities */
import NextImage from "@/components/atom/NextImage/NextImage";
import LineMask from "public/line-mask.png";
import JpsCar from "public/jps-car.png";
import Text from "@/components/atom/Text/Text";
import { ContactUs } from "../ContactUs/ContactUs";

const Opportunities = () => {
  return (
    <section>
      <div className="w-full mt-40 md:mb-10 flex flex-col justify-center items-center">
        <span className="uppercase absolute font-medium tracking-wider text-black md:text-4xl">
          Make Your Own Opportunities
        </span>
      </div>
      <NextImage
        className="w-[331.45px] h-[349px] md:hidden container mt-[35.19px]"
        src={JpsCar}
        alt="joint power security car"
      />

      <div className="container lg:px-5">
        <div className="text-gray-400 md:text-2xl mt-[32px] mb-[92px]">
          <Text className="text-justify">
            <span className=" md:text-secondary ">
              Joint Power Security Services,
            </span>{" "}
            has a vision of working with its team, making it's environs one of
            the safest states in the world. We have experiences in Aviation
            patrol security, fire watch, health facilities, telecommunication
            towers, apartment building, malls, hotels, individual stores, both
            commercial and private buildings and much more.
          </Text>
          <Text className="pt-[24px]">
            We oﬀer experienced security guards chosen from strict screening
            process and background check. Our guards cover all domains of
            private security in protecting life and properties with an excellent
            and superior service in all cities in california.
          </Text>
        </div>

        <div className="flex mt-5 bg-white">
          <NextImage
            className="lg:w-full lg:h-[732px]"
            src={JpsCar}
            alt="joint power security car"
          />
          <ContactUs
            isContactDetailsRequired={false}
            className="-mt-[30px] md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
