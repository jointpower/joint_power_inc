import Links from "@/components/atom/Links/Links";
import NextImage from "@/components/atom/NextImage/NextImage";
import NavLinks from "@/components/molecules/NavLinks/NavLinks";
import SocialLinks from "@/components/molecules/SocialLinks/SocialLinks";
import JpsLogo from "public/jps-brand-logo.png";
import { useState } from "react";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { GiSmartphone } from "react-icons/gi";
import { HiMail } from "react-icons/hi";

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="z-30 fixed left-0 right-0 top-10 w-full bg-white md:shadow h-20 flex flex-col justify-center">
      <div className="h-10 fixed top-0 bg-gray-600 font-medium w-full flex gap-10 justify-center items-center">
        <a href="tel:+14244637600" className="flex items-center gap-1">
          <BiPhoneCall />
          <span className="text-sm sm:text-base font-medium">+14244637600</span>
        </a>
        <a href="mailto:info@jointpowersecurity.com" className="flex items-center gap-1">
          <HiMail />
          <span className="text-sm sm:text-base font-medium">
            info@jointpowersecurity.com
          </span>
        </a>
      </div>
      <div
        className="h-full md:flex items-center left-0 right-0 container absolute 
            bg-primary md:bg-white md:text-grey-1 justify-between md:flex-row flex py-3"
      >
        <Links url="/" className="">
          <NextImage className="w-20 h-12" src={JpsLogo} alt="brand_logo" />
        </Links>
        {isOpen ? (
          <MdOutlineClose
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-4xl text-white"
          />
        ) : (
          <BiMenu
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-4xl text-white md:hidden"
          />
        )}
        <nav className="md:flex bg-white text-grey-1 flex-row  hidden">
          <NavLinks />
        </nav>
        <button className="font-semibold items-center gap-1.5 hidden md:flex bg-normal text-white py-4 px-8 rounded">
          Get in Touch
        </button>
      </div>

      {isOpen && (
        <nav className="fixed top-0 left-0 bottom-0 right-0 bg-normal md:hidden  text-white z-2 pt-20">
          <MdOutlineClose
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-4xl text-white -mt-[15%] ml-[85%]"
          />
          <NavLinks />
          <SocialLinks className="mt-5" />
        </nav>
      )}
    </header>
  );
};

export default Header;
