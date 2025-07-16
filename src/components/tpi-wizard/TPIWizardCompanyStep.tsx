'use client';

import React, {useMemo} from "react";
import Row from "@/components/UI/Row";
import Col from "@/components/UI/Col";
import RHFControlledSelect from "@/components/controlled/RHFControlledSelect";
import Button from "@/components/UI/Button";
import {useCompanies} from "@/hooks/useCompanies";
import {TTPIWizardStepsProps} from "@/components/tpi-wizard/WizardThirdPartyFactory";

export default function TPIWizardCompanyStep({value, onNext, onBack}: TTPIWizardStepsProps) {
    const {data: comapnies, isLoading} = useCompanies();
    const companyOptions: string[] = useMemo(() => {
        const options: string[] = comapnies?.map((p) => p.title);
        return options ??  []
    }, [comapnies]);

    return (
        <Row>
            <Col className={"my-3"}>
                <p className={"text-md text-stone-500"}>شرکت بیمه گر قبلی خود را در این بخش وارد کنید:</p>
            </Col>
            <Col md={12}>
                <RHFControlledSelect
                    loading={isLoading}
                    options={companyOptions}
                    placeholder={"شرکت بیمه گر قبلی"}
                    name={"company"}
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
                    disabled={!value.company}
                    className="min-w-[150px]"
                    suffixIcon={<img src={'/svg/arrow.svg'} width={10} height={10}/>}
                >
                    مرحله بعد
                </Button>
            </Col>
        </Row>
    )
}