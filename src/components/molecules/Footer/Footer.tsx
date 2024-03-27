import Heading from "@/components/atom/Heading/Heading";
import Links from "@/components/atom/Links/Links";
import NextImage from "@/components/atom/NextImage/NextImage";
import Text from "@/components/atom/Text/Text";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import { StaticImageData } from "next/image";
import Link from "next/link";
import JpsBadge from "public/jps.png";
import MasterCard from "public/mastercard.png";
import Visa from "public/visa.png";
import Discover from "public/discover.png";
import AmericaExpress from "public/america-express.png";
const Footer = () => {
  const services_links = [
    {
      name: "Security Guard in California",
      url: "/security-guard-in-california",
    },
    { name: "Security Guard in Texas", url: "/security-guard-in-texas" },
    {
      name: "Multi Location Security Guard",
      url: "/multiple-location-security",
    },
    { name: "Construction site security", url: "#" },
    { name: "retail store security", url: "#" },
    { name: "Fire watch", url: "#" },
    { name: "apartment security", url: "#" },
    { name: "hotel security", url: "#" },
  ];

  const services_links_2 = [
    { name: "Health facilities", url: "#" },
    { name: "Telecommunication Tower Protection", url: "#" },
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

  const payment_options: {
    name: string;
    img: StaticImageData;
  }[] = [
    {
      name: "Mastercard",
      img: MasterCard,
    },
    {
      name: "Visa",
      img: Visa,
    },
    {
      name: "American Express",
      img: AmericaExpress,
    },
    {
      name: "Discover",
      img: Discover,
    },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className=" text-white pt-20 mt-32 w-full">
      <div className=" bg-secondary w-full h-[10px] mb-1" />
      <div className="bg-primary md:p-10 pb-0">
        <div className="container">
          <div className="text-sm flex flex-col md:flex-row  gap-10 md:gap-0 justify-between ">
            <div className="flex flex-col gap-4 md:-mt-5">
              <NextImage
                className=" w-[180px] h-[196px] mx-auto"
                src={JpsBadge}
                alt="Joint power security badge"
              />
              <div className="mx-auto">
                <p className="w-64 text-xs text-center leading-5">
                  As a premier security company, we offer thorough, responsive
                  services with convenient payment options through the world's
                  most trusted payment platforms.
                </p>
                <div className="flex items-center mt-6">
                  {payment_options.map((payment, index) => (
                    <NextImage
                      key={index}
                      className="mx-auto aspect-video w-14"
                      src={payment.img}
                      alt={payment.name}
                    />
                  ))}
                  {/* <NextImage
                    className="mx-auto aspect-video w-24"
                    src={MasterCard}
                    alt="Mastercard"
                  /> */}
                </div>
              </div>
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
                  <Link href={link.url} key={index} className="capitalize">
                    {link.name}
                  </Link>
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
