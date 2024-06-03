import React from "react";
import { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../css/generic.css"
import "../css/form.css"

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
    const [inputs, setInputs] = useState({name:"", email:"", phone:"", subject:"", message:""});

    const handleChange = (event) => {
        const { name, value} = event.target;
        setInputs ((prevInputs) => ({...prevInputs, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyDEnRQRCuvqApZAYMaFZT_cI9nq0do1RtQ",
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
                            <form onSubmit={handleSubmit}>
                                    <input className="contact-item" type="text" id="name" name="name" value={inputs.name} onChange={handleChange} placeholder="Votre nom" required/>
                                    <input className="contact-item" type="text" id="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Votre adresse email" required/>
                                    <input className="contact-item" type="number" id="phone" name="phone" value={inputs.phone} onChange={handleChange} placeholder="Votre numéro de téléphone" required/>
                                    <input className="contact-item" type="text" id="subject" name="subject" value={inputs.subject} onChange={handleChange} placeholder="Sujet" required/>
                                    <textarea className="contact-item-message" type="text" id="message" name="message" value={inputs.message} onChange={handleChange} placeholder="Votre message" required/>
                                    <button className="contact-button" type="submit">Envoyer</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h2 className="contact-h2">Mes coordonées</h2>
                            <div className="contact-bar"></div>
                            <address><i class="material-icons">&#xe55f;</i>40 Rue Laure Diebold, 69009 Lyon, France</address>
                            <p className="contact-telephone">06 20 30 40 50</p>
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
