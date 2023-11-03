import clsx from "clsx";
import React from "react";

interface TextProps {
    children: React.ReactNode;
    className?: string;
}
const Text = ({ className, children }: TextProps) => {
    return <p className={clsx(className, "")}>{children}</p>;
};

export default Text;
