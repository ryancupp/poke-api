import React, { useState } from 'react';
import './App.css';

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

  return (
    <div className="App">
      <button onClick={fetchPoke}>fetch pokemon</button>
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
