import clsx from "clsx";
import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}
const Text = ({ className, children, ...rest }: TextProps) => {
  return (
    <p className={clsx(className, "")} {...rest}>
      {children}
    </p>
  );
};

export default Text;
