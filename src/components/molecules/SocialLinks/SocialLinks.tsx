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
            url: "https://www.instagram.com/jointpowersecurity/"
        },
        { type: "facebook", url: "" },
        { type: "twitter", url: "" },
        ,
        { type: "linkedin", url: "" }
    ];

    return (
        <div className={`${className ?? className} px-5 flex gap-4`}>
            {social_links.map((link, index) =>
                link?.type === "instagram" ? (
                    <a
                        key={index}
                        target="_blank"
                        href={link?.url}
                        rel="noreferrer"
                    >
                        <SocialIcons type={`${link?.type}`} />
                    </a>
                ) : (
                    <Links key={index} url="/#">
                        <SocialIcons type={`${link?.type}`} />
                    </Links>
                )
            )}
        </div>
    );
};

export default SocialLinks;
