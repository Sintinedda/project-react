import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from'axios';
import '../css/github.css';

export default function GitHub() {
    const [userData, setUserData] = useState(null);

        axios.get(`https://api.github.com/users/Sintinedda`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Données non chargées', error);
                setUserData(null);
            });

    return (
        <div>
            {userData && (
                <div className="github">
                    <h5 className="github-h5">Github user</h5>
                    <p className="github-name">{userData.name}</p>
                    <img src={userData.avatar_url} alt="Profil GitHub de Jérémy Aboudan" className="github-img"/>
                    <p>{userData.bio}</p>
                    <p>Abonnés : {userData.followers}</p>
                    <p>Abonnements : {userData.following}</p>
                    <p>Crée le : {userData.created_at}</p>
                    <p>Modifié le : {userData.updated_at}</p>
                    <p>URL repositories : <Link to={userData.repos_url}>{userData.repos_url}</Link></p>
                </div>    
            )}
        </div>
    )
}
