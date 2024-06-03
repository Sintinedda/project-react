import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import "../css/generic.css";
import "../css/card.css";

import Coder from "../img/blog/coder.jpg";
import Croissance from "../img/blog/croissance.jpg";
import Google from "../img/blog/google.jpg";
import Screens from "../img/blog/screens.jpg";
import Seo from "../img/blog/seo.jpg";
import Technos from "../img/blog/technos.png";

const Blog = () => {
    return (
        <div className="generic">
            <div className="generic-banner"></div>
            <div className="generic-h1">Blog</div>
            <div className="generic-text">Retrouvez ici quelques articles sur le développement web.</div>
            <div className="generic-bar"></div>
            <div className="blog row">
                <div className="col-md-6 col-lg-4">
                    <Card style={{ width: '93%' }} className="card" id="coder">
                        <Card.Img variant="top" src={Coder} className="card-img"/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-blog-title">Coder son site en HTML/CSS</Card.Title>
                            <Card.Text className="card-blog-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary" className="card-blog-button">Lire la suite</Button>
                            <Card.Footer className="card-blog-footer">Publié le 22 août 2022</Card.Footer>
                        </Card.Body>
                    </Card> 
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card style={{ width: '93%' }} className="card" id="croissance">
                        <Card.Img variant="top" src={Croissance} className="card-img"/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-blog-title">Vendre ses produits sur le web</Card.Title>
                            <Card.Text className="card-blog-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary" className="card-blog-button">Lire la suite</Button>
                            <Card.Footer className="card-blog-footer">Publié le 20 août 2022</Card.Footer>
                        </Card.Body>
                    </Card> 
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card style={{ width: '93%' }} className="card" id="google">
                        <Card.Img variant="top" src={Google} className="card-img"/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-blog-title">Se positionner sur Google</Card.Title>
                            <Card.Text className="card-blog-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary" className="card-blog-button">Lire la suite</Button>
                            <Card.Footer className="card-blog-footer">Publié le 1 août 2022</Card.Footer>
                        </Card.Body>
                    </Card> 
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card style={{ width: '93%' }} className="card">
                        <Card.Img variant="top" src={Screens} className="card-img"/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-blog-title">Coder en responsive design</Card.Title>
                            <Card.Text className="card-blog-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary" className="card-blog-button">Lire la suite</Button>
                            <Card.Footer className="card-blog-footer">Publié le 31 juillet 2022</Card.Footer>
                        </Card.Body>
                    </Card> 
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card style={{ width: '93%' }} className="card">
                        <Card.Img variant="top" src={Seo} className="card-img"/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-blog-title">Techniques de référencement</Card.Title>
                            <Card.Text className="card-blog-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary" className="card-blog-button">Lire la suite</Button>
                            <Card.Footer className="card-blog-footer">Publié le 30 juillet 2022</Card.Footer>
                        </Card.Body>
                    </Card> 
                </div>
                <div className="col-md-6 col-lg-4">
                    <Card style={{ width: '93%' }} className="card">
                        <Card.Img variant="top" src={Technos} className="card-img"/>
                        <Card.Body className="card-body">
                            <Card.Title className="card-blog-title">Apprendre à coder</Card.Title>
                            <Card.Text className="card-blog-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                            <Button variant="primary" className="card-blog-button">Lire la suite</Button>
                            <Card.Footer className="card-blog-footer">Publié le 12 juillet 2022</Card.Footer>
                        </Card.Body>
                    </Card> 
                </div>
            </div>
        </div>
    )
}

export default Blog;