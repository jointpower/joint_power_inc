import React from "react";

interface ButtonProps {
    variants: "primary" | "secondary" | "outlined";
    className?: string;
    children: React.ReactNode;
}
const Button = ({ children, className, variants }: ButtonProps) => {
    return (
        <button
            className={`${
                variants === "primary"
                    ? "bg-primary text-white"
                    : variants === "secondary"
                    ? "bg-white text-primary"
                    : variants === "outlined"
                    ? "border-2 border-primary bg-transparent bg-white text-primary"
                    : ""
            } px-12 py-4 rounded-md font-semibold ${className ?? className}`}
        >
            {children}
        </button>
    );
};

export default Button;
