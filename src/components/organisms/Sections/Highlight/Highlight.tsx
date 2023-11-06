import ServiceCard from "@/components/molecules/HighlightCard/HighlightCard";
import React from "react";

const Hightlight = () => {
  return (
    <div>
      <section className="container mt-20 service_card_section   md:hidden md:h-[260px] flex ">
        <ServiceCard />
      </section>
      <section className="container service_card_section hidden md:flex items-end">
        <ServiceCard />
      </section>
    </div>
  );
};

export default Hightlight;
