import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import tpiWizardSlice from "./slices/tpiWizardSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    tpi: tpiWizardSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
