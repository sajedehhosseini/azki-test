import {TWizardThirdPartyInsuranceFormInputs} from "@/hooks/useThirdPartyWizard";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";

export default function TPIWizardReport({values}: { values: TWizardThirdPartyInsuranceFormInputs }) {
    return (
        <Row className={'text-stone-600 md:text-md'}>
            <Col xs={8}>نوع خودرو</Col>
            <Col xs={4} className={'text-end font-bold'}>{values.vehicleType}</Col>
            <Col xs={8}>مدل خودرو</Col>
            <Col xs={4} className={'text-end font-bold'}>{values.vehicleModel}</Col>
            <Col xs={8}>شرکت بیمه گر قبلی</Col>
            <Col xs={4} className={'text-end font-bold'}>{values.company}</Col>
            <Col xs={8}>درصد تخفیف ثالث</Col>
            <Col xs={4} className={'text-end font-bold'}>{values.thirdPartyDiscount}</Col>
            <Col xs={8}>درصد تخفیف حوادث راننده</Col>
            <Col xs={4} className={'text-end font-bold'}>{values.driverAccidentDiscount}</Col>
        </Row>
    )
}
