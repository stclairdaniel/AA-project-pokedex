import React from 'react';
import { withRouter } from 'react-router';

const PokemonIndexItem = ({pokemon, router}) => (
  <li className="pokemon-index-item" onClick={_handleClick.bind(null, router, `pokemon/${pokemon.id}`)}>
    <img src={pokemon.image_url}></img>
    <p>{pokemon.name}</p>
  </li>
);

const _handleClick = (router, url) => {
  router.push(url);
};

export default withRouter(PokemonIndexItem);
