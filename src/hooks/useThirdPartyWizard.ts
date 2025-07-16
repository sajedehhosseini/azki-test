import {useRouter, useSearchParams} from "next/navigation";
import {useForm, UseFormReturn, useWatch} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useEffect, useState} from "react";
import {thirdPartyInsuranceFormSchema} from "@/lib/schemas";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {resetTPIWizardInfo, setTPIWizardInfo} from "@/store/slices/tpiWizardSlice";
import {getValidTPIWizardStep} from "@/utils/getValidTPIWizardStep";
import {
    IThirdPartyInsuranceWizardValue
} from "@/lib/types/third-party-insurance-wizard";

export type TSteps = 1 | 2 | 3;

interface IUseThirdPartyWizardReturn {
    step: TSteps;
    methods: UseFormReturn<IThirdPartyInsuranceWizardValue>;
    values: IThirdPartyInsuranceWizardValue;
    handleNext: () => void;
    handleBack: () => void;
    onSubmit: (data: IThirdPartyInsuranceWizardValue) => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useThirdPartyWizard = (): IUseThirdPartyWizardReturn => {
    const router = useRouter();
    const [step, setStep] = useState<TSteps>(1);
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const tpiStored = useAppSelector(state => state.tpi)
    const searchParams = useSearchParams();
    const stepParam: undefined | string = searchParams.get('step');
    const stepUrl: TSteps = stepParam ? Number(stepParam) : 1;
    const methods: UseFormReturn<IThirdPartyInsuranceWizardValue> = useForm<IThirdPartyInsuranceWizardValue>({
        defaultValues: {
            vehicleType: "",
            vehicleModel: "",
            company: "",
            thirdPartyDiscount: "",
            driverAccidentDiscount: ""
        },
        resolver: zodResolver(thirdPartyInsuranceFormSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    });
    const values: IThirdPartyInsuranceWizardValue = useWatch({control: methods.control});
    useEffect(() => {
        if (stepUrl) {
            if (stepUrl === 1) {
                dispatch(resetTPIWizardInfo())
                methods.reset()
                return;
            }

            const validStep: TSteps = getValidTPIWizardStep(tpiStored, stepUrl);
            methods.reset(tpiStored)

            if (validStep < stepUrl) {
                setStep(validStep)
                router.replace(`?step=${validStep}`);
            } else {
                setStep(stepUrl)
            }
        }
    }, [])

    const onSubmit = (data: IThirdPartyInsuranceWizardValue): void => {
        dispatch(setTPIWizardInfo(data))
        setShowModal(true)
    };

    const handleNext = (): void => {
        dispatch(setTPIWizardInfo(values))
        setStep((prev: TSteps) => (prev + 1) as TSteps);
        router.replace(`?step=${step + 1}`);
    };

    const handleBack = (): void => {
        if (step === 1) router.back();
        else {
            setStep((prev: TSteps) => (prev - 1) as TSteps);
            router.replace(`?step=${step - 1}`);
        }
    };

    return {
        step,
        methods,
        values,
        handleNext,
        handleBack,
        onSubmit,
        showModal,
        setShowModal
    };
};
