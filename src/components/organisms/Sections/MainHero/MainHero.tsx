import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import HeroImage from "public/mobile-hero.jpg";
import { useState } from "react";

import { Dialog, DialogContent } from "@/components/molecules/Dialog";
import ContactUsModal from "@/components/form/ContactUsModal";

const MainHero = () => {
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div className="container flex flex-col-reverse items-center w-full my-32 mt-[37px] md:mt-[120px] text-black md:flex-row gap-4 md:gap-14">
        <div className="flex flex-col text-center md:text-left">
          <div data-aos="fade-up" className={`w-[100%] md:mx-0 mt-5`}>
            <Heading
              data-aos="fade-up"
              level={1}
              className="text-[30px] lg:text-[60px] uppercase  w-full flex-1 font-bold md:mb-[30px]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-secondary ">
                {" "}
                Joint{" "}
              </span>
              <span className="text-[30px] lg:text-[60px] text-secondary ">
                Power
              </span>{" "}
              <br className="hidden md:block" />
              <span className="text-[30px] md:text-[40px] lg:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-secondary ">
                {" "}
                Security{" "}
              </span>
              <span className="text-[30px]  md:text-[40px] lg:text-[60px] text-secondary ">
                Services
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#2D324B] from-secondary">
                  {" "}
                  Inc.
                </span>
              </span>
            </Heading>
            <Text
              data-aos="fade-up"
              className=" text-gray-600 font-medium mt-3 w-full md:w-[80%] xl:w-[85%] sm:leading-loose md:leading-snug text-lg md:text-[30px]"
            >
              The best security guard company in California & Texas. Safety is our
              priority!
            </Text>
          </div>
          <div>
            {/* ${xtraSmall ? "mx-0" : "mx-6"} might add later*/}
            <p onClick={() => setShow(true)}>
              <Button
                data-aos="fade-up"
                className={`mt-8 md:mt-10md:mx-0`}
                variants="primary"
              >
                GET A FREE QUOTE
              </Button>
            </p>
          </div>
        </div>

        <div data-aos="fade-up" className="mt-[70px] md:mt-10">
          <NextImage
            src={HeroImage}
            alt="contactUs-hero image"
            className="mt-5 w-[400px] md:w-full h-[290.5px] md:hidden"
            priority
          />
          <NextImage
            src={HeroImage}
            alt="contactUs-hero image"
            className="w-[403px] h-[408px] xl:w-[555.85px] xl:h-[451.12px] hidden md:flex"
            priority
          />

          <DialogContent className="w-full md:!w-2/4">
            <ContactUsModal type="get in touch" show={show} setShow={setShow} />
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default MainHero;
