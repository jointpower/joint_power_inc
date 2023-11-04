import Heading from "@/components/atom/Heading/Heading";
import Links from "@/components/atom/Links/Links";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import JpsBadge from "public/jps.png";
const Footer = () => {
  const services_links = [
    { name: "Construction site security", url: "/services" },
    { name: "retail store security", url: "/services" },
    { name: "Fire watch", url: "/services" },
    { name: "apartment security", url: "/services" },
    { name: "hotel security", url: "/services" },
  ];

  const services_links_2 = [
    { name: "Health facilities", url: "/services" },
    { name: "Telecommunication towers", url: "/services" },
    { name: "aviation security", url: "/services" },
    { name: "access control security", url: "/services" },
    { name: "Event security", url: "/services" },
  ];

  const company_links = [
    { name: "About us", url: "/about" },
    { name: "Contact us", url: "/contact-us" },
  ];
  const opening_hours = [
    { name: "Office: Mon-Fri", url: "/" },
    { name: "Time: 9am-5pm", url: "/" },
    { name: "Dispatch: 24/7", url: "/" },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className=" text-white pt-20 mt-32 w-full">
      <div className=" bg-secondary w-full h-[10px] mb-1" />
      <div className="bg-primary p-10 pb-0">
        <div className="container">
          <div className="text-sm flex justify-between ">
            <div className="hidden md:flex md:-mt-5">
              <NextImage
                className=" w-[180px] h-[196px] "
                src={JpsBadge}
                alt="Joint power security badge"
              />
            </div>
            <div className="flex gap-12 lg:gap-24 mb-[80px]">
              {" "}
              <div className="flex flex-col gap-6">
                <Heading className="uppercase text-base font-semibold tracking-[1px] text-secondary" level={5}>
                  Services
                </Heading>
                {services_links.map((link, index) => (
                  <Links url={link.url} key={index} className="capitalize">
                    {link.name}
                  </Links>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-6">
                <Heading className="uppercase text-base font-semibold tracking-[1px] text-secondary" level={5}>
                  {""}
                </Heading>
                {services_links_2.map((link, index) => (
                  <Links url={link.url} key={index} className="capitalize">
                    {link.name}
                  </Links>
                ))}
              </div>
              <div className="flex flex-col gap-6 md:flex">
                <Heading className="uppercase text-base font-semibold tracking-[1px] text-secondary" level={5}>
                  Opening Hours
                </Heading>
                {opening_hours.map((opening, index) => (
                  <Links url={opening.url} key={index}>
                    {opening.name}
                  </Links>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <Heading className="uppercase text-base font-semibold tracking-[1px] text-secondary" level={5}>
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
          <div className="flex items-center justify-between mt-8 md:hidden">
            <NextImage
              className=" w-[37px] h-[39px]"
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
