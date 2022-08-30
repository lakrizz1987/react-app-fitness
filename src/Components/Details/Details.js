import "./Details.css"

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

                
                    <p className="ex-description" >
                        sadasdfasdfjkasdfjhsdgafgsadkjfklsdgflksaghdflkjsdhfkjhsdkjfhaklsjdahfkljsdhgflkasdflksdfhli
                    </p>
                </section>
            </article>

            <section className="mv-dtls-video">

            </section>
        </>
    );
};