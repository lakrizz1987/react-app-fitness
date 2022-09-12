import { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { addFavoriteService, delFavoriteService, getFavoritesIds } from '../../services/api';
import "./DetailsCard.css";

const DetailsCard = ({ training }) => {

    window.scrollTo(0, 0);

    const navigate = useNavigate();
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
    }, [user._id, id])

    function addToFavoritesHandler(e) {

        addFavoriteService(token, id);
        setIsAdd(true);

    };

    function removeFromFavoritesHandler(e) {
        const result = window.confirm('Are you sure whant to remove the exercise?')
        if (result) {
            fetch(`http://localhost:3030/data/likes`)
                .then(res => res.json())
                .then(data => {
                    const searchedObj = data.filter(x => x.favorites === id)[0];
                    delFavoriteService(user.accessToken, searchedObj._id);
                });

            setIsAdd(false);
            navigate('/my-trainings');
        }


        //window.location.reload(true);
    };

    const buttons = (
        isAdd ? <button className="btn-fav" style={{ 'color': 'red' }} onClick={removeFromFavoritesHandler}>Remove from MyTrainings</button>
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