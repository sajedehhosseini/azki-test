import { z } from "zod";

export const thirdPartyInsuranceFormSchema = z.object({
    vehicleType: z
        .string()
        .nonempty("انتخاب نوع خودرو الزامی است"),
    vehicleModel: z
        .string()
        .nonempty("انتخاب مدل خودرو الزامی است"),
    company: z
        .string()
        .nonempty("انتخاب شرکت بیمه گر قبلی الزامی است"),
    thirdPartyDiscount: z
        .string()
        .nonempty("انتخاب درصد تخفیف ثالث الزامی است"),
    driverAccidentDiscount: z
        .string()
        .nonempty("انتخاب درصد تخفیف حوادث راننده الزامی است"),
});
