import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { pokemonReducer } from '../reducers/pokemon_reducer';
import PokemonMiddleware from '../middleware/pokemon_middleware';

export const configureStore = () => {
  return createStore(pokemonReducer, applyMiddleware(PokemonMiddleware));
};
