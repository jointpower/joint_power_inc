import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import HeroImage from "public/servicesHero-mobile.png";
import HeroImageDesktop from "public/servicesHero-desktop.png";
import HeroBadge from "public/jps-hero-badge.png";
import serviceBlur from "public/serviceBlur.png";
import { useState } from "react";
import ContactUsModal from "@/components/form/ContactUsModal";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";

const ServicesHero = () => {
  const [show, setShow] = useState(false);
  return (
    <Dialog open={show}>
      <section className="text-black mt-[64px] mb-[40px]">
        <div className="relative">
          <NextImage
            src={serviceBlur}
            alt="about-main-hero image"
            className="w-full h-[392px] md:hidden"
            priority
          />
          <NextImage
            src={serviceBlur}
            alt="about-main-hero image"
            className="w-full h-[872px] hidden md:flex"
            priority
          />
        </div>

        <div
          className={`w-full flex  text-[#fff] flex-col items-end lg:flex-row items- absolute top-[70vw] md:top-[540px] lg:top-[480px]  left-1/2 -translate-y-1/2 -translate-x-1/2 container`}
        >
          <div className="lg:ml-[10px] md:container w-[98%] lg:w-[90%] md:flex md:flex-col md:align-start">
            <div>
              <Heading
                level={1}
                className="md:text-[60px] lg:text-[98.45px] text-[#fff] md:w-full text-[48px] flex-1 drop-shadow-md leading-tight"
              >
                <span className="block font-bold drop-shadow-md ">
                  {" "}
                  Joint Power
                </span>
                <span className="text-2xl  font-bold md:mt-[-8px] md:text-[45px] lg:text-[98.45px] block leading-none drop-shadow-md">
                  Security Services,
                </span>
              </Heading>
              <Text className="font-medium mt-3 w-[75%]    lg:w-[60%] text-[24px] lg:text-[41px] md:mb-[97px] mb-[41px]">
                provides protection you can count on and security you can trust.
              </Text>
            </div>

            <div onClick={() => setShow(true)}>
              <Button className="mt-4 mb-[59px]" variants="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </section>
    </Dialog>
  );
};

export default ServicesHero;
