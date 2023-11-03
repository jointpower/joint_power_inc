import Heading from "@/components/atom/Heading/Heading";
import NextImage from "@/components/atom/NextImage/NextImage";
import { Goals } from "@/components/molecules/Goal/Goals";
import LineMask from "public/line-mask.png";
import { useMediaQuery } from "@/base/MediaQuery";

export const OurGoal = () => {
  const xtraSmall = useMediaQuery("(max-width: 720px)");
  const goals = [
    {
      messageHead: " Trusted & Experienced",
      messageBody: `We are ranked as one of the top security guard companies with many years of experience in the security industry. Joint Power Security is uniquely positioned to address all issues regarding security.`,
      messageBodyMobile: `We are ranked as one of the top security guard companies with many years of experience in the security industry. Joint Power Security is uniquely positioned to address all issues regarding security.
     `,
      className:
        "lg:bg-white bg-normal text-white lg:text-black  shadow-2xl lg:left-[3vw] -top-[85px] md:top-0 pb-[12px]",
      headerClass: "text-secondary lg:text-black",
    },
    {
      messageHead: "Bonded & Fully Insured",
      messageBody:
        "Joint Power Security services inc carried the standard statutory insurance such as unemployment insurance and worker's compensation, fully bonded.",
      messageBodyMobile:
        "Joint Power Security services inc carried the standard statutory insurance such as unemployment insurance and worker's compensation, fully bonded.",
      className: "bg-normal text-white lg:top-[103px] pb-[45px]",
      headerClass: "text-secondary",
    },
    {
      messageHead: "Satisfaction Guaranteed",
      messageBody:
        " We guarantee 100% satisfaction of all the security needs. You can choose the best time when you want our security coverage, or we can be present 24/7 for the utmost in security. Our services are the absolute best and most trusted in Northern & Southern California. Our mission is to keep you safe, secure and deliver peace of mind that comes with professional security services coverage.. ",
      messageBodyMobile:
        " We guarantee 100% satisfaction of all the security needs. You can choose the best time when you want our security coverage, or we can be present 24/7 for the utmost in security. Our services are the absolute best and most trusted in Northern & Southern California. Our mission is to keep you safe, secure and deliver peace of mind that comes with professional security services coverage..",
      className:
        "lg:bg-white bg-normal text-white lg:text-black shadow-2xl lg:right-[3vw] right-[82px] md:-z-10 md:right-0 -top-[172px] md:top-0 pb-[12px]",
      headerClass: "text-secondary lg:text-black",
    },
  ];

  return (
    <section className="flex flex-col">
      <div className="container">
        <div className="flex flex-col justify-between gap-2 text-white md:flex-row bg bg-normal h-max">
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
