import Links from '@/components/atom/Links/Links';
import NextImage from '@/components/atom/NextImage/NextImage';
import NavLinks from '@/components/molecules/NavLinks/NavLinks';
import SocialLinks from '@/components/molecules/SocialLinks/SocialLinks';
import JpsLogo from 'public/jps-brand-logo.png';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="z-10 fixed left-0 right-0 top-0 bg-white md:shadow-xl">
      <div
        className="md:flex items-center left-0 right-0 container
            bg-primary md:bg-white md:text-grey-1 justify-between md:flex-row flex py-2"
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
