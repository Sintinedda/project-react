import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/generic.css";
import "../css/service.css";

const Service = () => {
    return (
        <div className="generic">
            <div className="generic-banner"></div>
            <h1 className="generic-h1">Mon offre de services</h1>
            <p className="generic-text">Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className="generic-bar"></div>
            <div className="row justify-content-center">
                <div className="service col-md-3">
                    <FontAwesomeIcon icon="fa-solid fa-desktop" className="service-icon"/>
                    <h2 className="service-h2">ux design</h2>
                    <p className="service-text">L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                </div>
                <div className="service col-md-3">
                    <FontAwesomeIcon icon="fa-solid fa-file-code" className="service-icon"/>
                    <h2 className="service-h2">développement web</h2>
                    <p className="service-text">Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <span className="service-underline">html</span>, <span className="service-underline">css</span>, Javascript et <span className="service-underline">php</span>.</p>
                </div>
                <div className="service col-md-3">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-dollar" className="service-icon"/>
                    <h2 className="service-h2">référencement</h2>
                    <p className="service-text">Le <strong>référencement naturel d'un site</strong>, aussi appelé <span className="service-underline">seo</span>, consiste à mettre des techniques en oeuvre pour <span className="service-italic">améliorer sa position</span> dans les résultats des moteurs de recherche.</p>
                </div>
            </div>
        </div>
    )
}

export default Service;