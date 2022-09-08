import { useContext, useEffect, useState } from "react";
import AuthContext from '../../context/AuthContext'
import CatalogCard from "../Catalog/CatalogCard";
import "./Favorites.css"


function Favorites() {
    const { user } = useContext(AuthContext)
    const [tranings, setTranings] = useState([]);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/likes/')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(x => x._ownerId === user._id);
                const arr = [];
                filter.forEach(x => arr.push(x.favorites))
                setTranings(arr)
            })
            .catch(err => {
                alert(err)
            });

    }, [])

    
    console.log(tranings)

    //return (
    //<section className="formContainer-fav">

    //</section>
    //)
}

export default Favorites