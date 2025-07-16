'use client';

import {useMemo} from "react";
import {useThirdDiscounts} from "@/hooks/useThirdDiscounts";
import {TTPIWizardStepsProps} from "@/components/tpi-wizard/WizardThirdPartyFactory";
import Row from "@/components/UI/Row";
import Col from "@/components/UI/Col";
import RHFControlledSelect from "@/components/controlled/RHFControlledSelect";
import Button from "@/components/UI/Button";

export default function TPIWizardDiscountsStep({value}: Pick<TTPIWizardStepsProps, 'value'>) {
    const {data: thirdDiscounts, isLoading} = useThirdDiscounts();
    const discountOptions: string[] = useMemo(() => {
        const options: string[] = thirdDiscounts?.map((p) => p.title);
        return options ?? []
    }, [thirdDiscounts]);

    return (
        <Row>
            <Col className={"my-3"}>
                <p className={"text-md text-stone-500"}>درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید:</p>
            </Col>
            <Col md={12}>
                <RHFControlledSelect
                    loading={isLoading}
                    options={discountOptions}
                    placeholder={"درصد تخفیف ثالث"}
                    name={"thirdPartyDiscount"}
                />
            </Col>
            <Col md={12}>
                <RHFControlledSelect
                    loading={isLoading}
                    options={discountOptions}
                    placeholder={"درصد تخفیف حوادث راننده"}
                    name={"driverAccidentDiscount"}
                />
            </Col>
            <Col xs={12} className={"text-end mt-3"}>
                <Button
                    type={"submit"}
                    disabled={!(value.thirdPartyDiscount && value.driverAccidentDiscount)}
                    className="min-w-[150px]"
                    suffixIcon={<img src={'/svg/arrow.svg'} width={10} height={10}/>}
                >
                    استعلام قیمت
                </Button>
            </Col>
        </Row>
    )
}