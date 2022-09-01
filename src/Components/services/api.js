export const getAll = () => {
    return fetch('http://localhost:3030/data/gym')
        .then(res => res.json())
};

export const getOne = (id) => {
    return fetch(`http://localhost:3030/data/gym/${id}`)
        .then(res => res.json())
}
