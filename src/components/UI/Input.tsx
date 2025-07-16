import React, {InputHTMLAttributes} from "react";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & { error: string | undefined }
const Input = React.forwardRef<HTMLInputElement, TInputProps>(({error, ...props}, ref) => { //TODO: add ts
    return (
        <div className="mt-2 mb-1 relative">
            <div
                className={`bg-white rounded-sm border focus-within:border-indigo-700 ${error ? "border-red-600" : "border-gray-300"}`}
            >
                <input
                    ref={ref}
                    {...props}
                    aria-invalid={!!error}
                    className={'h-[40px] md:h-[48px] w-full placeholder:text-gray-400 focus:outline-none px-2 sm:text-sm'}
                />
            </div>
            {error && (
                <p className="absolute mt-1 text-xs text-red-600">{error}</p>
            )}
        </div>
    )
})
Input.displayName = "Input";
export default Input;