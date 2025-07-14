import Input from "@/components/atoms/Input";
import {InputHTMLAttributes} from "react";

type TRHFControlledInputProps = {
    name: string;
} & InputHTMLAttributes<HTMLInputElement>

export default function RHFControlledInput({name, ...props}: TRHFControlledInputProps) {
    return <Input
        id={name}
        name={name}
        error={''}
        {...props}
    />
}