import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/generic.css";
import "../css/accordion.css"

const Notice = () => {
    return (
        <div className="notice">
            <h1 className="generic-h1">Mentions légales</h1>
            <div className="generic-bar"></div>
            <Accordion defaultActiveKey="0" className="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header">Éditeur du site</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="accordion-title">Éditeur du site</h3>
                        <address className="accordion-item0-address">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" className="accordion-icon"/>
                            40 rue Laure Diebold <br />
                            69009 Lyon, France
                        </address>
                        <Link to="tel:0620304050" className="accordion-item0-phone">
                            <FontAwesomeIcon icon="fa-solid fa-mobile-screen" className="accordion-icon"/>
                            06 20 30 40 50
                        </Link><br />
                        <Link to="mailto:john.doe@gmail.com" className="accordion-item0-mail">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className="accordion-icon"/>
                            john.doe@gmail.com
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hébergeur</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="accordion-title">Always Data</h3>
                        <address>91 rue du Faubourg Saint Honoré <br />
                        75008 Paris</address>
                        <Link to="https://www.alwaysdata.com/fr/" className="accordion-item1-web">
                            <FontAwesomeIcon icon="fa-solid fa-globe" className="accordion-icon"/>
                            www.alwaysdata.com
                        </Link>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Crédits</Accordion.Header>
                    <Accordion.Body>
                        <h3 className="accordion-title">Crédits</h3>
                        Site développé par John Doe, étudiant du CEF. <br />
                        Les images libres de droit sont issues du site <Link to="https://pixabay.com/fr/" className="accordion-item2-web">Pixabay</Link>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Notice;