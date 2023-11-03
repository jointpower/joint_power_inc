import { Commitment } from '@/components/organisms/Sections/Commitment/Commitment';
import HospitalSecurity from '@/components/organisms/Sections/HospitalSecurity/HospitalSercuirty';
import MallSecurity from '@/components/organisms/Sections/MallSecurity/MallSecurity';
import { Security } from '@/components/organisms/Sections/Sercurity/Sercurity';
import ServicesHero from '@/components/organisms/Sections/ServicesHero/ServicesHero';

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <Security />
      <HospitalSecurity />
      <MallSecurity />
      <Commitment />
    </>
  );
};

export default ServicesPage;
