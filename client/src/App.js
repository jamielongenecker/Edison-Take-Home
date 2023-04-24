import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  // declare state variables
  const [pokemons, setPokemons] = useState([]);
  const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
  const [loadPoke, setLoadPoke] = useState(baseUrl);

  // api call to get all the pokemon
  const getAllPokemon = async() => {
    const response = await fetch(loadPoke);
    const data = await response.json();
    setLoadPoke(data.next);

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        const data = await res.json();
        setPokemons((currentList) => [...currentList, data]);
      });
    }
      createPokemonObject(data.results);
      await console.log('pokemons:', pokemons);
    }
  
  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <div className="app-container">
        <h1>Pokedex</h1>         
        {pokemons.map((pokemon, index) => 
          <Card 
            key={index}
            cardName={pokemon.name}
            id={pokemon.id}
            type={pokemon.types[0].type.name}
            image={pokemon.sprites.front_default}
            height={pokemon.height}
            weight={pokemon.weight}
            />)}
        <button className="load-more" 
          onClick={() => getAllPokemon()}>
          More Pokemons
        </button>

    </div>
  );
}

export default App;
