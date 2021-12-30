import React from 'react';
import './style/Pokecard.css';


const Pokecard = ({ name, img, type, exp }) => {
    return (
        <div className="Pokecard">
            <h2>{ name }</h2>
            <img className="Pokecard-img" src={ img } alt="" />
            <p>Type: { type }</p>
            <p>EXP: { exp }</p>
        </div>
    );
}


export default Pokecard;