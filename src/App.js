import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => {
      return response.json();
  }).then(response => {
      console.log(response);
      setPokemon(response.results);
  }).catch(err=>{
      console.log(err);
  });
  }

  const axiPoke = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response => {
      console.log(response.data.results);
      setPokemon(response.data.results);
    })
    .catch( (err) => console.log(err));
  }

  return (
    <div className="App">
      <button onClick={fetchPoke}>fetch pokemon</button>
      <button onClick={axiPoke}>axios pokemon</button>
      {
      pokemon.map((poke, idx) =>{
        return (
          <p key={idx}>{poke.name}</p>
        )
      })}
  
    </div>
  );
}

export default App;
