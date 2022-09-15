import CatalogCard from "../CatalogCard";
import Loader from "../../Loader/Loader";

import { useEffect, useState } from "react";
import { getAll } from "../../../services/api";


const Shoulders = () => {

    const [tranings, setTranings] = useState('');

    useEffect(() => {
        getAll()
            .then(data => {
                const filter = data.filter(x => x.category === 'shoulers');
                setTranings(filter);
            })

    }, []);

    return (
        <>
            {tranings ? tranings.map(x => <CatalogCard key={x._id} ex={x} />) : <Loader />}
        </>
    );

};

export default Shoulders;