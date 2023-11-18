import { Commitment } from "@/components/organisms/Sections/Commitment/Commitment";
import HospitalSecurity from "@/components/organisms/Sections/HospitalSecurity/HospitalSercuirty";
import MallSecurity from "@/components/organisms/Sections/MallSecurity/MallSecurity";
import { Security } from "@/components/organisms/Sections/Sercurity/Sercurity";
import ServicesHero from "@/components/organisms/Sections/ServicesHero/ServicesHero";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <h3
        data-aos="fade-up"
        className="text-gray-800 text-center text-3xl font-semibold mt-20 md:mt-40 mb-16 opacity-90"
      >
       Our Key Services
      </h3>
      <Security />
      <HospitalSecurity />
      <MallSecurity />
      <Commitment />
    </>
  );
};

export default ServicesPage;
