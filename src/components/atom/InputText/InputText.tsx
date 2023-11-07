import React from "react";

interface InputTextProps {
    placeholder?: string;
    name?: string;
    classNames?: string;
    value?: string;
    required?: boolean;
    type?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputText = ({
    placeholder,
    name,
    classNames,
    value,
    required,
    type,
    onChange,
    ...rest
}: InputTextProps) => {
    return (
        <input
            className={`${classNames ?? classNames}`}
            value={value}
            placeholder={placeholder || ""}
            onChange={onChange}
            name={name}
            type={type}
            required={required}
            {...rest}
        />
            
    );
};

export default InputText;
