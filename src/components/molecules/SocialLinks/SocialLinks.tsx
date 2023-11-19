import Links from "@/components/atom/Links/Links";
import SocialIcons from "@/components/atom/SocialIcons/SocialIcons";
import React from "react";

interface SocialLinksProps {
  className?: string;
}
const SocialLinks = ({ className }: SocialLinksProps) => {
  const social_links = [
    {
      type: "instagram",
      url: "https://www.instagram.com/jointpowersecurity/",
    },
    { type: "twitter", url: "https://twitter.com/jointpowersec" },
    {
      type: "linkedin",
      url: "https://www.linkedin.com/company/joint-power-security-services-inc/",
    },
  ];

  return (
    <div
      className={`${
        className ?? className
      } px-5 flex justify-center md:justify-start gap-4`}
    >
      {social_links.map((link, index) => (
        <a key={index} target="_blank" href={link?.url} rel="noreferrer">
          <SocialIcons type={`${link?.type}`} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
