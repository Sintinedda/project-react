import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/service.css";
import Computer from "../img/logo-computer.jpg";
import File from "../img/logo-file.png";
import Search from "../img/logo-search.png";

const Service = () => {
    return (
        <div className="service">
            <div className="service-banner"></div>
            <h1 className="service-h1">Mon offre de services</h1>
            <p className="service-text">Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className="service-bar"></div>
            <div className="row justify-content-center">
                <div className="service-div col-md-3">
                    <img src={Computer} alt="Logo d'ordinateur" className="service-div-logo" />
                    <h2 className="service-div-h2">ux design</h2>
                    <p className="service-div-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                </div>
                <div className="service-div col-md-3">
                    <img src={File} alt="Logo de fichier" className="service-div-logo" />
                    <h2 className="service-div-h2">développement web</h2>
                    <p className="service-div-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <span className="service-div-underline">html</span>, <span className="service-div-underline">css</span>, Javascript et <span className="service-div-underline">php</span>.</p>
                </div>
                <div className="service-div col-md-3">
                    <img src={Search} alt="Logo de loupe" className="service-div-logo" />
                    <h2 className="service-div-h2">référencement</h2>
                    <p className="service-div-text">Le <strong>référencement naturel d'un site</strong>, aussi appelé <span className="service-div-underline">seo</span>, consiste à mettre des techniques en oeuvre pour <span className="service-div-italic">améliorer sa position</span> dans les résultats des moteurs de recherche.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;