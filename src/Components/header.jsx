import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav>
                <ul>
                    <li>John Doe</li>
                    <li>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/réalisations">Réalisations</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/mecontacter">Me contacter</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;