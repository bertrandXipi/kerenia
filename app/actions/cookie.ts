'use server';

import { cookies } from 'next/headers';

export async function acceptCookies() {
    cookies().set('user-consent', 'accepted', {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
    });
}

export async function rejectCookies() {
    cookies().set('user-consent', 'rejected', {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
    });
}

export async function revokeCookies() {
    cookies().delete('user-consent');
}
