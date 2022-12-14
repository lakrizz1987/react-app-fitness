import "./Favorites.css";

import MyTrainigContext from "../../context/MyTrainingContext";
import CatalogCard from "../Catalog/CatalogCard";
import Loader from "../Loader/Loader";

import { useContext, useState } from "react";



function Favorites() {

    const [timer, setTimer] = useState(false);
    const { exercises } = useContext(MyTrainigContext);

    setTimeout(() => {
        setTimer(true);
    }, 1400);

    const forRender = (
        (exercises.length === 0) ? <h1 className="no-trainings">No trainings in yor list!</h1> : exercises.map(x => <CatalogCard ex={x} key={x._id} />)
    );

    return (
        <section className="formContainer-fav">
            {timer ? forRender : <Loader />}
        </section>
    );
};

export default Favorites;