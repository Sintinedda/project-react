import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/nav.css";

function Nav() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>  
            <div className="navbar-logo">John Doe</div>
            <ul className="navbar-links">
                <li className="navbar-item"><Link to="/" className="navbar-link">Accueil</Link></li>
                <li className="navbar-item"><Link to="/services" className="navbar-link">Services</Link></li>
                <li className="navbar-item"><Link to="/realisations" className="navbar-link">Réalisations</Link></li>
                <li className="navbar-item"><Link to="/blog" className="navbar-link">Blog</Link></li>
                <li className="navbar-item"><Link to="/contact" className="navbar-link"> Me contacter</Link></li>
            </ul>
            <button className="navbar-burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    )
}

export default Nav;