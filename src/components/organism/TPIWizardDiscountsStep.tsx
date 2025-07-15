import {useMemo} from "react";
import {useThirdDiscounts} from "@/hooks/useThirdDiscounts";
import {TTPIWizardStepsProps} from "@/components/organism/WizardThirdPartyFactory";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";
import RHFControlledSelect from "@/components/controlled/RHFControlledSelect";
import Button from "@/components/atoms/Button";

export default function TPIWizardDiscountsStep({value, onNext, onBack}: TTPIWizardStepsProps) {
    const {data: thirdDiscounts, isLoading} = useThirdDiscounts();
    const discountOptions = useMemo(() => {
        const options = thirdDiscounts?.map((p) => p.title);
        return options ?? undefined
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