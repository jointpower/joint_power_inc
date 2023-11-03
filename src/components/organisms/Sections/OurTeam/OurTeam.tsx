import { useState } from "react";

import Image from "next/image";

import controller from "public/boss.jpg";
import funder from "public/founder.jpg";

const teams = [
  {
    src: funder,
    teamName: "Golden Agoh",
    position: "Founder / CEO",
  },

  {
    src: controller,
    teamName: "brian Agbagwu",
    position: "Operation manager",
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
      <div className="flex flex-wrap justify-center w-full gap-2 px-2 ">
        {teams.map(({ src, teamName, position }, index) => {
          return (
            <div key={index} className={`w-full flex flex-col md:w-[28rem]`}>
              <div className="w-full md:w-[28rem]   md:h-[36rem] ">
                <Image
                  src={src}
                  alt={position}
                  height={400}
                  className={`md:object-fill flex items-center w-[100%] md:h-[100%] justify-center `}
                />
              </div>
              <div
                className={`bg-normal  text-[#fff] uppercase pt-3 pl-1 pb-2 `}
              >
                <h4 className=" text-[1.5rem]">{teamName}</h4>
                <h4 className=" text-[1.2rem] italic text-center mt-3">
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
