"use client";
import RegisterForm, {TRegisterFormInputs} from "@/components/molecule/RegisterForm";
import {useState} from "react";
import {useAppDispatch} from "@/store/hooks";
import {setUserInfo} from "@/store/slices/authSlice";

export default function LoginPage() {
    const [isPending, setIsPending] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const handleRegister = ({password, ...data}: TRegisterFormInputs) => {
        console.log("handleRegister", data);
        setIsPending(true);
        dispatch(setUserInfo(data))
        setIsPending(false);
    };

    return <RegisterForm onSubmit={handleRegister} isPending={isPending}/>;
}
