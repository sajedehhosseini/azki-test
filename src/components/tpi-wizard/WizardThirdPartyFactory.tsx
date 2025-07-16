import React from "react";
import TPIWizardVehicleTypeStep from "@/components/tpi-wizard/TPIWizardVehicleTypeStep";
import TPIWizardCompanyStep from "@/components/tpi-wizard/TPIWizardCompanyStep";
import TPIWizardDiscountsStep from "@/components/tpi-wizard/TPIWizardDiscountsStep";
import {IThirdPartyInsuranceWizardValue} from "@/lib/types/third-party-insurance-wizard";

export type TTPIWizardStepsProps = {
    value: IThirdPartyInsuranceWizardValue;
    onNext: (data: any) => void;
    onBack?: () => void | undefined;
}

type TWizardThirdPartyFactoryProps = {
    step: 1 | 2 | 3
} & TTPIWizardStepsProps

const stepMap: Record<number, React.FC> = {
    1: TPIWizardVehicleTypeStep,
    2: TPIWizardCompanyStep,
    3: TPIWizardDiscountsStep,
};

export default function WizardThirdPartyFactory({step = 1, ...props}: TWizardThirdPartyFactoryProps) {
    const StepComponent = stepMap[step];
    return <StepComponent  {...props}/>;
}