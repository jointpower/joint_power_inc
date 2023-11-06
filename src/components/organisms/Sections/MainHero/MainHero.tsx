import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import HeroImage from "public/jps-hero-mobile.png";
import HeroImageDesktop from "public/jps-hero-desktop.png";
import { useMediaQuery } from "@/base/MediaQuery";
import { useState } from "react";

import Form from "@/components/form/Form";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";

const MainHero = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div className="container flex flex-col-reverse items-center w-full my-32 mt-[37px] md:mt-[150px] text-black md:flex-row gap-4 md:gap-14">
        <div className="flex flex-col text-center md:text-left">
          <div className={`w-[100%] md:mx-0 mt-5`}>
            <Heading
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#2D324B] from-secondary"> Incorporation.</span>
              </span>
            </Heading>
            <Text className=" text-gray-600 font-medium mt-3 w-full md:w-[80%] xl:w-[85%] sm:leading-loose md:leading-snug text-lg md:text-[30px]">
              The best security guard company in California. We are watching
              over you!!
            </Text>
          </div>
          <div>
            {/* ${xtraSmall ? "mx-0" : "mx-6"} might add later*/}
            <p onClick={() => setShow(true)}>
              <Button className={`mt-8 md:mt-10md:mx-0`} variants="primary">
                Get in Touch
              </Button>
            </p>
          </div>
        </div>

        <div className="mt-[30px] md:mt-0">
          <NextImage
            src={HeroImage}
            alt="contactUs-hero image"
            className="w-[400px] md:w-full h-[290.5px] md:hidden"
            priority
          />
          <NextImage
            src={HeroImageDesktop}
            alt="contactUs-hero image"
            className="w-[343px] h-[408px] xl:w-[455.85px] xl:h-[391.12px] hidden md:flex"
            priority
          />

          <DialogContent className="w-full md:!w-2/4">
            <Form show={show} setShow={setShow} />
          </DialogContent>
        </div>
      </div>
    </Dialog>
  );
};

export default MainHero;
