import React from 'react';

const PokemonIndex = (props) => {
  const pokemonLi =
    (props.pokemon.map( (pokemon, index) => (
        <li key ={pokemon.name + index}>
          <img src={pokemon.image_url}></img>
          <p>{pokemon.name}</p>
        </li>
      )
    ));
    
  return (
    <ul>
      {pokemonLi}
    </ul>
  );
};

export default PokemonIndex;
