import carImg from "public/car_1.png";
import Heading from "@/components/atom/Heading/Heading";
import Text from "@/components/atom/Text/Text";
import Button from "@/components/atom/Button/Button";
import NextImage from "@/components/atom/NextImage/NextImage";
import { useState } from "react";
import ContactUsModal from "@/components/form/ContactUsModal";

const InTouch = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="flex flex-col lg:mt-[78px] relative">
      <hr className="hidden md:flex" />
      <div className="flex text-black gap-2 flex-col items-center justify-center xl:items-start md:mt-[45px] container ">
        {/* <div>
          <NextImage
            src={carImg}
            alt="security officer looking left"
            className="w-[643px] xl:w-[743px] h-[440px]  hidden md:flex"
          />
        </div> */}
        <div className="w-full flex flex-col items-center">
          <div className="px-2 sm:px-10 text-center xl:text-start mt-[50px] md:mt-[32.34px] md:mb-[43.5px]">
            <Heading level={5} className="text-center text-2xl md:text-4xl ">
              {/* We provide <span className="font-bold ">temporary security</span>{' '}
              for special events such as corporate meetings, conventions and
              concerts. */}
              <div className="capitalize flex-row justify-center items-center text-center gap-5">
                <span data-aos="fade-up">Joint Power Security: </span>
                <span data-aos="fade-up">Low Rates, </span>
                <span data-aos="fade-up">No Contract.</span>
              </div>
            </Heading>
            <Text
              data-aos="fade-up"
              className="text-left md:text-center mt-4 text-base text-gray-600 md:text-2xl"
            >
              We offer both temporary and permanent security services. Our
              security guard solutions are among the most comprehensive
              available. Regardless of the industry you're in, we assure you
              that Joint Power Security Service has a suitable solution for your
              needs.
            </Text>
          </div>
          <Button
            data-aos="fade-up"
            variants="primary"
            className="uppercase mt-3 shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)]  md:mb-[43.5px]"
          >
            <span className="md:hidden " onClick={() => setShow(true)}>
             Contact Us Today
            </span>
            <span className="hidden md:flex" onClick={() => setShow(true)}>
              Contact Us Today
            </span>
          </Button>
        </div>
      </div>

      <ContactUsModal show={show} setShow={setShow} type="contact us" />
    </section>
  );
};

export default InTouch;
