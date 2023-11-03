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
        className={`flex w-full text-black pt-[45px] md:pt-[120px] mb-[24px] container relative`}
      >
        <div className="flex flex-col">
          <div className=" w-[100%] md:mt-[30px] ">
            <Heading
              level={1}
              className={`text-[24px] md:text-[40px] xl:text-[65px] md:w-full flex-1 font-semibold leading-tight  md:mb-[30px] text-secondary`}
            >
              Hospital Security
            </Heading>
            <Text className="font-medium mt-3 w-[90%] md:w-[70%] xl:w-[80%] text-base text-black  lg:text-2xl xl:text-4xl">
              Our goal is to supply all clients with the highest quality
              security force services available.
            </Text>
          </div>
          <div onClick={() => setShow(true)} className={`my-2`}>
            <button
              className={`bg-normal text-[#fff] px-2 py-1 md:px-8 md:py-4 rounded-[.2rem] cursor-pointer font-medium `}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="mt-[8px] md:mt-0">
          <NextImage
            src={HospitalMobile}
            alt="Hospital-sercurity-image"
            className="w-[154px] h-[186px] md:hidden"
            priority
          />
          <NextImage
            src={HospitalDesktop}
            alt="Hospital-sercurity-image"
            className="w-[343px] h-[408px] lg:w-[500.44px] xl:w-[700.44px] xl:h-[598px] hidden md:flex"
            priority
          />
        </div>
        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </div>
      <hr></hr>
    </Dialog>
  );
};

export default HospitalSecurity;
