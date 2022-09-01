export const getAll = () => {
    return fetch('http://localhost:3030/data/gym')
        .then(res => res.json())
};

export const getOne = (id) => {
    return fetch(`http://localhost:3030/data/gym/${id}`)
        .then(res => res.json())
};

export const loginService = (email, password) => {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
        .then(data =>{
            if(data.ok === false){
                throw new Error(data)
            }else{
                return data.json()
            }
        })
        .catch((err) =>{
            throw err;
        });
};      
