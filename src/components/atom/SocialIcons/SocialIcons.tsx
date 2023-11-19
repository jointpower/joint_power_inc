import React from "react";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
interface SocialIconsProps {
  type: "instagram" | "twitter"| "linkedin" | string;
  className?: string;
}
const SocialIcons = ({ type, className }: SocialIconsProps): JSX.Element => {
  return (
    <div className="text-normal bg-white p-2 rounded-full">
      {type === "instagram" ? (
        <FiInstagram />
      ) : type === "linkedin" ? (
        <RiLinkedinFill />
      ) : type === "twitter" ? (
        <AiOutlineTwitter />
      ) : (
        null
      )}
    </div>
  );
};

export default SocialIcons;
