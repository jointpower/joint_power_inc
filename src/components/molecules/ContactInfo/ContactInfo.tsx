import { useMediaQuery } from "@/base/MediaQuery";
import Heading from "@/components/atom/Heading/Heading";
import Links from "@/components/atom/Links/Links";
import SocialIcons from "@/components/atom/SocialIcons/SocialIcons";
import Text from "@/components/atom/Text/Text";
import { BiMessageSquareMinus } from "react-icons/bi";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbDeviceMobile } from "react-icons/tb";
import JpsBadge from "public/jps.png";
import NextImage from "@/components/atom/NextImage/NextImage";
import Image from "next/image";

const ContactInfo = () => {
  const xtraSmall = useMediaQuery("(max-width: 390px)");
  const social_links = [
    {
      type: "instagram",
      url: "https://www.instagram.com/jointpowersecurity/",
    },
    { type: "facebook", url: "" },
    { type: "twitter", url: "" },
    ,
    { type: "linkedin", url: "" },
  ];

  const logo = [
    {
      logo: JpsBadge,
    },
  ];

  return (
    <div className=" flex flex-wrap md:flex-nowrap mb-2 ">
      <div className="bg-normal w-full py-10  md:w-[30rem]  flex justify-center items-center flex-col px-3 md:py-3">
        <footer className="">
          <section
            data-aos="fade-up"
            className="flex items-center gap-[2rem] mb-5"
          >
            <div className=" w-[2rem] h-[2rem] bg-white p-2 rounded-[100%] text-center">
              <FaHome fill="blue" />
            </div>
            <div>
              <p className="text-[#aaa] text-[1rem] uppercase">
                10045 st andrews pl
              </p>

              <p className="text-[1rem] text-white font-bold uppercase">
                los angeles ca 90047
              </p>
            </div>
          </section>
          <section
            data-aos="fade-up"
            className="flex items-center gap-[2rem] mb-5"
          >
            <div className=" w-[2rem] h-[2rem] bg-white p-2 rounded-[100%] text-center">
              <FaHome fill="blue" />
            </div>
            <div>
              <p className="text-[#aaa] text-[1rem] uppercase">
              336 DAKOTA RIDGE DR,
              </p>

              <p className="text-[1rem] text-white font-bold uppercase">
              FORT WORTH, TX 76134
              </p>
            </div>
          </section>
          <section
            data-aos="fade-up"
            className="mb-5 flex items-center gap-[2rem]"
          >
            <div className=" w-[2rem] h-[2rem] bg-white p-2 rounded-[100%] text-center">
              <FaEnvelope fill="blue" />
            </div>
            <p>
              {/* <a href="info@jointpowersecurity.com">
              info@jointpowersecurity.com
            </a> */}

              <a href="mailto:info@jointpowersecurity.com?subject = text = Message">
                info@jointpowersecurity.com
              </a>
            </p>
          </section>
          <section data-aos="fade-up" className="flex items-center gap-[2rem]">
            <div className=" w-[2rem] h-[2rem] bg-white p-2 rounded-[100%] text-center">
              <FaPhone fill="blue" />
            </div>
            <p>+14244637600</p>
          </section>
        </footer>
      </div>

      <div className=" md:bg-[grey] bg-normal  w-full md:w-[50%] hidden md:flex items-center justify-center">
        {logo.map(({ logo }, index) => {
          return (
            <div data-aos="fade-up" key={index} className="">
              <Image
                width={200}
                className="w-[200px]"
                src={logo}
                alt="image logo"
              />
            </div>
          );
        })}
      </div>
    </div>
    // <div
    //   className={`px-6 md:px-10 flex flex-col container justify-center ${
    //     xtraSmall ? 'w-[320px]' : 'w-[378px]'
    //   } md:w-full lg:w-[476px] xl:w-[636px]  bg-primary mb-8`}
    // >
    //   <Heading
    //     level={2}
    //     className="mb-[9.04px] mt-[23.77px] font-medium text-lg md:text-3xl"
    //   >
    //     Contact Information
    //   </Heading>
    //   <Text className="mb-[24.62px] text-xs md:text-xl">
    //     Feel free to contact us with any of the information below
    //   </Text>

    //   {/* <div>
    //     <div className="flex gap-2 align-center mb-6">
    //       <BiMessageSquareMinus className="mt-[2px]" size={24} />
    //       <span className=" text-xs md:text-xl">jps@gmail.com</span>
    //     </div>
    //     <div className="flex gap-2 align-center mb-6">
    //       <TbDeviceMobile className="mt-[2px]" size={24}/>
    //       <span className=" text-xs md:text-xl">(847) - 263-8033</span>
    //     </div>
    //     <div className="flex gap-2 align-center mb-6">
    //       <HiOutlineLocationMarker className="mt-[2px]" size={24}/>
    //       <span className=" text-xs md:text-xl">anywhere</span>
    //     </div>
    //   </div>
    //   <div className="flex gap-2.5 mb-[36.85px] mt-[63px]">
    //   {social_links.map((link, index) =>
    //             link?.type === "instagram" ? (
    //                 <a
    //                     key={index}
    //                     target="_blank"
    //                     href={link?.url}
    //                     rel="noreferrer"
    //                 >
    //                     <SocialIcons type={`${link?.type}`} />
    //                 </a>
    //             ) : (
    //                 <Links key={index} url="/#">
    //                     <SocialIcons type={`${link?.type}`} />
    //                 </Links>
    //             )
    //         )}
    //   </div> */}
    // </div>
  );
};

export default ContactInfo;
