import React, {ButtonHTMLAttributes} from "react";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function Button({children, className, outlined, prefixIcon, suffixIcon,disabled, ...props}: TButtonProps) {
    const styleClass = outlined ?
        "border border-[var(--primary-color)] disabled:border-gray-400 text-[var(--primary-color)] disabled:text-gray-400 "
        : "bg-[var(--primary-color)] text-white disabled:bg-gray-400"

    return (
        <button
            {...props}
            disabled={disabled}
            className={`relative px-5 py-3 disabled:border-gray-400 rounded-[32px] cursor-pointer disabled:cursor-default font-medium ${styleClass} ${className}`}
        >
            {prefixIcon && !disabled && <div className={"absolute right-[1rem] top-[50%] translate-y-[-50%]"}>{prefixIcon}</div>}
            {children}
            {suffixIcon && !disabled && <div className={"absolute left-[1rem] top-[50%] translate-y-[-50%]"}>{suffixIcon}</div>}
        </button>
    )
}