"use client";
import LoginForm, {TLoginFormInputs} from "@/components/molecule/LoginForm";
import {useState} from "react";
import {useAppDispatch} from "@/store/hooks";
import {setUserInfo} from "@/store/slices/authSlice";

export default function LoginPage() {
    const [isPending, setIsPending] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const handleLogin = ({password, ...data}: TLoginFormInputs) => {
        console.log("handleLogin", data);
        setIsPending(true);
        dispatch(setUserInfo(data))
        setIsPending(false);
    };

    return <LoginForm onSubmit={handleLogin} isPending={isPending}/>;
}
