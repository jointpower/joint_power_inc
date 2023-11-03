import Heading from "@/components/atom/Heading/Heading";
import { Goals } from "@/components/molecules/Goal/Goals";
import { Team } from "@/components/molecules/Team/Team";
import AboutHero from "@/components/organisms/Sections/AboutHero/AboutHero";
import { OurGoal } from "@/components/organisms/Sections/Our Goal/OurGoal";
import OurTeam from "@/components/organisms/Sections/OurTeam/OurTeam";

const AboutPage = () => {
  return (
    <div className="text-[150px] text-grey-2 pt-12">
      <AboutHero />

      <Heading
        level={2}
        className="text-4xl md:text-[65px] font-bold uppercase mb-[30px] md:mb-[80px] lg:text-start text-center"
      >
        <span className="text-normal"> Our</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1AF6F] to-[#2D324B] ">
          {" "}
          Go
        </span>
        <span className="text-normal">Al</span>
      </Heading>
      <div className="h-max md:h-[30rem] overflow-y-auto">
        <OurGoal />
      </div>

      {/* <div> */}
      <Heading
        level={1}
        className="text-black md:text-2xl text-base leading-[47px] text-center md:tracking-[16px] tracking-[12px] mt-[80px] mb-[40px] "
      >
        {" "}
        MEET OUR TEAM
      </Heading>

      <OurTeam />
      {/* </div> */}
    </div>
  );
};

export default AboutPage;
