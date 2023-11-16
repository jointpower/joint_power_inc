import Heading from "@/components/atom/Heading/Heading";
import Links from "@/components/atom/Links/Links";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import JpsBadge from "public/jps.png";
const Footer = () => {
  const services_links = [
    { name: "Construction site security", url: "#" },
    { name: "retail store security", url: "#" },
    { name: "Fire watch", url: "#" },
    { name: "apartment security", url: "#" },
    { name: "hotel security", url: "#" },
  ];

  const services_links_2 = [
    { name: "Health facilities", url: "#" },
    { name: "Telecommunication towers", url: "#" },
    { name: "aviation security", url: "#" },
    { name: "access control security", url: "#" },
    { name: "Event security", url: "#" },
  ];

  const company_links = [
    { name: "About us", url: "/about" },
    { name: "Contact us", url: "/contact-us" },
  ];
  const opening_hours = [
    { name: "Office: Mon-Fri", url: "#" },
    { name: "Time: 9am-5pm", url: "#" },
    { name: "Dispatch: 24/7", url: "#" },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className=" text-white pt-20 mt-32 w-full">
      <div className=" bg-secondary w-full h-[10px] mb-1" />
      <div className="bg-primary md:p-10 pb-0">
        <div className="container">
          <div className="text-sm flex flex-col md:flex-row  gap-10 md:gap-0 justify-between ">
            <div className="flex md:-mt-5">
              <NextImage
                className=" w-[180px] h-[196px] "
                src={JpsBadge}
                alt="Joint power security badge"
              />
            </div>
            <div className=" grid grid-cols-2 md:flex gap-x-6 gap-y-12 lg:gap-x-24 lg:gap-y-24 mb-[80px]">
              {" "}
              <div className="flex flex-col gap-6">
                <Heading
                  className="uppercase text-base font-semibold tracking-[1px] text-secondary"
                  level={5}
                >
                  Services
                </Heading>
                {services_links.map((link, index) => (
                  <p key={index} className="capitalize">
                    {link.name}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <Heading
                  className="uppercase text-base font-semibold tracking-[1px] text-secondary"
                  level={5}
                >
                  {""}
                </Heading>
                {services_links_2.map((link, index) => (
                  <p key={index} className="capitalize">
                    {link.name}
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-6 md:flex">
                <Heading
                  className="uppercase text-base font-semibold tracking-[1px] text-secondary"
                  level={5}
                >
                  Opening Hours
                </Heading>
                {opening_hours.map((opening, index) => (
                  <p key={index}>{opening.name}</p>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <Heading
                  className="uppercase text-base font-semibold tracking-[1px] text-secondary"
                  level={5}
                >
                  Company
                </Heading>

                {company_links.map((link, index) => (
                  <Links url={link.url} key={index}>
                    {link.name}
                  </Links>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center md:justify-between justify-center mt-8 md:hidden">
            <NextImage
              className="hidden md:block w-[37px] h-[39px]"
              src={JpsBadge}
              alt="Joint power security badge"
            />
            <SocialLinks />
          </div>
          <div className="justify-between py-8 mt-10 border-t md:flex">
            <Text className="text-sm text-white/80">
              © {year} Joint Power Security Services
            </Text>
            <SocialLinks className="hidden md:flex" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
