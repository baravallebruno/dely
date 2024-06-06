'use server';

import { cookies } from 'next/headers';
import { User } from '../context/types';

const getAuthToken = (): string | undefined => {
    return cookies().get('authToken')?.value;
};

const setAuthToken = (token: string): void => {
    console.log('Setting auth token', { token });
    cookies().set('authToken', token, { httpOnly: true });
};

const removeAuthToken = (): void => {
    console.log('Removing auth token');
    cookies().delete('authToken');
};

export { getAuthToken, setAuthToken, removeAuthToken };
