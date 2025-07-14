import React, {ButtonHTMLAttributes} from "react";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function Button({children, className, ...props}: TButtonProps) {
    return (
        <button
            {...props}
            className={`bg-[var(--primary-color)] disabled:bg-gray-400 text-white px-5 py-3 rounded-[32px] cursor-pointer ${className}`}
        >
            {children}
        </button>
    )
}