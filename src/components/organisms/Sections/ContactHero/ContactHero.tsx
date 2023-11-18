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
      <div className="container relative flex w-full text-black mt-20 mb-10">
        <div className="flex flex-col items-center text-center justify-center m-auto">
          <div className="">
            <Heading
              data-aos="fade-up"
              level={1}
              className="text-[1.2rem] md:text-[1.5rem] xl:text-[2.5rem] md:w-full flex-1 font-semibold leading-tight  md:mb-[1.875rem]"
            >
              <span className="text-normal">Your Feedback </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-secondary ">
                {" "}
                Matters to Us.
              </span>
            </Heading>
            <Text
              data-aos="fade-up"
              className="text-gray-700 font-medium mt-3 md:w-[90%] xl:w-full text-lg md:text-3xl leading-7 md:leading-10 "
            >
              Feel free to contact us for any questions, inquiries, <br className="hidden md:block" /> or requests.
            </Text>
          </div>
          <div onClick={() => setShow(true)}>
            <button
              data-aos="fade-up"
              className={`md:px-8 md:py-3 md:my-6 px-6 py-3 bg-normal text-white my-2 rounded-[.2rem] cursor-pointer`}
            >
              Get in Touch
            </button>
          </div>
        </div>

        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default ContactHero;
