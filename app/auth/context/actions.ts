import { signInWithPopup } from 'firebase/auth';
import { auth } from '../../../firebase/client';
import { Actions, AuthProviders } from './types';
import providers from './authProviders';
import { redirect } from 'next/navigation';

const signInWithProvider = async (provider: AuthProviders): Promise<void> => {
    const currentProvider = providers[provider];
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, currentProvider)
            .then(() => {
                resolve();
            })
            .catch((error) => {
                console.error(error);
                reject();
            });
    });
};

const actions: Actions = {
    signInWithGoogle: async (): Promise<void> => signInWithProvider('google'),
    signOut: async (): Promise<void> => {
        return new Promise((resolve, reject) => {
            auth.signOut()
                .then(() => {
                    console.log('User signed out');
                    resolve();
                })
                .catch((error) => {
                    console.error(error);
                    reject();
                });
        });
    },
};

export default actions;
