import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "../css/home.css"
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import About from "../img/john-doe-about.jpg";

const Home = () => {
    return(
        <main className="home">
            <div className="home-top">
                <div className="home-top-mask">
                    <h1 className="home-top-h1">Bonjour, je suis John Doe</h1>
                    <h2 className="home-top-h2">Développeur web full stack</h2>
                    <button className="home-top-button">
                        <a className="home-top-link" href="#apropos">En savoir plus</a>
                    </button>
                </div>
            </div>
                <div className="home-apropos row justify-content-center" id="apropos">
                    <div className="home-apropos-container1 col-md-6">
                        <h3 className="home-apropos-h3">À propos</h3>
                        <div className="home-apropos-bar"></div>
                        <p className="home-apropos-texte">
                            Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'
                            <strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du 
                            <strong> développement web</strong>.
                        </p>
                        <p className="home-apropos-texte">
                            Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de 
                            <strong> développeur web full stack</strong>.
                        </p>
                        <p className="home-apropos-texte">
                            J'accorde une attention particulière à la qualité du code que j'écris et je resecte les bonnes pratiques du web.
                        </p>
                    </div>
                    <div className="home-apropos-container2 col-md-6">
                        <img src={About} alt="Personne au travail" className="JohnDoeAbout" />
                        <h4 className="home-apropos-h4">Mes compétences</h4>
                        <p className="home-apropos-comp">html5 90%</p>
                        <MDBProgress>
                            <MDBProgressBar bgColor="danger" width="90" valuemin={0} valuemax={100}/>
                        </MDBProgress>
                        <p className="home-apropos-comp">css3 80%</p>
                        <MDBProgress>
                            <MDBProgressBar bgColor="info" width="80" valuemin={0} valuemax={100}/>
                        </MDBProgress>
                        <p className="home-apropos-comp">javascript 70%</p>
                        <MDBProgress>
                            <MDBProgressBar bgColor="warning" width="70" valuemin={0} valuemax={100}/>
                        </MDBProgress>
                        <p className="home-apropos-comp">php 60%</p>
                        <MDBProgress>
                            <MDBProgressBar bgColor="success" width="60" valuemin={0} valuemax={100}/>
                        </MDBProgress>
                        <p className="home-apropos-comp">react 50%</p>
                        <MDBProgress>
                            <MDBProgressBar width="50" valuemin={0} valuemax={100}/>
                        </MDBProgress>
                    </div> 
                </div>
        </main>
    );
};

export default Home;