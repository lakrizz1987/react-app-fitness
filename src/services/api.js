const baseUrl = 'http://localhost:3030'

export const getAll = () => {
    return fetch(`${baseUrl}/data/gym`)
        .then(res => res.json())
};

export const getOne = (id) => {
    return fetch(`${baseUrl}/data/gym/${id}`)
        .then(res => res.json())
};

export const loginService = async (email, password) => {
    try {
        const response = await fetch(`${baseUrl}/users/login`, {
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

export const logoutService = async (user) => {
    const response = await fetch(`${baseUrl}/users/logout`, {
        headers: { 'X-Authorization': user.accessToken }
    });
    return response;
}

export const registerService = async (email, password) => {
    try {
        const response = await fetch(`${baseUrl}/users/register`, {
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

export const addFavoriteService = async (token, id) => {
    try {
        const response = await fetch(`${baseUrl}/data/likes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': `${token}`
            },
            body: JSON.stringify({ favorites: id   })
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
