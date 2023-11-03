import { useMediaQuery } from "@/base/MediaQuery";
import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import ContactUsModal from "@/components/form/ContactUsModal";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";
import HeroImageDesktop from "public/contactHero-desktop.png";
import HeroImage from "public/contactHero-mobile.png";
import { useState } from "react";

const ContactHero = () => {
  const xtraSmall = useMediaQuery("(max-width: 24.375rem)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div className="container relative flex w-full text-black my-28">
        <div className="flex flex-col">
          <div className=" w-[100%]">
            <Heading
              level={1}
              className="text-[1.2rem] md:text-[1.5rem] xl:text-[5rem] md:w-full flex-1 font-semibold leading-tight  md:mb-[1.875rem]"
            >
              <span className="text-normal"> WE WOULD LIKE TO </span>
              <span className="text-[1.5625rem]  md:text-[2.5rem] xl:text-[5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-secondary ">
                {" "}
                HEAR
              </span>
              <span className="text-secondary"> FROM</span>

              <span className="text-[#727272]"> YOU.</span>
            </Heading>
            <Text className="font-medium mt-3 w-[90%] xl:w-full text-lg   md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5625rem]">
              Don&apos;t hestitate to reach out to us.
            </Text>
          </div>
          <div onClick={() => setShow(true)}>
            <button
              className={`md:px-8 md:py-3 md:my-6 px-4 py-2 bg-normal text-white my-2 rounded-[.2rem] cursor-pointer`}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="mt-[1.875rem] md:mt-0">
          <NextImage
            src={HeroImage}
            alt="contactUs-hero image"
            className="w-[10.6569rem] h-[12.5625rem] md:hidden"
            priority
          />
          <NextImage
            src={HeroImageDesktop}
            alt="contactUs-hero image"
            className="w-[21.4375rem] h-[25.5rem] xl:w-[33.9375rem] xl:h-[38rem] hidden md:flex"
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

export default ContactHero;
