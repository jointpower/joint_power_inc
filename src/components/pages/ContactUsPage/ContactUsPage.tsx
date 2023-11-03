import Testimony from '@/components/molecules/Testimony/Testimony';
import ContactHero from '@/components/organisms/Sections/ContactHero/ContactHero';
import { ContactUs } from '@/components/organisms/Sections/ContactUs/ContactUs';
import Testimonials from '@/components/organisms/Sections/Testmonials/Testimonials';

const ContactUsPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactUs />
      <Testimonials />
    </div>
  );
};
export default ContactUsPage;
