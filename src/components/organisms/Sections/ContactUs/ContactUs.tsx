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
    <div
      className={` ${className ?? className} sm:container flex flex-col 20 `}
    >
      {noHeader ? null : (
        <p
          data-aos="fade-up"
          className="uppercase !text-center pl-24 text-gray-800 text-xl font-semibold md:text-3xl px-16 py-2 my-10 mt-20"
        >
          We&apos;d love to hear from you
        </p>
      )}

      <div className="flex flex-col lg:flex-row justify-between w-full gap-5 md:px-5">
        {isContactDetailsRequired ? <ContactInfo /> : " "}
        <ContactDetails />
      </div>
    </div>
  );
};
