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
import { FaCheck } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const AboutHero = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const [show, setShow] = useState(false);

  return (
    <Dialog open={show}>
      <div className="flex w-full flex-col text-black mt-[4rem] mb-[24px] items-start container">
        <div className="flex ">
          <div className="flex flex-col">
            <div className={` sm:text-left`}>
              <Heading
                data-aos="fade-up"
                level={1}
                className="text-center text-2xl md:text-[40px] lg:text-[65px] xl:text-[40px] w-full flex-1 font-bold mb-[30px]"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D324B] to-[#C1AF6F] ">
                  Understanding our story
                </span>
              </Heading>
              {/* <h2
                data-aos="fade-up"
                className="uppercase text-left mt-10 flex items-start md:items-center gap-2 md:text-[1.3rem] text-[1.1rem] capitalize my-2"
              >
                <div className="min-w-[15px] mt-2 md:mt-0">
                  <BsFillPatchCheckFill
                    size={17}
                    className="text-current w-4"
                  />{" "}
                </div>
              </h2> */}
              <p
                data-aos="fade-up"
                className="md:text-[1.2rem] text-base text-[#5f5d5d]"
              >
                Joint Power Security Services Inc, an American-owned private
                security firm, safeguards clients across California and Texas.
                We're renowned in security and business circles, offering
                top-notch security solutions. Our core focus is delivering
                unmatched security guard services.
                <br />
                <br />
                We collaborate with clients from diverse industries, tailoring
                robust, cost-effective solutions. Our goal is simple, delivering
                top-tier security services at prices that won't break the bank.
                <br />
                <br />
                At Joint Power Security Services Inc, we cover a wide spectrum
                of security needs. Our offerings include uniformed and
                corporate-attired security officers, doormen, concierge
                services, security escorts, receptionists, audits, consulting,
                fire watch, mobile patrols, verified alarm response, and round
                the clock monitoring and surveillance.
                <br />
                <br />
                <br className="hidden sm:block" />
              </p>
              <p
                data-aos="fade-up"
                className=" md:text-[1.2rem] text-base text-[#5f5d5d]"
              >
                Joint Power Security Services guards have valid California Guard
                Card, Onsite field training and strict background check. Our
                Security Guards have been fully trained for their specified
                positions.
                <br />
                <br />
                Our team and security professionals are dedicated to going above
                and beyond to safeguard our clients. At Joint Power Security
                Services Inc, clients are like family and we will do anything to
                make sure our family is safe and protected.
                <br />
                <br />
                <br />
              </p>
              {/* <h3
                data-aos="fade-up"
                className="uppercase text-left mt-5 md:text-[1.2rem] text-base flex items-start md:items-center gap-2"
              >
                <div className="mt-2 md:mt-0 min-w-[15px]">
                  <BsFillPatchCheckFill size={17} className="text-current" />
                </div>
                Our security guards are highly trained and skilled.
              </h3> */}
            </div>
            <div
              data-aos="fade-up"
              className="mt-10 flex justify-center"
              onClick={() => setShow(true)}
            >
              <Button className="text-base " variants="primary">
                Get a Free Quote{" "}
              </Button>
            </div>
          </div>

          {/* <div className="mt-[30px] md:mt-0">
            <NextImage
              src={HeroImage}
              alt="contactUs-hero image"
              className="w-[350px] h-[400px] xl:w-[528.14px] xl:h-[567px] hidden md:flex"
              priority
            />
          </div> */}
        </div>
        {/* <NextImage
          src={aboutUs}
          alt="group-image image"
          className="w-full h-[267.94px] md:h-[467.94px] xl:w-full container xl:h-[806px] lg:h-[567.94px] mt-[40px] md:mt-[113px]"
          priority
        /> */}

        <DialogContent>
          <ContactUsModal setShow={setShow} show={show} type="contact us" />
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default AboutHero;
