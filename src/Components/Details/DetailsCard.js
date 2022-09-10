import { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { addFavoriteService, getFavoritesIds } from '../../services/api';
import "./DetailsCard.css";

const DetailsCard = ({ training }) => {
    window.scrollTo(0, 0);

    const [isAdd, setIsAdd] = useState(false)
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const token = user.accessToken;

    useEffect(() => {
        getFavoritesIds()
            .then(data => {
                const filter = data.filter(x => x._ownerId === user._id);
                const arr = [];
                filter.forEach(x => arr.push(x.favorites))
                if (arr.includes(id)) {
                    setIsAdd(true)
                }
            })
    }, [])

    function addToFavoritesHandler(e) {

        addFavoriteService(token, id)
        e.target.setAttribute("disabled", true);
        e.target.style.color = 'red'
        setIsAdd(true)
    };

    const buttons = (
        isAdd ? <button className="btn-fav">Remove from MyTrainings</button>
            : <button className="btn-fav" onClick={addToFavoritesHandler}>Add to MyTrainings</button>
    )

    return (
        <>
            <div className="body-container animation-details-card">
                <section className="details-wraper">
                    <div className="tittle-container"><h1>{training.name}</h1>
                        {user ? buttons : ''}

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

export default DetailsCard;