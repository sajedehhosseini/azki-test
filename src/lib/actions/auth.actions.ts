'use server';

import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

export async function loginAction(formData: FormData) {
    const cookieStore = cookies()
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (username === 's.hoseini' && password === '09339435724') {
        cookieStore.set('token', 'test_token_123', {
            httpOnly: true,
            path: '/',
        });

        return { success: true };
    }

    throw new Error('نام کاربری یا رمز عبور اشتباه است');
}