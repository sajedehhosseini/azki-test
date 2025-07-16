"use client";

import React from "react";
import WizardThirdPartyFactory from "@/components/tpi-wizard/WizardThirdPartyFactory";
import {FormProvider} from "react-hook-form";
import {useThirdPartyWizard} from "@/hooks/useThirdPartyWizard";
import Modal from "@/components/UI/Modal";
import TPIWizardReport from "@/components/tpi-wizard/TPIWizardReport";

export default function WizardThirdPartyInsurance() {
    const {
        step,
        methods,
        values,
        handleNext,
        handleBack,
        onSubmit,
        showModal,
        setShowModal
    } = useThirdPartyWizard();

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <WizardThirdPartyFactory
                    step={step}
                    value={values}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            </form>
            <Modal
                show={showModal}
                title={"استعلام"}
                onConfirm={() => setShowModal(false)}
                onHide={() => setShowModal(false)}
            >
                <TPIWizardReport values={values}/>
            </Modal>
        </FormProvider>
    )
}