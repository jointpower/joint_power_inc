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
      <section className="text-black mt-20 md;mt-[64px] mb-[40px]">
        <div className="relative">
          <div className="overlay z-10 absolute inset-0 bg-black/70"></div>
          <NextImage
            src={serviceBlur}
            alt="about-main-hero image"
            className="w-full h-[392px] md:hidden"
            priority
          />
          <NextImage
            src={serviceBlur}
            alt="about-main-hero image"
            className="w-full h-[772px] hidden md:flex"
            priority
          />
        </div>

        <div
          className={`z-20 w-full flex  text-[#fff] flex-col items-end lg:flex-row items- absolute top-[150px] md:top-[200px] container`}
        >
          <div className="text-center md:container w-[98%] lg:w-[90%] md:flex md:flex-col md:align-start">
            <div>
              <Heading
                level={1}
                className="font-bold text-2xl md:text-[30px] lg:text-[60px] text-[#fff] md:w-full text-[28px] flex-1 drop-shadow-md leading-tight"
              >
                <span className="block  "> Joint Power</span>
                <span className="md:mt-[-8px] leading-none">
                  Security Services.
                </span>
              </Heading>
              <Text className="font-medium mt-3 text-lg sm:text-[24px] lg:text-[32px] md:mb-10 mb-[41px]">
                ..providing protection you can count on and security <br className="hidden md:block" /> you
                can trust.
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
