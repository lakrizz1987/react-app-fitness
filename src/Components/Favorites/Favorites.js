import { useContext, useEffect, useState } from "react";
import AuthContext from '../../context/AuthContext'
import { getOne } from "../../services/api";
import CatalogCard from "../Catalog/CatalogCard";
import "./Favorites.css"


function Favorites() {
    const { user } = useContext(AuthContext)
    const [traningsId, setTraningsId] = useState([]);
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/likes/')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(x => x._ownerId === user._id);
                const arr = [];
                filter.forEach(x => arr.push(x.favorites))
                setTraningsId(arr)
            })
            .catch(err => {
                alert(err)
            });

    }, [user._id])

    useEffect(() => {
        traningsId.forEach(x => {
            getOne(x)
                .then(data => {
                    setExercises(oldState => {
                        return [...oldState, data]
                    })
                })
        })
    }, [traningsId])




    return (
        <section className="formContainer-fav">
            {exercises.map(x => <CatalogCard ex={x} key={x._id} />)}
        </section>
    )
}

export default Favorites