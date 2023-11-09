import Heading from "@/components/atom/Heading/Heading";
import AboutHero from "@/components/organisms/Sections/AboutHero/AboutHero";
import { OurGoal } from "@/components/organisms/Sections/Our Goal/OurGoal";
import OurTeam from "@/components/organisms/Sections/OurTeam/OurTeam";
import Banner from "../../molecules/Banner/Banner";

const AboutPage = () => {
  return (
    <div className="text-[150px] text-grey-2 pt-24">
      {/* @ts-ignore */}
      <Banner text={"About Us"} />
      <AboutHero />

      <Heading
        level={2}
        className="mt-32 flex justify-center  text-3xl md:text-[40px] font-bold mb-[30px] md:mb-[50px] lg:text-start text-center"
      >
        <span className="text-normal">
          {" "}
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1AF6F] to-[#2D324B] ">
            {" "}
            Go
          </span>
        </span>

        <span className="text-normal">als</span>
      </Heading>
      <div className="overflow-y-auto">
        <OurGoal />
      </div>

      {/* <div> */}
      <Heading
        level={1}
        className="text-black text-3xl md:text-[40px] font-bold md:leading-[47px] text-center tracking-[2px] mt-28 md:mt-44 mb-[40px] "
      >
        {" "}
        Meet Our Team
      </Heading>

      <OurTeam />
      {/* </div> */}
    </div>
  );
};

export default AboutPage;
