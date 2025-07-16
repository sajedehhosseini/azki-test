'use client';
import Button from "@/components/UI/Button";
import Row from "@/components/UI/Row";
import Col from "@/components/UI/Col";
import Link from "next/link";

export default function Error({error}: { error: Error & { digest?: string }; }) {
    return (
        <Row className={"flex-col text-center py-5"}>
            <Col className="space-y-4">
                <h2 className="text-2xl font-bold text-red-600">خطایی رخ داد!</h2>
                <p className="text-gray-600">{error.message || 'خطای نامشخصی رخ داده است'}</p>
                <p className="text-sm text-gray-500">
                    {error.digest && `کد خطا: ${error.digest}`}
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