import { useMediaQuery } from "@/base/MediaQuery";
import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import ContactUsModal from "@/components/form/ContactUsModal";
import ServiceImage from "public/service-card-image.png";
import { useState } from "react";
import { Dialog, DialogContent } from "../Dialog";

const HighlightCard = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <section className="lg:bg-normal lg:mt-[72px] relative">
        <div className="flex flex-row md:flex-row-reverse justify-between items-center px-3 gap-1 py-16 rounded-2xl  bg-normal md:mt-[52px]  lg:mt-[92px] md:mb-[78px] lg:mb-0">
          <div>
            <NextImage
              src={ServiceImage}
              alt="joint security officer"
              className=" w-[170px] h-[148px] md:mt-[-90px] xl:mt-[-140px] md:w-[270.59px] md:h-[248.54px] lg:w-[550px] lg:h-[400px]"
            />
          </div>
          <div className="flex flex-col lg:mt-[-90px] gap-4 lg:px-4 lg:w-[53%]">
            <span className="text-xs uppercase font-medium md:text-sm text-secondary">
              Joint Power Security Services
            </span>
            <div>
              <Heading className="text-sm md:text-3xl lg:text-5xl" level={3}>
                <span className="xl:leading-[52px]">
                  Our security guards are properly skilled and trained in modern
                  security trainings.
                </span>
              </Heading>
            </div>
            <Text
              className="hidden md:block md:text-base lg:text-xl md:text-grey-6 lg:w-[85%]
          md:leading-9 xl:mb-[20px]"
            >
              You can now rest easily, sleep with your two eyes closed, knowing
              that you have Joint Power Security Services; The best private
              security company service in california, watching over you.
            </Text>
            <p onClick={() => setShow(true)}>
              <button
                className={`bg-[#fff] text-normal px-2 py-1 md:px-8 md:py-4 rounded-[.2rem] cursor-pointer font-medium `}
              >
                Get in Touch
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
