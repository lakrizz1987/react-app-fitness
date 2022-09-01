import { useState } from 'react';

const useAuthHook = (key, value) => {
    const [user, setUser] = useState(() => {
        const data = localStorage.getItem(key);

        if (data) {
            return JSON.parse(data);
        } else {
            return value;
        }
    });

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setUser(value)
    }

    return [user, setItem]

};

export default useAuthHook;