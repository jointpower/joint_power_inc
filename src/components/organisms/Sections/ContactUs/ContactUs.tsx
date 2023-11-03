import Heading from '@/components/atom/Heading/Heading';
import ContactDetails from '@/components/molecules/ContactDetails/ContactDetails';
import ContactInfo from '@/components/molecules/ContactInfo/ContactInfo';

interface ContactUsProps {
  isContactDetailsRequired?: boolean;
  className?: string;
}

export const ContactUs = ({
  isContactDetailsRequired = true,
  className,
}: ContactUsProps) => {
  return (
    <div
      className={` ${
        className ?? className
      } flex flex-col items-center w-full mt-20 `}
    >
      <Heading
        level={1}
        className="text-black text-lg font-bold md:text-3xl bg-contact-us shadow-xl px-16 py-2 mb-[28.92px] md:mb-[45px] "
      >
        CONTACT US
      </Heading>

      <div className="flex flex-col lg:flex-row justify-between w-full gap-2">
        {isContactDetailsRequired ? <ContactInfo /> : ' '}
        <ContactDetails />
      </div>
    </div>
  );
};
