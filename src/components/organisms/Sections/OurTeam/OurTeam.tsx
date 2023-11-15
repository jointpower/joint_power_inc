import { useState } from "react";

import Image from "next/image";

import controller from "public/boss.jpg";
import funder from "public/CEO.jpeg";

const teams = [
  {
    src: funder,
    teamName: "Golden Agoh",
    position: "Founder / CEO",
  },

  {
    src: controller,
    teamName: "brian Agbagwu",
    position: "Operations manager",
  },
];

const OurTeam = () => {
  const [url, setUrl] = useState();

  const handleIconclick = () => {};

  return (
    <section className="mb-[80px]">
      {/* <Heading
        level={1}
        className="text-black md:text-2xl text-base leading-[47px] text-center md:tracking-[16px] tracking-[12px] mt-[80px] mb-[40px] "
      >
        {' '}
        MEET OUR TEAM
      </Heading> */}
      <div className="flex flex-wrap justify-center w-full gap-5 px-2 ">
        {teams.map(({ src, teamName, position }, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer rounded-md overflow-hidden w-full flex flex-col md:w-[28rem]`}
            >
              <div className="group overflow-hidden w-full md:w-[28rem]   md:h-[36rem] ">
                <Image
                  data-aos="fade-up"
                  src={src}
                  alt={position}
                  height={350}
                  className={`group-hover:scale-105 transition-all duration-300 ease-linear md:object-fill flex items-center w-[100%] md:h-[100%] justify-center `}
                />
              </div>
              <div className={`bg-normal  text-[#fff] text-center  py-3 `}>
                <h4 data-aos="fade-up" className=" text-[1.5rem] uppercase">
                  {teamName}
                </h4>
                <h4 data-aos="fade-up" className="text-base italic  mt-1">
                  {position}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;

// <Team
//   src={src}
//   teamName={teamName}
//   key={index}
//   Class={Class}
//   founder={position}
// />
