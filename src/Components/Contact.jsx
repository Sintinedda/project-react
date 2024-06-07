import React from "react";
import { useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/generic.css";
import "../css/contact.css";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 45.778628,
    lng: 4.798974,
};

export default function Contact() {
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm( process.env.REACT_APP_MAIL_SERVICE, process.env.REACT_APP_MAIL_TEMPLATE, form.current, {
                publicKey: process.env.REACT_APP_MAIL_KEY 
            })
            .then(
                () => {
                    alert("Email envoyé avec succés");
                },
                () => {
                    alert("Quelque chose ne s'est pas passé comme prévu")
                },
            ); 
            e.target.reset()       
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Erreur de chargement de la carte</div>
    }

    if (!isLoaded) {
        return <div>Carte chargé</div>
    }

    return (
        <div className="contact">
            <div className="contact-mask">
                <div className="contact-mask-white">
                    <h1 className="generic-h1">me contacter</h1>
                    <p className="generic-text">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    <div className="generic-bar"></div>
                    <div className="contact-container row">
                        <div className="col-md-6">
                            <h2 className="contact-h2">Formulaire de contact</h2>
                            <div className="contact-bar"></div>
                            <form ref={form} onSubmit={sendEmail}>
                                    <input className="contact-item" type="text"  name="name" placeholder="Votre nom" required/>
                                    <input className="contact-item" type="text"  name="email" placeholder="Votre adresse email" required/>
                                    <input className="contact-item" type="number"  name="phone" placeholder="Votre numéro de téléphone" required/>
                                    <input className="contact-item" type="text"  name="subject" placeholder="Sujet" required/>
                                    <textarea className="contact-item-message" type="text"  name="message" placeholder="Votre message" required/>
                                    <button className="contact-button" type="submit">Envoyer</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h2 className="contact-h2">Mes coordonées</h2>
                            <div className="contact-bar"></div>
                            <address>
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" className="contact-icon"/>
                                40 Rue Laure Diebold, 69009 Lyon, France
                            </address>
                            <p className="contact-telephone">
                                <FontAwesomeIcon icon="fa-solid fa-mobile-screen" className="contact-icon"/>
                                06 20 30 40 50
                            </p>
                            <div className="contact-maps">
                                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18} >
                                    <MarkerF position={center} />
                                </GoogleMap>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
