import {useFormContext, Controller} from "react-hook-form";
import Select from "@/components/atoms/Select";
import {SelectHTMLAttributes} from "react";

type TRHFControlledSelectProps = {
    name: string;
    loading: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>

export default function RHFControlledSelect({name, ...props}: TRHFControlledSelectProps) {
    const {control, formState: {errors}} = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({field}) => (
                <Select
                    {...field}
                    {...props}
                    id={name}
                    name={name}
                    error={errors[name]?.message as string}
                />
            )}
        />
    )
}