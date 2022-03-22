import React, {useEffect, useState} from "react";
import axios from "axios";


function PokeDetail( {pokemonName} ) {
    const [pokeData, setPokeData] = useState('');

    useEffect(() => {
        async function fetchPokeData() {
            try {
                const resultPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                setPokeData(resultPokeData.data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchPokeData();

    }, []);

    console.log(pokeData);

    return (

        //naam => pokeData.name
        //img => pokeData.sprites.front_default
        // abilities => pokeData.abilities.map.ability.name
        // weight => pokeData.weight
        //amount of moves => pokeData.moves

        <div className="poke-container">
                    <article className="pokeDetail" key={pokeData.id}>
                        <p>{pokemonName}</p>
                        <img className="pokeimg" src={pokeData.sprites.front_default} alt="pokemon"/>
                        <p>Weight: {pokeData.weight}</p>
                        <p>Moves: {pokeData.moves.length}</p>
                    </article>
        </div>
    )
}

export default PokeDetail;