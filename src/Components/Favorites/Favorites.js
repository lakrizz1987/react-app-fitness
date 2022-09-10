import { useContext, useEffect, useState } from "react";
import AuthContext from '../../context/AuthContext'
import { getFavoritesIds, getOne } from "../../services/api";
import CatalogCard from "../Catalog/CatalogCard";
import Loader from "../Loader/Loader";
import "./Favorites.css"


function Favorites() {
    const { user } = useContext(AuthContext)
    const [traningsId, setTraningsId] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [timer,setTimer] = useState(false)

    useEffect(() => {
        getFavoritesIds()
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
        setTimeout(() => {
            setTimer(true)
          }, 1500);
    }, [traningsId])

    
    const forRender = (
        (exercises.length === 0) ? <h1 className="no-trainings">No trainings in yor list!</h1> : exercises.map(x => <CatalogCard ex={x} key={x._id} />)
    )

    return (
        <section className="formContainer-fav">
            {timer ? forRender : <Loader />}
        </section>
    )
}

export default Favorites;