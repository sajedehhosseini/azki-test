import {useRouter, useSearchParams} from "next/navigation";
import {useForm, useWatch} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import {thirdPartyInsuranceFormSchema} from "@/lib/schemas";
import {useAppDispatch, useAppSelector} from "@/store/hooks";
import {resetTPIWizardInfo, setTPIWizardInfo} from "@/store/slices/tpiWizardSlice";
import {getValidTPIWizardStep} from "@/utils/getValidTPIWizardStep";

export type TWizardThirdPartyInsuranceFormInputs = {
    vehicleType: string;
    vehicleModel: string;
    company: string;
    thirdPartyDiscount: string;
    driverAccidentDiscount: string;
};
export type TSteps = 1 | 2 | 3
export const useThirdPartyWizard = () => {
    const router = useRouter();
    const [step, setStep] = useState<TSteps>(1);
    const [showModal, setShowModal] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const tpiStored = useAppSelector(state => state.tpi)

    const searchParams = useSearchParams();
    const stepParam: undefined | string = searchParams.get('step');
    const stepUrl: TSteps = stepParam ? Number(stepParam) : 1;

    const methods = useForm<TWizardThirdPartyInsuranceFormInputs>({
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

    const values = useWatch({control: methods.control});
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

    const onSubmit = (data: TWizardThirdPartyInsuranceFormInputs) => {
        dispatch(setTPIWizardInfo(data))
        setShowModal(true)
    };

    const handleNext = () => {
        dispatch(setTPIWizardInfo(values))
        setStep((prev) => prev + 1);
        router.replace(`?step=${step + 1}`);
    };

    const handleBack = () => {
        if (step === 1) router.back();
        else {
            setStep((prev) => prev - 1);
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
