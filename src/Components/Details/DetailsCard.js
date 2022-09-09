import { useContext, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { addFavoriteService } from '../../services/api';
import "./DetailsCard.css";

const DetailsCard = ({training}) => {
    window.scrollTo(0, 0);
    

    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const token = user.accessToken;

    function addToFavoritesHandler(e){
       
        addFavoriteService(token,id)
        e.target.setAttribute("disabled", true);
        e.target.style.color = 'red'
       
    };

    return (
        <>
            <div className="body-container animation-details-card">
                <section className="details-wraper">
                    <div className="tittle-container"><h1>{training.name}</h1>
                        <button className="btn-fav" onClick={addToFavoritesHandler}>Add to Favorites</button>

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