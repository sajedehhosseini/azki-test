import Input from "@/components/atoms/Input";
import {useFormContext} from "react-hook-form";
import type {FieldValues, RegisterOptions} from "react-hook-form";
import {InputHTMLAttributes} from "react";

type TRHFControlledInputProps = {
    name: string;
    rules?: RegisterOptions;
} & InputHTMLAttributes<HTMLInputElement>

export default function RHFControlledInput({name, rules, ...props}: TRHFControlledInputProps) {
    const {
        register,
        formState: {errors},
    } = useFormContext<FieldValues>();

    return <Input
        id={name}
        name={name}
        {...register(name, rules as RegisterOptions)}
        error={errors[name]?.message as string ?? undefined}
        {...props}
    />
}
