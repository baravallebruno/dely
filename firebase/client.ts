'use client';

import { getApps, initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { clientConfig } from './firebase.config';
import { authEmulatorPath, isDevelopmentEnv } from './constants';

const initializeClientApp = () => {
    const currentApps = getApps();

    if (!currentApps.length) {
        return initializeApp(clientConfig);
    }
};

const app = initializeClientApp();
const auth = getAuth(app);

if (isDevelopmentEnv && authEmulatorPath) {
    console.log({ isDevelopmentEnv, authEmulatorPath });
    connectAuthEmulator(auth, `http://${authEmulatorPath}`);
}

export { auth };
