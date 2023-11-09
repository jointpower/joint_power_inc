import Heading from "@/components/atom/Heading/Heading";
import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";
import HotelSecurityOfficerImg from "public/service4.png";
import bankSecurityOfficerImg from "public/bank-security.jpg";
import BankSecurityOfficerImg from "public/service3.png";
import ApartmentOfficerImg from "public/service1.png";
import medicalOfficerImg from "public/service2.png";
import MedicalOfficerImg from "public/service2.png";
// import Image, { StaticImageData } from 'next/image';

const OurServices = () => {
  return (
    <section className="mt-20">
      <Heading
        data-aos="fade-up"
        className="text-black font-medium text-center  text-3xl md:text-[30px] tracking-[2px] sm:tracking-[5px]"
        level={1}
      >
        OUR SERVICES
      </Heading>

      {/* Services Card */}
      <div
        data-aos="fade-up"
        className="mt-8 grid sm:flex flex-wrap justify-center gap-6"
      >
        <ServicesCard
          children={
            <div className="font-medium text-2xl m-auto text-center">
              Apartment <br />
              Security
            </div>
          }
          alt=""
          image_src={ApartmentOfficerImg}
        />
        <ServicesCard
          children={
            <div className="font-medium text-2xl m-auto text-center">
              Medical Office <br />
              Security
            </div>
          }
          alt=""
          image_src={MedicalOfficerImg}
        />

        <ServicesCard
          children={
            <div className="font-medium text-2xl m-auto text-center">
              Bank <br />
              Security
            </div>
          }
          alt=""
          image_src={BankSecurityOfficerImg}
        />

        {/* 
        <img src={BankSecurityOfficerImg} alt="bank" /> */}

        <ServicesCard
          children={
            <div className="font-medium text-2xl m-auto text-center">
              Hotel <br />
              Security
            </div>
          }
          alt=""
          image_src={HotelSecurityOfficerImg}
        />
      </div>
    </section>
  );
};

export default OurServices;
