import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = (props) => {
  const pokemonLi =
    (props.pokemon.map( (pokemon, index) => (
        <PokemonIndexItem key={pokemon.name + index} pokemon={pokemon} />
      )
    ));

  return (
    <ul>
      {pokemonLi}
      {props.children}
    </ul>
  );
};

export default PokemonIndex;
