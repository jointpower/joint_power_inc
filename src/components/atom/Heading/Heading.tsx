import clsx from "clsx";
import React from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}
const Heading = ({
  level,
  className,
  children,
  ...rest
}: HeadingProps): JSX.Element => {
  switch (level) {
    case 1:
      return (
        <h1 className={clsx(className, "")} {...rest}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={clsx(className, "")} {...rest}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={clsx(className, "")} {...rest}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={clsx(className, "")} {...rest}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={clsx(className, "")} {...rest}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={clsx(className, "")} {...rest}>
          {children}
        </h6>
      );
    default:
      return <p>invalid heading level</p>;
  }
};

export default Heading;
