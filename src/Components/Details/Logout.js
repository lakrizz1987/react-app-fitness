import "./Logout.css"
import ReactPlayer from 'react-player'

function Logout() {
    return (
        <>
            <div className="body-container">
                <section className="details-wraper">
                    <div className="tittle-container"><h1>Bench press</h1>
                    <button className="btn-fav">Add to Favorites</button>
                    
                    </div>
                    <img className="img-details" src={require('../../images/ex/bench1.jpg')} alt='some-pic'></img>
                    <p className="p-details">
                        The bench press, or chest press, is a weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. Although the bench press is a full-body exercise, the muscles primarily used are the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles. A barbell is generally used to hold the weight, but a pair of dumbbells can also be used.[1]

                        The barbell bench press is one of three lifts in the sport of powerlifting alongside the deadlift and squat, and is the only lift in the sport of Paralympic powerlifting. It is also used extensively in weight training, bodybuilding, and other types of training to develop the chest muscles. Bench press strength is important in combat sports as it tightly correlates to punching power. Bench press can also help contact athletes increase their performance because it can increase effective mass and functional hypertrophy of the upper body.
                    </p>
                    <div className='player-container'>
                    <ReactPlayer
                    className='react-player'
                    url='https://youtu.be/gRVjAtPip0Y'
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

export default Logout;