import React from "react";
import WizardThirdPartyInsurance from "@/components/tpi-wizard/WizardThirdPartyInsurance";

export default function ThirdPartyInsurancePage() {
    return (
        <div>
            <h1 className="text-center text-lg md:text-start md:text-2xl font-bold p-3">
                بیمه شخص ثالث
            </h1>

            <WizardThirdPartyInsurance/>
        </div>
    )
}
