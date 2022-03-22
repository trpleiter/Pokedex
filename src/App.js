import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import PokeDetail from "./component/PokeDetail";

function App() {
    const [pokeData, setPokeData] = useState('');

    useEffect(() => {
        async function fetchPokeData() {
            try {
                const resultPokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=0&offset=20`)
                setPokeData(resultPokeData.data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchPokeData();

    }, []);

    let partOfPokedex = pokeData.results;
    let pokemonName = "";

    return (

    <div className="poke-container">

        {console.log (pokeData)}
        {partOfPokedex.map((data) => {
            pokemonName = data.name
        return (
            <PokeDetail
                {pokemonName}
            />

        )

        })}


    </div>
)
    ;
}

    export default App;
