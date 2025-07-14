"use client";

import LoginForm from "@/components/molecule/LoginForm";
import {useState} from "react";

export default function LoginPage() {
    const [isPending, setIsPending] = useState<boolean>(false)
    const handleLogin = () => {
        setIsPending(true)
        console.log('handleLogin')
    }

    return <LoginForm onSubmit={handleLogin} isPending={isPending}/>
}