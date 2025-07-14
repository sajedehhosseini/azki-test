'use server';

import {cookies} from 'next/headers';

export async function loginAction(formData: FormData) {
    const cookieStore = cookies()
    cookieStore.set('token', 'test_token_123', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1Day
        sameSite: 'lax',
        secure: true,
    });

    return {success: true};
}