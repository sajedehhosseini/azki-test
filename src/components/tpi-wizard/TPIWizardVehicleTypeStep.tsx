"use client"

import React, {useMemo} from "react";
import Row from "@/components/UI/Row";
import Col from "@/components/UI/Col";
import Button from "@/components/UI/Button";
import RHFControlledSelect from "@/components/controlled/RHFControlledSelect";
import {TTPIWizardStepsProps} from "@/components/tpi-wizard/WizardThirdPartyFactory";
import {useVehicleTypes} from "@/hooks/useVehicleTypes";
import {IVehicleCategory} from "@/lib/types/vehicle-types";

export default function TPIWizardVehicleTypeStep({value, onNext, onBack}: TTPIWizardStepsProps) {
    const {data: vehicleTypes, isLoading} = useVehicleTypes();
    const vehicleTypeOptions: string[] = useMemo(() => {
        const options: string[] = vehicleTypes?.map((p) => p.title);
        return options ??  []
    }, [vehicleTypes]);

    const vehicleModelOptions: string[] = useMemo(() => {
        if (!value.vehicleType || !vehicleTypes?.length) return []
        const foundType: IVehicleCategory = vehicleTypes.find((p) => p.title === value.vehicleType);
        const options: string[] = foundType?.usages?.map((p) => p.title);
        return options ??  []
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