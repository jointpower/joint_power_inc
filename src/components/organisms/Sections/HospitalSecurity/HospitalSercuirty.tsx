import { useMediaQuery } from "@/base/MediaQuery";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import ContactUsModal from "@/components/form/ContactUsModal";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";
import HospitalDesktop from "public/hospitalSecurity-desktop.png";
import HospitalMobile from "public/hospitalSecurity-mobile.png";
import { useState } from "react";

const HospitalSecurity = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div
        className={`w-[332px] bg-grey-7 md:bg-[unset] rounded-md md:rounded-none shadow-lg md:shadow-none flex flex-col-reverse md:flex-row md:w-full text-black md:pt-[120px] mb-[24px] container relative`}
      >
        <div className="flex flex-col p-5 text-center md:text-left">
          <div className=" w-[100%] md:mt-[30px] ">
            <Heading
            data-aos="fade-up"
              level={1}
              className={`text-[24px] md:text-[40px] xl:text-[45px] md:w-full flex-1 font-semibold leading-tight  md:mb-[30px]`}
            >
              Hospital Security
            </Heading>
            <Text data-aos="fade-up" className="font-medium mt-3 w-full md:w-[90%] text-lg text-gray-800  lg:text-2xl">
              Our goal is to supply all clients with the highest quality
              security force services available for hospitals in califonia.
            </Text>
          </div>
          <div data-aos="fade-up" onClick={() => setShow(true)} className={`my-2 mt-5`}>
            <button
              className={`bg-normal text-[#fff] px-8 py-4 rounded-[.2rem] cursor-pointer font-medium `}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="">
          <NextImage
            src={HospitalMobile}
            alt="Hospital-sercurity-image"
            className="w-full md:w-[154px] h-[186px] md:hidden"
            priority
          />
          <NextImage
            src={HospitalDesktop}
            alt="Hospital-sercurity-image"
            className="w-[343px] h-[408px] lg:w-[500.44px] xl:w-[600px] xl:h-[400px] hidden md:flex"
            priority
          />
        </div>
        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default HospitalSecurity;
