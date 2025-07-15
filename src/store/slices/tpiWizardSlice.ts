// store/wizardSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TTPIWizardState {
    vehicleType: string;
    vehicleModel: string;
    company: string;
    thirdPartyDiscount: string;
    driverAccidentDiscount: string;
}

const initialState: TTPIWizardState = {
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
        setTPIWizardInfo(state, action: PayloadAction<string>) {
            return {...state, ...action.payload};
        },
        resetTPIWizardInfo() {
            return initialState;
        }
    }
});

export const {setTPIWizardInfo, resetTPIWizardInfo} = tpiWizardSlice.actions;
export default tpiWizardSlice.reducer;
