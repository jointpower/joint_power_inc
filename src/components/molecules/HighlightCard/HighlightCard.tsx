import { useMediaQuery } from "@/base/MediaQuery";
import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import ContactUsModal from "@/components/form/ContactUsModal";
import ServiceImage from "public/new_image.jpg";
import { useState } from "react";
import { Dialog, DialogContent } from "../Dialog";

const HighlightCard = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <section className="lg:bg-normal lg:mt-[72px] relative">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center px-3 gap-1 py-16 rounded-2xl  bg-normal md:mt-[52px]  lg:mt-[92px] md:mb-[78px] lg:mb-0">
          <div data-aos="fade-up" className="pr-0 md:pr-4 rounded-xl">
            <NextImage
              src={ServiceImage}
              alt="joint security officer"
              className="!rounded-xl h-[200px] md:mt-[-90px] xl:mt-[-140px] w-[300px] md:w-[270.59px] md:h-[248.54px] lg:w-[550px] lg:h-[400px]"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col text-center md:text-left lg:mt-[-90px] gap-4 lg:px-4 lg:w-[53%]"
          >
            <span
              data-aos="fade-up"
              className="uppercase font-medium mt-10 md:mt-0 text-secondary"
            >
              Joint Power Security Services
            </span>
            <div>
              <Heading
                data-aos="fade-up"
                className="!text-left text-2xl"
                level={5}
              >
                <span className="">
                Security Guard Companies are every where, so what makes JOINT POWER SECURITY SERVICES INC different?
                </span>
              </Heading>
            </div>
            <Text
              data-aos="fade-up"
              className="text-left block text-sm text-grey-6 leading-relaxed xl:mb-[10px]"
            >
            For over a decade, JOINT POWER SECURITY SERVICES INC has proudly stood as America’s trusted partner when in need of a Security Guard Company and Firewatch service provider. When it comes to safeguarding what matters most, we’re the name you can rely on.            </Text>
            <Text
              data-aos="fade-up"
              className="text-left block text-sm text-grey-6 leading-relaxed xl:mb-[10px]"
            >
              To start JOINT POWER SECURITY SERVICES INC is the only company in the United States that guarantees that the client experience will be curated and nurtured by a single point of contact. What that means to the client is that no matter when, no matter what we will be on line and ready to assist you. At times when communication is critical we provide the answers you need; let us be the strategic security guard company that you call when you are experiencing an emergency.
            </Text>
            <p
              className="w-fit md:m-[unset] m-auto"
              data-aos="fade-up"
              onClick={() => setShow(true)}
            >
              <button
                className={`uppercase bg-[#fff] mt-2 text-normal px-8 py-4 rounded-[.2rem] cursor-pointer font-medium `}
              >
                Get a Free Quote
              </button>
            </p>
          </div>
        </div>

        <DialogContent>
          <ContactUsModal show={show} setShow={setShow} type="get in touch" />
        </DialogContent>
      </section>
    </Dialog>
  );
};

export default HighlightCard;
