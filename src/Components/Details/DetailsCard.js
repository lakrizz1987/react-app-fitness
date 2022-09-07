import ReactPlayer from 'react-player';
import "./DetailsCard.css";

const DetailsCard = ({training}) => {
    window.scrollTo(0, 0);
    
    return (
        <>
            <div className="body-container animation-details-card">
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

export default DetailsCard;