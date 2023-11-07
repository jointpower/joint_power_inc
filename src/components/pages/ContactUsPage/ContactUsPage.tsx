import Banner from "@/components/molecules/Banner/Banner";
import Testimony from "@/components/molecules/Testimony/Testimony";
import ContactHero from "@/components/organisms/Sections/ContactHero/ContactHero";
import { ContactUs } from "@/components/organisms/Sections/ContactUs/ContactUs";
import Testimonials from "@/components/organisms/Sections/Testmonials/Testimonials";

const ContactUsPage = () => {
  return (
    <div>
      {/* @ts-ignore */}
      <div className="mt-24 md:mt-7">
        <Banner text={"Contact Us"} />
      </div>
      <ContactHero />
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.885082383803!2d-118.3140930249628!3d33.94408367319782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b6175a050c11%3A0xff7931cd911c91e!2s10045%20S%20St%20Andrews%20Pl%2C%20Los%20Angeles%2C%20CA%2090047%2C%20USA!5e0!3m2!1sen!2sng!4v1699084077619!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactUs />
      <Testimonials />
    </div>
  );
};
export default ContactUsPage;
