import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import { Goals } from "@/components/molecules/Goal/Goals";
import LineMask from "public/line-mask.png";
import { useMediaQuery } from "@/base/MediaQuery";

export const OurGoal = () => {
  const xtraSmall = useMediaQuery("(max-width: 720px)");
  const goals = [
    {
      messageHead: " Reliable and seasoned",
      messageBody: `We're recognized as a leading security guard company, boasting extensive experience in the security industry. Joint Power Security is uniquely equipped to tackle all security-related concerns.`,
      messageBodyMobile: `We're recognized as a leading security guard company, boasting extensive experience in the security industry. Joint Power Security is uniquely equipped to tackle all security-related concerns.
     `,
      className:
        "lg:bg-white bg-normal text-white lg:text-black  shadow-2xl lg:left-[3vw] -top-[85px] md:top-0 pb-[12px]",
      headerClass: "text-secondary lg:text-black",
    },
    {
      messageHead: "Licensed and fully insured",
      messageBody:
        "Joint Power Security Services Inc carries standard statutory insurances such as unemployment insurance and worker's compensation, fully bonded for added assurance.",
      messageBodyMobile:
        "Joint Power Security Services Inc carries standard statutory insurances such as unemployment insurance and worker's compensation, fully bonded for added assurance.",
      className: "bg-normal text-white lg:top-[103px] pb-[45px]",
      headerClass: "text-secondary",
    },
    {
      messageHead: "We guarantee satisfaction",
      messageBody:
        " We assure 100% satisfaction with all your security needs. You can select the timing for our security coverage or opt for 24/7 presence for maximum security. Our services are unparalleled and highly trusted in California and Texas. Our mission is to ensure your safety, security, and deliver the peace of mind that professional security services provide. ",
      messageBodyMobile:
        " We assure 100% satisfaction with all your security needs. You can select the timing for our security coverage or opt for 24/7 presence for maximum security. Our services are unparalleled and highly trusted in California and Texas. Our mission is to ensure your safety, security, and deliver the peace of mind that professional security services provide.",
      className:
        "lg:bg-white bg-normal text-white lg:text-black shadow-2xl lg:right-[3vw] right-[82px] md:-z-10 md:right-0 -top-[172px] md:top-0 pb-[12px]",
      headerClass: "text-secondary lg:text-black",
    },
  ];

  return (
    <section className="flex flex-col">
      <div className="container">
        <div className="flex flex-col justify-between gap-2 text-white md:flex-row bg h-max">
          {goals.map(
            (
              {
                messageHead,
                messageBody,
                className,
                messageBodyMobile,
                headerClass,
              },
              index
            ) => (
              <Goals
                messageHead={messageHead}
                messageBody={xtraSmall ? messageBodyMobile : messageBody}
                key={index}
                index={index}
                className={className}
                headerClass={headerClass}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};
