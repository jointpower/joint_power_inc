import Links from '@/components/atom/Links/Links';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react';

interface navLinksProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLinks = () => {
  const router = useRouter();

  const nav_links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About Us',
      url: '/about',
    },
    {
      name: 'Services',
      url: '/services',
    },
    {
      name: 'Blogs',
      url: '/blog',
    },
    {
      name: 'Contact Us',
      url: '/contact-us',
    },
  ];

  return (
    <ul className="md:flex md:gap-3 container">
      {nav_links.map(({ name, url }, index) => (
        <li className='!list-none' key={`${name}/${url + index}`}>
          <Links url={url}>
            {/* <div
              className={`${
                router.pathname === url &&
                "bg-[#D9D9D9]/10  before:left-0 before:w-0 before:top-0 before:h-[1px] before:absolute before:bg-secondary before:rounded-lg before:block before:contents-['*'] before: md:bg-white text-white md:text-grey-1 md:before:w-full md:before:h-[7px] md:before:top-7  md:before:bg-grey-1"
              } px-5 py-6 text-2xl relative md:py-2 md:px-2 md:flex md:text-base md:text-center md:shadow-xl`}
            >
              {name}
            </div> */}

            <div
              className={`${router.pathname === url
                ? 'after:w-[60%] after:h-[1px] after:block after:bg-[red] max-w-max'
                : null
                } font-bold text-[1rem] uppercase  p-2`}
            >
              {name}
            </div>
          </Links>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
