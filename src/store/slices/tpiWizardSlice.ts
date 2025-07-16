import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IThirdPartyInsuranceWizardValue} from "@/lib/types/third-party-insurance-wizard";

const initialState: IThirdPartyInsuranceWizardValue = {
    vehicleType: "",
    vehicleModel: "",
    company: "",
    thirdPartyDiscount: "",
    driverAccidentDiscount: ""
};

const tpiWizardSlice = createSlice({
    name: 'tpi',
    initialState,
    reducers: {
        setTPIWizardInfo(state, action: PayloadAction<IThirdPartyInsuranceWizardValue>) {
            return {...state, ...action.payload};
        },
        resetTPIWizardInfo() {
            return initialState;
        }
    }
});

export const {setTPIWizardInfo, resetTPIWizardInfo} = tpiWizardSlice.actions;
export default tpiWizardSlice.reducer;
