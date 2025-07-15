"use client";
import RegisterForm, {TRegisterFormInputs} from "@/components/molecule/RegisterForm";
import {useTransition} from "react";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/store/hooks";
import {setUserInfo} from "@/store/slices/authSlice";
import {registerAction} from "@/lib/actions/auth.actions";

export default function RegisterPage() {
    const [isPending, startTransition] = useTransition();
    const dispatch = useAppDispatch()
    const router = useRouter();

    const handleRegister = ({password, ...data}: TRegisterFormInputs) => {
        startTransition(async () => {
            try {
                console.log("handleRegister", data);
                const result = await registerAction(data);
                if (result.success) {
                    dispatch(setUserInfo(data))
                    router.push("/");
                }
            } catch (e) {
                console.error('Register failed:', e.message);
            }
        })

    };

    return <RegisterForm onSubmit={handleRegister} isPending={isPending}/>;
}
