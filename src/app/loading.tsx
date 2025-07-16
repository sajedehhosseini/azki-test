import Row from "@/components/UI/Row";
import Col from "@/components/UI/Col";

export default function Loading() {
    return (
        <Row className={"flex-col text-center py-5"}>
            <Col className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">درحال بارگزاری...</h1>
            </Col>
        </Row>
    );
}