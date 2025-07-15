import {TSteps, TWizardThirdPartyInsuranceFormInputs} from "@/hooks/useThirdPartyWizard";

export function getValidTPIWizardStep(
    data: Partial<TWizardThirdPartyInsuranceFormInputs>,
    requestedStep: number
): TSteps {
    if (requestedStep < 1 || requestedStep > 3) return 1;
    if (!data.vehicleType || !data.vehicleModel) return 1;
    if (!data.company) return 2;
    if (!data.thirdPartyDiscount || !data.driverAccidentDiscount) return 3;
}
