import MainHero from "@/components/organisms/Sections/MainHero/MainHero";
import React from "react";
import Hightlight from "@/components/organisms/Sections/Highlight/Highlight";
import OurServices from "@/components/organisms/Sections/OurServices/OurServices";
import InTouch from "@/components/organisms/Sections/InTouch/InTouch";
import Opportunities from "@/components/organisms/Sections/Opportunities/Opportunities";

const Landing = () => {
  return (
    <>
      <MainHero />
      <Hightlight />
      <InTouch />
      <OurServices />
      <Opportunities />
    </>
  );
};

export default Landing;
