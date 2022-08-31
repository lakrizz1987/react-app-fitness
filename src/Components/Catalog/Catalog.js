
import "./Catalog.css"
import CatalogCard from "./CatalogCard";
import { useEffect, useState } from "react";

export default function Catalog() {
    const [tranings, setTranings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/gym')
            .then(res => res.json())
            .then(data => setTranings(data))
    }, [])

    return (
        <section className="formContainer-catalog">
            {tranings.map(x => <CatalogCard ex={x} />)}
        </section>
    );
};