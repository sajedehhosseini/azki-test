'use server';
import {cookies} from 'next/headers';
import type {TRegisterFormInputs} from "@/components/organism/RegisterForm";

export async function registerAction(data: TRegisterFormInputs) {
    const cookieStore = cookies()
    cookieStore.set('token', JSON.stringify(data), {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1Day
        sameSite: 'lax',
        secure: true,
    });

    return {success: true};
}

export async function logoutAction() {
    const cookieStore = cookies()
    cookieStore.delete('token');
    return {success: true, redirectTo: "/register"};
}