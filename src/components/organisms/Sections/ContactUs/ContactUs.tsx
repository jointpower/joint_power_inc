import Heading from "@/components/atom/Heading/Heading";
import ContactDetails from "@/components/molecules/ContactDetails/ContactDetails";
import ContactInfo from "@/components/molecules/ContactInfo/ContactInfo";

interface ContactUsProps {
  isContactDetailsRequired?: boolean;
  noHeader?: boolean;
  className?: string;
}

export const ContactUs = ({
  isContactDetailsRequired = true,
  className,
  noHeader,
}: ContactUsProps) => {
  return (
    <div className={` ${className ?? className} flex flex-col w-full mt-20 `}>
      {noHeader ? null : (
        <p className="!text-left pl-24 text-gray-800 text-lg font-medium md:text-3xl px-16 py-2 mb-7 md:mb-12">
          CONTACT US
        </p>
      )}

      <div className="flex flex-col lg:flex-row justify-between w-full gap-2">
        {isContactDetailsRequired ? <ContactInfo /> : " "}
        <ContactDetails />
      </div>
    </div>
  );
};
