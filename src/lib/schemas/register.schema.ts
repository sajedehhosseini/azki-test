import { z } from "zod";

export const registerFormSchema = z.object({
    firstName: z
        .string()
        .nonempty("نام الزامی است")
        .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),
    lastName: z
        .string()
        .nonempty("نام خانوادگی الزامی است")
        .regex(/^[\u0600-\u06FF\s]+$/, "فقط حروف فارسی مجاز است"),
    phoneNumber: z
        .string()
        .nonempty("شماره موبایل الزامی است")
        .regex(/^09\d{9}$/, "فرمت شماره موبایل معتبر نیست"),
    password: z
        .string()
        .nonempty("رمز عبور الزامی است")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,10}$/,
            "باید شامل حرف کوچک، حرف بزرگ، عدد و بین ۴ تا ۱۰ کاراکتر باشد"
        ),
});
