import React from "react";
import insurances from '@/lib/constants/insurances.json';
import InsuranceList from "@/components/organism/InsuranceList";

export const dynamic = 'force-static'; //for SSG

export default function Home() {
    return (
        <div>
            <h1 className="text-center text-lg md:text-start md:text-2xl font-bold mb-9">
              انتخاب بیمه
            </h1>
            <div className={"flex gap-3 justify-center md:justify-start"}>
                <InsuranceList data={insurances}/>
            </div>
        </div>
    )
}
