import { User, UserRole } from '../context/types';

const parseUserInfo = (user: User, role?: UserRole) => {
    const { uid, email, displayName, photoURL } = user;
    return {
        uid,
        email,
        displayName,
        photoURL,
        role,
    };
};

export { parseUserInfo };
