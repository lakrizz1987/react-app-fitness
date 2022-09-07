import { useEffect, useState } from "react";
import { getAll } from "../../../services/api";

import Loader from "../../Loader/Loader";
import CatalogCard from "../CatalogCard";


const All = () => {
    const [tranings, setTranings] = useState('');

    useEffect(() => {
        getAll()
            .then(data => setTranings(data))

    }, [])

    return (
        <>
        {tranings ? tranings.map(x => <CatalogCard key={x._id} ex={x} />) : <Loader />}
        </>
    )
}

export default All;