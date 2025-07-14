"use client";
import LoginForm, { TLoginFormInputs } from "@/components/molecule/LoginForm";
import { useState } from "react";

export default function LoginPage() {
  const [isPending, setIsPending] = useState<boolean>(false);
  const handleLogin = (data: TLoginFormInputs) => {
    setIsPending(true);
    console.log("handleLogin", data);
  };

  return <LoginForm onSubmit={handleLogin} isPending={isPending} />;
}
