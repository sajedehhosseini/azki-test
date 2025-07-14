import React from "react";

type TCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type TColProps = {
    children: React.ReactNode;
    className?: string;
    sm?: TCols;
    md?: TCols;
    lg?: TCols;
    xl?: TCols;
}

export default function Col({children, className = "", sm, md, lg}: TColProps) {
    const smClass: string = sm ? `sm:${widthMap[sm] || ""}` : "";
    const mdClass: string = md ? `md:${widthMap[md] || ""}` : "";
    const lgClass: string = lg ? `lg:${widthMap[lg] || ""}` : "";
    const classes: string = [smClass, mdClass, lgClass, 'w-full'].join(' ').trim()

    return (
        <div className={`py-2 sm:p-2 md:p-3 ${classes} ${className}`}>
            {children}
        </div>
    );
};

const widthMap: Record<TCols, string> = {
    1: "w-1/12",
    2: "w-2/12",
    3: "w-3/12",
    4: "w-4/12",
    5: "w-5/12",
    6: "w-6/12",
    7: "w-7/12",
    8: "w-8/12",
    9: "w-9/12",
    10: "w-10/12",
    11: "w-11/12",
    12: "w-full",
};