import useAuthHook from '../Components/hooks/authHook';
import { createContext } from 'react';

const AuthContext = createContext();

const initalValue = '';

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useAuthHook('user', initalValue);

    function login(user) {
        setUser(user);
    };

    return (
        <AuthContext.Provider value={{ user, login }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;