import Input from "@/components/atoms/Input";
import {useFormContext} from "react-hook-form";
import type {FieldValues} from "react-hook-form";
import {InputHTMLAttributes} from "react";

type TRHFControlledInputProps = {
    name: string;
} & InputHTMLAttributes<HTMLInputElement>

export default function RHFControlledInput({name, ...props}: TRHFControlledInputProps) {
    const {
        register,
        formState: {errors},
    } = useFormContext<FieldValues>();

    return <Input
        id={name}
        name={name}
        {...register(name)}
        error={errors[name]?.message as string ?? undefined}
        {...props}
    />
}
