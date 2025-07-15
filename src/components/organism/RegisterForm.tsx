import React from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "@/components/atoms/Button";
import RHFControlledInput from "@/components/controlled/RHFControlledInput";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";
import {registerFormSchema} from "@/lib/schemas";

export type TRegisterFormInputs = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
};

type TRegisterFormProps = {
    onSubmit: (data: TRegisterFormInputs) => void;
    isPending?: boolean;
};

export default function RegisterForm({onSubmit, isPending}: TRegisterFormProps) {
    const methods = useForm<TRegisterFormInputs>({
        resolver: zodResolver(registerFormSchema),
        mode: "onChange",
        reValidateMode: "onChange",
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className={"flex justify-center"}>
                <Row className={"max-w-[570px]"}>
                    <Col>
                        <h1 className="text-center text-lg sm:text-start md:text-2xl font-bold">
                            ثبت نام
                        </h1>
                    </Col>
                    <Col sm={6}>
                        <RHFControlledInput name="firstName" placeholder="نام"/>
                    </Col>
                    <Col sm={6}>
                        <RHFControlledInput name="lastName" placeholder="نام خانوادگی"/>
                    </Col>
                    <Col>
                        <RHFControlledInput name="phoneNumber" placeholder="شماره موبایل"/>
                    </Col>
                    <Col>
                        <RHFControlledInput name="password" type="password" autoComplete="new-password"
                                            placeholder="رمز عبور"/>
                    </Col>

                    <Col className={"flex justify-center sm:justify-end mt-3"}>
                        <Button
                            type="submit"
                            disabled={isPending || !methods.formState.isValid}
                            className="min-w-[150px]"
                        >
                            {isPending ? "در حال ارسال..." : "ثبت نام"}
                        </Button>
                    </Col>
                </Row>
            </form>
        </FormProvider>
    );
}
