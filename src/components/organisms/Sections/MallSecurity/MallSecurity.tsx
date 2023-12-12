import { useMediaQuery } from "@/base/MediaQuery";
import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import ContactUsModal from "@/components/form/ContactUsModal";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";
import MallDesktop from "public/mallSecurity-desktop.png";
import MallMobile from "public/BANK.jpg";
import SER2 from "public/BANK.jpg";
import { useState } from "react";

const MallSecurity = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div className="flex w-full flex-col md:flex-row items-center md:items-center md:justify-between text-black pt-[23px] md:pt-[120px] mb-[24px] container relative">
        <div data-aos="fade-up" className="mt-[45px] md:mt-0 shodow-lg ">
          <NextImage
            src={MallMobile}
            alt="Hospital-sercurity-image"
            className="w-[332px] h-[279px] md:hidden"
            priority
          />
          <div className="rounded-md overflow-hidden">
            <NextImage
              src={SER2}
              alt="Hospital-sercurity-image"
              className="w-[362px] h-[555px] lg:w-[562px] hidden md:flex"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col md:mx-16 bg-grey-7 rounded-bl-lg shadow-lg md:shadow-none rounded-br-2xl md:rounded-none md:bg-white w-[332px] pt-[28px] md:pt-0 md:w-[100%] items-center lg:items-start">
          <div className=" w-[90%] md:w-full ">
            <Heading
              data-aos="fade-up"
              level={1}
              className={`${
                xtraSmall && "text-[22px]"
              } xl:text-[40px] md:w-full text-[26px] flex-1 font-semibold leading-tight  md:mb-[30px] text-black`}
            >
              Shopping Mall Security
            </Heading>
            <Text
              data-aos="fade-up"
              className="font-medium mt-3 w-full leading-relaxed md:hidden text-lg text-black  pb-[35px]"
            >
              Joint Power Security can devise effective strategies to prevent
              theft and reduce shrinkage. The demand for top-notch retail
              security guards is on the rise.
            </Text>
            <Text
              data-aos="fade-up"
              className="mt-3 w-full leading-relaxed hidden md:flex text-xl text-black font-medium"
            >
              Joint Power Security can devise effective strategies to prevent
              theft and reduce shrinkage. The demand for top-notch retail
              security guards is on the rise.
            </Text>
          </div>
          <div data-aos="fade-up" onClick={() => setShow(true)}>
            <Button
              className={`uppercase mt-4 md:mt-8 ${xtraSmall && "px-4"} hidden md:flex`}
              variants="primary"
            >
              Get a Free Quote{" "}
            </Button>
          </div>
        </div>
        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default MallSecurity;
