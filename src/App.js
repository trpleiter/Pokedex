import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';

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

    return (

    <div className="poke-container">

        {console.log (pokeData)}
        {partOfPokedex.map((data) => {
        return (
            <article className="pokeDetail">
                <p>{data.name}</p>
                <img className="pokeimg" src={data.image} alt="recipe"/>
            </article>

        )

        })}
    </div>
)
    ;
}

    export default App;
