export const getAll = () => {
    return fetch('http://localhost:3030/data/gym')
        .then(res => res.json())
};

export const getOne = (id) => {
    return fetch(`http://localhost:3030/data/gym/${id}`)
        .then(res => res.json())
};

export const loginService = async (email, password) => {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok === false) {
            const errData = await response.json();
            throw new Error(errData.message);
        } else {
            return response.json();
        };
        
    } catch (err) {
        throw err;
    }
};      
