import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { HashLink as Link } from "react-router-hash-link";
import "../css/footer.css"



function Footer() {

    const showButton = () => document.querySelector(".scroll-to-top").classList.add("visible");
    const hideButton = () => document.querySelector(".scroll-to-top").classList.remove("visible");
    document.addEventListener("scroll", () => window.scrollY < 100 ? hideButton() : showButton());

    const scrollToTop = () => {
        window.addEventListener(
            "load",
          window.scrollTo(0, 0)
        )    
    }
    

    return (
        <div className="footer row justify-content-center">
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">John Doe</p>
                <p className="footer-text">40 Rue Laure Diebold </p>
                <p className="footer-text">69009 Lyon, France</p>
                <p className="footer-text">Télephone : 06 20 30 40 50</p>
                <div className="footer-logos">
                    
                </div>
            </div>
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">Liens utiles</p>
                <p className="footer-text"><Link to="/" className="footer-link" reloadDocument>Accueil</Link></p>
                <p className="footer-text"><Link to="/#apropos" className="footer-link">À propos</Link></p>
                <p className="footer-text"><Link to="/services" className="footer-link"reloadDocument>Services</Link></p>
                <p className="footer-text"><Link to="/contact" className="footer-link" reloadDocument>Me contacter</Link></p>
                <p className="footer-text"><Link to="/notice" className="footer-link" reloadDocument>Mentions légales</Link></p>
            </div>
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">Mes dernières réalisations</p>
                <p className="footer-text"><Link to="/realisations#fresh-food" className="footer-link">Fresh Food</Link></p>
                <p className="footer-text"><Link to="/realisations#akira" className="footer-link">Restaurant Akira</Link></p>
                <p className="footer-text"><Link to="/realisations#espace-zen" className="footer-link">Espace bien-être</Link></p>
            </div>
            <div className="footer-row col-md-6 col-lg-3">
                <p className="footer-title">Mes derniers articles</p>
                <p className="footer-text"><Link to="/blog#coder" className="footer-link">Coder son site en HTML/CSS</Link></p>
                <p className="footer-text"><Link to="/blog#croissance" className="footer-link">Vendre ses produits sur le web</Link></p>
                <p className="footer-text"><Link to="/blog#google" className="footer-link">Se positionner sur Google</Link></p>
            </div>
            <div className="footer-band">Designed by John Doe</div>
            <div className="footer-return"><p className="scroll-to-top" onClick={scrollToTop}>Retourner en haut de la page</p></div>
        </div>
    );
};

export default Footer;