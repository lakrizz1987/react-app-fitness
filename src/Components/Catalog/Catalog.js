import "./Catalog.css";
import "../Loader/Loader.css";

import { Link, Outlet } from "react-router-dom";

export default function Catalog() {

    return (
        <>
            <section className="formContainer-catalog">
                <nav className="nav-links-catalog">
                    <Link className="links-catalog" to='all'>All</Link>
                    <Link className="links-catalog" to='chest'>Chests</Link>
                    <Link className="links-catalog" to='back'>Back</Link>
                    <Link className="links-catalog" to='arms'>Arms</Link>
                    <Link className="links-catalog" to='shoulders'>Shoulders</Link>
                    <Link className="links-catalog" to='legs'>Legs</Link>
                </nav>
                <Outlet />
            </section>

        </>
    );
};