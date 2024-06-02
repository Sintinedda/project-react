import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
import "../css/footer.css"
import Github from "../img/logo-github.png";
import X from "../img/logo-x.png";
import Linkedin from "../img/logo-linkedin.png";

function Footer() {
    return (
        <div className="footer row justify-content-center">
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">John Doe</p>
                <p className="footer-text">40 Rue Laure Diebold </p>
                <p className="footer-text">69009 Lyon, France</p>
                <p className="footer-text">Télephone : 06 20 30 40 50</p>
                <div className="footer-logos">
                    <img src={Github} alt="Logo Github" className="footer-logo"/>
                    <img src={X} alt="Logo X" className="footer-logo"/>
                    <img src={Linkedin} alt="Logo Linkedin" className="footer-logo"/>
                </div>
            </div>
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">Liens utiles</p>
                <p className="footer-text"><Link to="/" className="footer-link">Accueil</Link></p>
                <p className="footer-text"><Link to="#apropos" className="footer-link">À propos</Link></p>
                <p className="footer-text"><Link to="/services" className="footer-link">Services</Link></p>
                <p className="footer-text"><Link to="/contact" className="footer-link">Me contacter</Link></p>
                <p className="footer-text"><Link to="/mentions" className="footer-link">Mentions légales</Link></p>
            </div>
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">Mes dernières réalisations</p>
                <p className="footer-text"><Link to="/realisations" className="footer-link">Fresh Food</Link></p>
                <p className="footer-text"><Link to="/realisation" className="footer-link">Restaurant Akira</Link></p>
                <p className="footer-text"><Link to="/realisation" className="footer-link">Espace bien-être</Link></p>
            </div>
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">Mes derniers articles</p>
                <p className="footer-text"><Link to="/blog" className="footer-link">Coder son site en HTML/CSS</Link></p>
                <p className="footer-text"><Link to="/blog" className="footer-link">Vendre ses produits sur le web</Link></p>
                <p className="footer-text"><Link to="/blog" className="footer-link">Se positionner sur Google</Link></p>
            </div>
            <div className="footer-band">Designed by John Doe</div>
        </div>
    );
};

export default Footer;