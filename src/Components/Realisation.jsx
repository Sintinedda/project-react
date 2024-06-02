import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "../css/generic.css";
import "../css/realisation.css"

import FreshFood from "../img/fresh-food.jpg";
import Akira from "../img/restaurant-japonais.jpg";
import EspaceZen from "../img/espace-bien-etre.jpg";

const Realisation = () => {
    return (
        <div className="generic">
            <div className="generic-banner"></div>
            <h1 className="generic-h1">Portfolio</h1>
            <p className="generic-text">Voici quelques-unes de mes réalisations.</p>
            <div className="generic-bar"></div>
            <div className="realisation row">
                <div className="col-md-6 col-lg-4">
                <Card style={{ width: '93%' }} className="card" id="fresh-food">
                    <Card.Img variant="top" src={FreshFood} className="card-img"/>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Fresh food</Card.Title>
                        <Card.Text className="card-txt">Réalisation d'un site avec commande en ligne.</Card.Text>
                        <Button variant="primary" className="card-button">Voir</Button>
                        <Card.Footer className="card-footer">Site réalisé avec PHP et MySQL</Card.Footer>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-6 col-lg-4">
                <Card style={{ width: '93%' }} className="card" id="akira">
                    <Card.Img variant="top" src={Akira} className="card-img"/>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Restaurant Akira</Card.Title>
                        <Card.Text className="card-text">Réalisation d'un site vitrine.</Card.Text>
                        <Button variant="primary" className="card-button">Voir</Button>
                        <Card.Footer className="card-footer">Site réalisé avec WordPress</Card.Footer>
                    </Card.Body>
                </Card>
                </div>
                <div className="col-md-6 col-lg-4">
                <Card style={{ width: '93%' }} className="card" id="espace-zen">
                    <Card.Img variant="top" src={EspaceZen} className="card-img"/>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Espace bien-être</Card.Title>
                        <Card.Text className="card-text">Réalisation d'un site vitrine pour un practicien de bien-être.</Card.Text>
                        <Button variant="primary" className="card-button">Voir</Button>
                        <Card.Footer className="card-footer">Site réalisé en HTML/CSS</Card.Footer>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Realisation;