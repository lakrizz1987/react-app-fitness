import { Link } from "react-router-dom";
import "./Catalog.css"



export default function Catalog() {
   
    return (
        <section className="formContainer-catalog">
            <div id="card-catalog">
                <div id="card-content-catalog">
                    <div id="card-title-catalog">
                        <h2>Bench Press</h2>
                        <div className="underline-title-catalog"></div>
                    </div>
                    <section className="imgContainer">
                        <img className="image-catalog-card" src={require('../../images/sit.jpg')} alt="a"></img>
                    </section>
                </div>
                <Link className="btn-catalog" to={'/details'}>DETAILS</Link>
            </div>

            <div id="card-catalog">
                <div id="card-content-catalog">
                    <div id="card-title-catalog">
                        <h2>Bench Press</h2>
                        <div className="underline-title-catalog"></div>
                    </div>
                    <section className="imgContainer">
                        <img className="image-catalog-card" src={require('../../images/ex/bench1.jpg')} alt="a"></img>
                    </section>
                </div>
                <Link className="btn-catalog" to={'/details'}>DETAILS</Link>
            </div>

            <div id="card-catalog">
                <div id="card-content-catalog">
                    <div id="card-title-catalog">
                        <h2>Bench Press</h2>
                        <div className="underline-title-catalog"></div>
                    </div>
                    <section className="imgContainer">
                        <img className="image-catalog-card" src={require('../../images/ex/bench1.jpg')} alt="a"></img>
                    </section>
                </div>
                <Link className="btn-catalog" to={'/details'}>DETAILS</Link>
            </div>

            <div id="card-catalog">
                <div id="card-content-catalog">
                    <div id="card-title-catalog">
                        <h2>Bench Press</h2>
                        <div className="underline-title-catalog"></div>
                    </div>
                    <section className="imgContainer">
                        <img className="image-catalog-card" src={require('../../images/ex/bench1.jpg')} alt="a"></img>
                    </section>
                </div>
                <Link className="btn-catalog" to={'/details'}>DETAILS</Link>
            </div>

            <div id="card-catalog">
                <div id="card-content-catalog">
                    <div id="card-title-catalog">
                        <h2>Bench Press</h2>
                        <div className="underline-title-catalog"></div>
                    </div>
                    <section className="imgContainer">
                        <img className="image-catalog-card" src={require('../../images/ex/bench1.jpg')} alt="a"></img>
                    </section>
                </div>
                <Link className="btn-catalog" to={'/details'}>DETAILS</Link>
            </div>

            <div id="card-catalog">
                <div id="card-content-catalog">
                    <div id="card-title-catalog">
                        <h2>Bench Press</h2>
                        <div className="underline-title-catalog"></div>
                    </div>
                    <section className="imgContainer">
                        <img className="image-catalog-card" src={require('../../images/ex/bench1.jpg')} alt="a"></img>
                    </section>
                </div>
                <Link className="btn-catalog" to={'/details'}>DETAILS</Link>
            </div>
        </section>
    );
};