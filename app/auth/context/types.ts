import { User as FirebaseUser } from 'firebase/auth';

type User = FirebaseUser & {
    role?: UserRole;
};

type UserInfo = Pick<
    User,
    'uid' | 'email' | 'displayName' | 'photoURL' | 'role'
>;

type State = {
    user: UserInfo | null;
    isProcessingAuth: boolean;
};

type Actions = {
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
};

type AuthContextType = {
    state: State;
    actions: Actions;
};

type AuthProviders = 'google';

type UserRole = 'admin' | 'tenant' | 'customer';

export type {
    AuthContextType,
    State,
    Actions,
    AuthProviders,
    User,
    UserRole,
    UserInfo,
};
