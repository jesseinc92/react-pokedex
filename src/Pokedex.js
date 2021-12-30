import React from 'react';
import Pokecard from './Pokecard';
import pokemon from './pokemon';
import './style/Pokedex.css';


const Pokedex = () => {
    return (
        <main className="Pokedex">
            <h1>Pokedex</h1>

            <div className="Pokedex-card-container">
                {pokemon.map(poke => (
                <Pokecard
                    key={ poke.id }
                    name={ poke.name }
                    img={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png` }
                    type={ poke.type }
                    exp={ poke.base_experience }
                />
                ))}
            </div>
        </main>
    );
};


export default Pokedex;