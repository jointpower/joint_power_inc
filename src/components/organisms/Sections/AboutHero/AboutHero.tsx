import Button from "@/components/atom/Button/Button";
import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import HeroImage from "public/female-cop.png";
import GroupImage from "public/groupImg.png";
import aboutUs from "public/aboutUs.png";
import { useMediaQuery } from "@/base/MediaQuery";
import { useState } from "react";
import ContactUsModal from "@/components/form/ContactUsModal";
import Form from "@/components/form/Form";
import { Dialog, DialogContent } from "@/components/molecules/Dialog";

const AboutHero = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div className="flex w-full flex-col text-black mt-[4rem] mb-[24px] items-start container">
        <div className="flex ">
          <div className="flex flex-col">
            <div className={``}>
              <Heading
                level={1}
                className="text-[40px] md:text-[40px] lg:text-[65px] xl:text-[80px] w-full flex-1 font-bold md:mb-[30px]"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-[#C1AF6F] ">
                  We Know Our Story
                </span>
              </Heading>
              <h2 className="md:text-[1.3rem] text-[1.1rem] capitalize my-2">
                A PROFESSIONAL SECURITY SERVICE BETWEEN YOU AND THE IMPOSSIBLE
              </h2>
              <p className="md:text-[1.2rem] text-[1.1rem] text-[#5f5d5d]">
                Joint Power Security Services Inc offers experienced security
                guards chosen from strict screening process that can offer the
                best security services in California.
                <br />
                <br />
              </p>
              <p className="md:text-[1.2rem] text-[1.1rem] text-[#5f5d5d]">
                Our guards cover all domains of private security in protecting
                life and properties with excellent and superior service. We make
                the impossible turn possible . We cover a diverse set of clients
                and have always ensured their residential and commercial
                properties are safe and secure 24/7.
                <br />
                <br />
              </p>
              <h3 className="md:text-[1.2rem] text-[1.1rem] ">
                OUR SECURITY GUARDS ARE SKILLED AND TRAINED.
              </h3>
              <p className="md:text-[1.2rem] text-[1.1rem] mt-2 text-[#5f5d5d]">
                You can be at rest knowing that you have Joint Power Security
                Services inc, the best private security company in the industry
                watching over you and your properties.
                <br />
                <br />
              </p>
              <p className="md:text-[1.2rem] text-[1.1rem] text-[#5f5d5d]">
                We oﬀer a crystal transparent approach with our clients and we
                keep them informed in every steps we make and up to date.
              </p>
            </div>
            <div className="-mt-[80px] lg:mt-0" onClick={() => setShow(true)}>
              <Button className="text-base " variants="primary">
                Contact us Today
              </Button>
            </div>
          </div>

          <div className="mt-[30px] md:mt-0">
            <NextImage
              src={HeroImage}
              alt="contactUs-hero image"
              className="w-[350px] h-[400px] xl:w-[528.14px] xl:h-[567px] hidden md:flex"
              priority
            />
          </div>
        </div>
        <NextImage
          src={aboutUs}
          alt="group-image image"
          className="w-full h-[267.94px] md:h-[467.94px] xl:w-full container xl:h-[806px] lg:h-[567.94px] mt-[40px] md:mt-[113px]"
          priority
        />

        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default AboutHero;
