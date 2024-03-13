import Links from '@/components/atom/Links/Links';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import { GiGuards } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';

interface navLinksProps {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLinks = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    if (typeof window != undefined) {
      window.localStorage.removeItem('loggedIn');
      toast.success('log out successful');
      router.push('/')
    }
  }

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
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Contact Us',
      url: '/contact-us',
    },
    {
      name: 'Our Coverages',
      url:'',
      states: [
        {
          url:'',
          name: 'California',
          cities : [
            { name: 'Los Angeles', url: '/california/los-angeles' },
            { name: 'Anaheim', url: '/california/anaheim' },
            { name: 'Carlsbad', url: '/california/carlsbad' },
            { name: 'Fresno', url: '/california/fresno' },
            { name: 'San Francisco & Oakland', url: '/california/san-francisco' },
            { name: 'Redding & Shasta County', url: '/california/redding' },
            { name: 'Bakersfield & Kem County', url: '/california/bakersfield' },
            { name: 'Sacramento & Stockton', url: '/california/sacramento' },
            { name: 'Santa Cruz', url: '/california/santa-cruz' },
      ]
        },
        {
          url:'',
          name: 'Texas',
          cities : [
            { name: 'Houston', url: '/texas/houston' },
            { name: 'Dallas', url: '/texas/dallas' },
            { name: 'Austin', url: '/texas/austin' },
            { name: 'Fort Worth', url: '/texas/fort-worth' },
            { name: 'El Paso', url: '/texas/el-paso' },
            { name: 'Arlington', url: '/texas/arlington' },
          ]
        },
      ]
    },
  ];

  const login = () => router.push('/login')

  useEffect(() => {
    if (typeof window != undefined) {
      const auth = window.localStorage.getItem('loggedIn');
      if (auth === 'yes') {
        setLoggedIn(true)
      }
    }
  }, [])


  return (
<>
  <ul className="md:flex md:gap-3 container">
    {nav_links.map(({ name, url, states }, index) => (
      <li className='group !list-none relative' key={`${name}/${url + index}`}>
        <Links url={url}>
          <div className="font-bold text-[1rem] uppercase p-2">
            {name}
          </div>
        </Links>
        {states && states.length > 0 && (
          <ul className="group/state list-none py-2 absolute top-full min-w-[150px] left-0 bg-white shadow-md rounded-md hidden group-hover:block">
            {states.map(({ name: stateName, url: stateUrl, cities }) => (
              <li className=' relative group/test hover:bg-slate-100 pl-3 list-none' key={stateName}>
                <Links url={stateUrl}>
                  <div className="flex items-center gap-2 text-black hover:font-medium hover:text-primary p-2">
                    <BiCheck />
                    {stateName}</div>
                </Links>
                {cities && cities.length > 0 && (
                <ul className="list-none py-2 absolute top-[0px] min-w-[270px] left-[145px] bg-white shadow-md rounded-md hidden group-hover/test:block">
                  {cities.map(({ name: cityName, url: cityUrl }) => (
                    <li className=' hover:bg-slate-100 pl-3 list-none' key={cityName}>
                      <Links url={cityUrl}>
                        <div className="flex items-center gap-2 text-black hover:font-medium hover:text-primary p-2">
                          <BiCheck />
                          {cityName}</div>
                      </Links>
                    </li>
                  ))}
                </ul>
        )}
              </li>
            ))}
          </ul>
        )}
                    {/* {states && states.length > 0 && (
              <ul className="list-none py-2 absolute top-full min-w-[270px] left-0 bg-white shadow-md rounded-md hidden group-hover:block">
                {states.map(({ name: stateName, url: stateUrl, cities }) => (
                  <li className=' hover:bg-slate-100 pl-3 list-none' key={stateName}>
                    <Links url={stateUrl}>
                      <div className="flex items-center gap-2 text-black hover:font-medium hover:text-primary p-2">
                        <BiCheck />
                        {stateName}</div>
                    </Links>
                    {cities && cities.length > 0 && (
                      <ul className="list-none py-2 absolute top-0 left-full min-w-[270px] bg-white shadow-md rounded-md hidden group-hover:block">
                        {cities.map(({ name: cityName, url: cityUrl }) => (
                          <li className='hover:bg-slate-100 pl-3 list-none' key={cityName}>
                            <Links url={cityUrl}>
                              <div className="flex items-center gap-2 text-black hover:font-medium hover:text-primary p-2">
                                <BiCheck />
                                {cityName}
                              </div>
                            </Links>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )} */}
      </li>
    ))}
    {loggedIn ? <button className='!list-none font-bold text-[1rem] uppercase  p-2 text-red-500' onClick={logout}>Logout</button> :
      <button className='!list-none font-bold text-[1rem] uppercase  p-2' onClick={login}>Login</button>
    }
  </ul >
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
</>
  );
};

export default NavLinks;
