import React, {SelectHTMLAttributes} from "react";

type TSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    options: any[];
    loading: boolean;
    error: string | undefined
}
const Select = React.forwardRef<HTMLSelectElement, TSelectProps>(({
                                                                      options,
                                                                      placeholder,
                                                                      disabled,
                                                                      loading,
                                                                      error,
                                                                      ...props
                                                                  }, ref) => {
    return (
        <div className="mt-2 mb-1 relative">
            <div
                className={`bg-white rounded-sm border ${error ? "border-red-600" : "border-gray-300"}`}
            >
                <select
                    ref={ref}
                    disabled={disabled || loading}
                    {...props}
                    className={`h-[40px] md:h-[48px] w-full placeholder:text-gray-400 focus:outline-none px-2 sm:text-sm disabled:text-gray-400
                    appearance-none bg-[url('/svg/select-arrow.svg')] bg-no-repeat bg-[position:left_0.5rem_center] bg-[size:1.5em]`}
                >
                    <option value="" hidden>
                        {loading ? 'درحال بارگزاری...' : placeholder}
                    </option>
                    {(options || []).map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            </div>
            {error && (
                <p className="absolute mt-1 text-xs text-red-600">{error}</p>
            )}
        </div>
    )
})
Select.displayName = "Select";
export default Select;