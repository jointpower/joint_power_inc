import Heading from '@/components/atom/Heading/Heading';
import ServicesCard from '@/components/molecules/ServicesCard/ServicesCard';
import HotelSecurityOfficerImg from 'public/hotel-security.png';
import bankSecurityOfficerImg from 'public/bank-security.jpg';
import BankSecurityOfficerImg from 'public/BANK-facilities.png';
import ApartmentOfficerImg from 'public/apartment-security.png';
import medicalOfficerImg from 'public/medical-facilities.png';
import MedicalOfficerImg from 'public/Medical-facilities2.png';
// import Image, { StaticImageData } from 'next/image';

const OurServices = () => {
  return (
    <section className="mt-20">
      <Heading
        className="text-black font-medium text-center  md:text-[30px]  tracking-[5px]"
        level={1}
      >
        OUR SERVICES
      </Heading>

      {/* Services Card */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ServicesCard alt="" image_src={ApartmentOfficerImg} />
        <ServicesCard alt="" image_src={MedicalOfficerImg} />

        <ServicesCard alt="" image_src={BankSecurityOfficerImg} />

        {/* 
        <img src={BankSecurityOfficerImg} alt="bank" /> */}

        <ServicesCard alt="" image_src={HotelSecurityOfficerImg} />
      </div>
    </section>
  );
};

export default OurServices;
