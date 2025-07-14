import React from "react";

type TRowProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Row({children, className = ""}: TRowProps) {
    return (
        <div className={`w-full flex flex-wrap ${className}`}>
            {children}
        </div>
    );
};