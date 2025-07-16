import React from "react";
import InsuranceSVGIcon from "@/components/svg/InsuranceSVGIcon";

export default function InsuranceItemButton({data}) {
    return (
        <div className={`flex flex-col justify-center items-center w-[130px] h-[130px] rounded-xl 
            ${data.enabled ?
            "border border-gray-300 shadow-sm text-stone-800"
            : "border border-gray-100 shadow-sm text-stone-400"}
            `}>
            <InsuranceSVGIcon className="w-[50px] h-[50px]"/>
            <span className={`font-bold  mt-3`}>
                    {data.title}
                </span>
        </div>
    )
}