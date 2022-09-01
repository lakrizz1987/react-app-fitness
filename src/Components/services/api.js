export const getAll = () => {
    return fetch('http://localhost:3030/data/gym')
        .then(res => res.json())
} 