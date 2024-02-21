import Heading from "@/components/atom/Heading/Heading";
import ServicesCard from "@/components/molecules/ServicesCard/ServicesCard";
import HotelSecurityOfficerImg from "public/service4.png";
import bankSecurityOfficerImg from "public/bank-security.jpg";
import BankSecurityOfficerImg from "public/new_hotel.jpg";
import ApartmentOfficerImg from "public/new_apartment.jpg";
import medicalOfficerImg from "public/service2.png";
import MedicalOfficerImg from "public/service2.png";
import MobilePatrol from 'public/mobile_patrol.jpg';
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
        <ServicesCard alt="" image_src={ApartmentOfficerImg}>
          <div className="font-medium text-2xl m-auto text-center">
            Appartment <br />
            Security
          </div>
        </ServicesCard>
        <ServicesCard alt="" image_src={MedicalOfficerImg}>
          <div className="font-medium text-2xl m-auto text-center">
            Bank <br />
            Security
          </div>
        </ServicesCard>

        <ServicesCard alt="" image_src={BankSecurityOfficerImg}>
          <div className="font-medium text-2xl m-auto text-center">
            Hotel <br />
            Security
          </div>
        </ServicesCard>

        {/* 
        <img src={BankSecurityOfficerImg} alt="bank" /> */}

        <ServicesCard alt="" image_src={HotelSecurityOfficerImg}>
          <div className="font-medium text-2xl m-auto text-center">
            Medical Facilities <br />
            Security
          </div>
        </ServicesCard>
        <ServicesCard alt="" image_src={MobilePatrol}>
          <div className="font-medium text-2xl m-auto text-center">
            Mobile Patrol
          </div>
        </ServicesCard>
      </div>
    </section>
  );
};

export default OurServices;
