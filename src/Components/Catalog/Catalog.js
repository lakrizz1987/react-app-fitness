
import "./Catalog.css"
import CatalogCard from "./CatalogCard";
import Loader from "../Loader/Loader";
import "../Loader/Loader.css";

import { useEffect, useState } from "react";
import { getAll } from "../../services/api";

export default function Catalog() {
    const [tranings, setTranings] = useState('');

    useEffect(() => {
        getAll()
            .then(data => setTranings(data))

    }, [])

    return (
        <>
            <section className="formContainer-catalog">
                {tranings ? tranings.map(x => <CatalogCard key={x._id} ex={x} />) : <Loader />}
            </section>
        </>
    );
};