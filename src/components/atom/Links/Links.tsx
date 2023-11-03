import Link from "next/link";
import React from "react";

interface LinksProps {
    url: string;
    children: React.ReactNode;
    className?: string;
}
const Links = ({ url, children, className }: LinksProps): JSX.Element => {
    return (
        <Link className={className || ""} href={url}>
            {children}
        </Link>
    );
};

export default Links;
