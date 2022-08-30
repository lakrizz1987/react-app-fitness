import "./Details.css"
import ReactPlayer from 'react-player'

export default function Details() {

    return (
        <>
            <article className="ex-container">
                <article className="ex-img-container">
                    <img className="ex-img" src={require('../../images/ex/bench1.jpg')} alt="Movie Poster" />
                </article>

                <section className="ex-text-container">
                    <h2 className="ex-title">
                        Title here
                    </h2>

                    <h3 className="ex-category">
                        Category
                    </h3>

                    <article className="ex-description-container">
                        <p className="ex-description" >
                            sadasdfsssssssssssssssssshsdkjfhaklsjdahfkljsdhgflkasdflksdfhli
                        </p>
                    </article>
                </section>

            </article>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width='100%'
                    height='100%'
                    controls={true}
                />
            </div>





        </>
    );
};