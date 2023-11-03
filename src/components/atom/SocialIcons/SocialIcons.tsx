import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
interface SocialIconsProps {
    type: "instagram" | "twitter" | "facebook" | "linkedin" | string;
    className?: string;
}
const SocialIcons = ({ type, className }: SocialIconsProps): JSX.Element => {
    return (
        <div className="text-normal bg-white p-2 rounded-full">
            {type === "instagram" ? (
                <FiInstagram />
            ) : type === "facebook" ? (
                <FaFacebookF />
            ) : type === "linkedin" ? (
                <RiLinkedinFill />
            ) : type === "twitter" ? (
                <AiOutlineTwitter />
            ) : (
                ""
            )}
        </div>
    );
};

export default SocialIcons;
