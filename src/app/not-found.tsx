import Link from 'next/link';
import Button from "@/components/UI/Button";
import Row from "@/components/UI/Row";
import Col from "@/components/UI/Col";

export default function NotFound() {
    return (
        <Row className={"flex-col text-center py-5"}>
            <Col className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-800">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700">صفحه مورد نظر یافت نشد</h2>
                <p className="text-gray-600">
                    متأسفیم، صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
                </p>
            </Col>
            <Col>
                <Button>
                    <Link href="/">بازگشت به صفحه اصلی</Link>
                </Button>
            </Col>
        </Row>
    );
}