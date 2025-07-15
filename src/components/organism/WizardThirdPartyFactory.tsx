import React from "react";
import TPIWizardVehicleTypeStep from "@/components/organism/TPIWizardVehicleTypeStep";
import TPIWizardCompanyStep from "@/components/organism/TPIWizardCompanyStep";
import TPIWizardDiscountsStep from "@/components/organism/TPIWizardDiscountsStep";
import {TWizardThirdPartyInsuranceFormInputs} from "@/hooks/useThirdPartyWizard";

export type TTPIWizardStepsProps = {
    value: TWizardThirdPartyInsuranceFormInputs;
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