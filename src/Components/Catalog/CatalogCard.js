import "./CatalogCard.css";
import { Link } from "react-router-dom";

function CatalogCard({ ex }) {

    return (
        <div className="card-catalog animation-catalog">
            <div id="card-content-catalog">
                <div id="card-title-catalog">
                    <h2>{ex.name}</h2>
                    <div className="underline-title-catalog"></div>
                </div>
                <section className="imgContainer">
                    <img className="image-catalog-card" src={ex.img} alt="card-img"></img>
                </section>
            </div>
            <Link className="btn-catalog" to={`/details/${ex._id}`}>DETAILS</Link>
        </div>
    );
    
};

export default CatalogCard;