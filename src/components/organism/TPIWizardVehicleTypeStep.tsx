"use client"

import React, {useMemo} from "react";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";
import Button from "@/components/atoms/Button";
import RHFControlledSelect from "@/components/controlled/RHFControlledSelect";
import {TTPIWizardStepsProps} from "@/components/organism/WizardThirdPartyFactory";
import {useVehicleTypes} from "@/hooks/useVehicleTypes";

export default function TPIWizardVehicleTypeStep({value, onNext, onBack}: TTPIWizardStepsProps) {
    const {data: vehicleTypes, isLoading} = useVehicleTypes();
    const vehicleTypeOptions = useMemo(() => {
        const options = vehicleTypes?.map((p) => p.title);
        return options ?? undefined
    }, [vehicleTypes]);

    const vehicleModelOptions = useMemo(() => {
        if (!value.vehicleType || !vehicleTypes?.length) return []
        const foundType = vehicleTypes.find((p) => p.title === value.vehicleType);
        return foundType?.usages?.map((p) => p.title) ?? undefined;
    }, [vehicleTypes, value.vehicleType]);

    return (
        <Row>
            <Col className={"my-3"}>
                <p className={"text-md text-stone-500"}>نوع و مدل خودروی خود را انتخاب کنید:</p>
            </Col>
            <Col md={6}>
                <RHFControlledSelect
                    loading={isLoading}
                    options={vehicleTypeOptions}
                    placeholder={"نوع خودرو"}
                    name={"vehicleType"}
                />
            </Col>
            <Col md={6}>
                <RHFControlledSelect
                    loading={isLoading}
                    disabled={isLoading || !value.vehicleType}
                    options={vehicleModelOptions}
                    placeholder={"مدل خودرو"}
                    name={"vehicleModel"}
                />
            </Col>
            <Col xs={6} className={"mt-3"}>
                <Button
                    onClick={onBack}
                    outlined
                    className="min-w-[150px]"
                    prefixIcon={<img src={'/svg/arrow.svg'} width={10} height={10} className={"rotate-180"}/>}
                >
                    بازگشت
                </Button>
            </Col>
            <Col xs={6} className={"text-end mt-3"}>
                <Button
                    onClick={onNext}
                    outlined
                    disabled={!(value.vehicleType && value.vehicleModel)}
                    className="min-w-[150px]"
                    suffixIcon={<img src={'/svg/arrow.svg'} width={10} height={10}/>}
                >
                    مرحله بعد
                </Button>
            </Col>
        </Row>
    )
}