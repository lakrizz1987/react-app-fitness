import "./Details.css"
import ReactPlayer from 'react-player';
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
    }, [id])

    return (
        <>
            <div className="body-container">
                <section className="details-wraper">
                    <div className="tittle-container"><h1>{training.name}</h1>
                        <button className="btn-fav">Add to Favorites</button>

                    </div>
                    <img className="img-details" src={training.img} alt='some-pic'></img>
                    <p className="p-details">{training.description}</p>
                    <div className='player-container'>
                        <ReactPlayer
                            className='react-player'
                            url={training.video}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </div>
                </section>

            </div>


        </>
    )
}

export default Details;