import React from "react";
import Button from "@/components/atoms/Button";
import RHFControlledInput from "@/components/controlled/RHFControlledInput";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";

export type TLoginFormInputs = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
};

type TLoginFormProps = {
    onSubmit: () => void;
    isPending?: boolean;
};

export default function LoginForm({onSubmit, isPending}: TLoginFormProps) {
    return (
        <form onSubmit={onSubmit}
              className="flex justify-center md:justify-end mt-6"
        >
            <Row className={"max-w-[570px]"}>
                <Col>
                    <h1 className="text-center text-lg md:text-start md:text-2xl font-bold">ثبت نام</h1>
                </Col>
                <Col md={6}>
                    <RHFControlledInput
                        name="firstName"
                        placeholder="نام"
                    />
                </Col>
                <Col md={6}>
                    <RHFControlledInput
                        name="lastName"
                        placeholder="نام خانوادگی"
                    />
                </Col>
                <Col>
                    <RHFControlledInput
                        name="phoneNumer"
                        placeholder="شماره موبایل"
                    />
                </Col>
                <Col>
                    <RHFControlledInput
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="رمز عبور"
                    />
                </Col>

                <Col className={"flex justify-center md:justify-end mt-3"}>
                    <Button type="submit" disabled={isPending} className="min-w-[150px]">
                        {isPending ? 'در حال ارسال...' : 'ثبت نام'}
                    </Button>
                </Col>
            </Row>
        </form>
    )
}