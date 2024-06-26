import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import HeroImage from "public/servicesHero-mobile.png";
import HeroImageDesktop from "public/servicesHero-desktop.png";
import HeroBadge from "public/jps-hero-badge.png";
import serviceBlur from "public/team-members.jpeg";
import { useState } from "react";
import ContactUsModal from "@/components/form/ContactUsModal";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";

const ServicesHero = () => {
  const [show, setShow] = useState(false);
  return (
    <Dialog open={show}>
      <section className="text-black mt-20 md:mt-[64px] mb-[40px]">
        <div className="relative">
          <div
            data-aos="fade-up"
            className="overlay z-10 absolute inset-0 bg-black/70"
          ></div>
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
          className={`z-20 w-full flex  text-[#fff] flex-col items-end lg:flex-row items- absolute top-[170px] md:top-[250px] container`}
        >
          <div className="text-center md:container w-[98%] lg:w-[90%] md:flex md:flex-col md:align-start">
            <div>
              <Heading
                data-aos="fade-up"
                level={1}
                className=" opacity-75 font-bold text-2xl md:text-[30px] lg:text-[60px] text-[#fff] md:w-full text-[28px] flex-1 drop-shadow-md leading-tight"
              >
                <span className="block  "> Joint Power</span>
                <span className="md:mt-[-8px] leading-none">
                  Security Services Inc.
                </span>
              </Heading>
              <Text
                data-aos="fade-up"
                className="leading-10 italic opacity-75 font-medium mt-3 text-base sm:text-[24px] lg:text-2xl md:mb-10 mb-[41px]"
              >
                … reliable Protection, Trusted Security.
              </Text>
            </div>

            <div onClick={() => setShow(true)}>
              <Button
                data-aos="fade-up"
                className="uppercase mt-4 mb-[59px]"
                variants="primary"
              >
                Get a Free Quote
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
