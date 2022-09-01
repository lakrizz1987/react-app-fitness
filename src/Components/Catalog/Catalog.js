
import "./Catalog.css"
import CatalogCard from "./CatalogCard";
import { useEffect, useState } from "react";
import { getAll } from "../services/api";

export default function Catalog() {
    const [tranings, setTranings] = useState([]);

    useEffect(() => {
        getAll()
            .then(data => setTranings(data))

    }, [])

    return (
        <section className="formContainer-catalog">
            {tranings.map(x => <CatalogCard key={x._id} ex={x} />)}
        </section>
    );
};