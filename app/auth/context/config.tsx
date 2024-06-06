'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type {
    Actions,
    AuthContextType,
    State,
    UserInfo,
    UserRole,
} from './types';
import { auth } from '../../../firebase/client';
import actions from './actions';
import { removeAuthToken, setAuthToken } from '../lib/token';
import { parseUserInfo } from '../lib/user';
import { objectKeys } from '../../../lib/utils';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [isProcessingAuth, setProcessingAuth] = useState<boolean>(false);

    const withLoadingStateActions = (actions: Actions) => {
        return objectKeys(actions).reduce<Actions>((actionsMap, action) => {
            actionsMap[action] = async () => {
                setProcessingAuth(true);
                console.log('Processing auth with', action);

                await actions[action]().then(() => {
                    console.log('Finished processing auth with', action);
                    setProcessingAuth(false);
                });
            };
            return actionsMap;
        }, {} as Actions);
    };

    useEffect(() => {
        return auth.onAuthStateChanged(async (rawUser) => {
            if (!rawUser) {
                setUser(null);
                removeAuthToken();
                return;
            }

            const authToken = await rawUser.getIdToken();
            setAuthToken(authToken);

            const tokenValues = await rawUser.getIdTokenResult();
            const userInfo = parseUserInfo(
                rawUser,
                tokenValues.claims.role as UserRole
            );
            setUser(userInfo);
        });
    }, []);

    const state: State = {
        user,
        isProcessingAuth,
    };

    return (
        <AuthContext.Provider
            value={{
                state,
                actions: withLoadingStateActions(actions),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
