
import Loader from '../Loader/Loader';
import DetailsCard from "./DetailsCard";

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getOne } from "../../services/api";

function Details() {
    const [training, setTraining] = useState('');
    const match = useParams();

    const id = match.id

    useEffect(() => {
        getOne(id)
            .then(data => setTraining(data))
    }, [id]);

    
    return (
        training 
            ? <DetailsCard training={training}/>
            : <Loader/>
    )
}

export default Details;