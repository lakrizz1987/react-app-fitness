import { useEffect, useState } from "react";
import { getAll } from "../../../services/api";
import Loader from "../../Loader/Loader";


import CatalogCard from "../CatalogCard"

const Arms = () => {
    const [tranings, setTranings] = useState('');

    useEffect(() => {
        getAll()
            .then(data => {
                const filter = data.filter(x => x.category === 'arms');
                setTranings(filter);
            })

    }, [])

    return (
        <>
            {tranings ? tranings.map(x => <CatalogCard key={x._id} ex={x} />) : <Loader />}
        </>
    )
}

export default Arms;