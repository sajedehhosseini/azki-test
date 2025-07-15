"use client";

import RegisterForm, {TRegisterFormInputs} from "@/components/organism/RegisterForm";
import {useTransition} from "react";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/store/hooks";
import {setUserInfo} from "@/store/slices/authSlice";
import {registerAction} from "@/lib/actions/auth.actions";

export default function RegisterPage() {
    const [isPending, startTransition] = useTransition();
    const dispatch = useAppDispatch()
    const router = useRouter();

    const handleRegister = async ({password, ...data}: TRegisterFormInputs) => {
        startTransition(async () => {
            try {
                const result = await registerAction(data);
                if (result.success) {
                    await router.push("/");
                    dispatch(setUserInfo(data))
                }
            } catch (e) {
                console.error('Register failed:', e.message);
            }
        })
    };

    return <RegisterForm onSubmit={handleRegister} isPending={isPending}/>;
}
