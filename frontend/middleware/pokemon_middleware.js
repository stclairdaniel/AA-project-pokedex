import { receivePokemon, POKEMON_CONSTANTS, receiveAllPokemon } from '../actions/pokemon_actions';
import { fetchAllPokemon, fetchPokemon } from '../util/api_util';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case POKEMON_CONSTANTS.REQUEST_ALL_POKEMON:
      fetchAllPokemon((data) => {
        dispatch(receiveAllPokemon(data));
      });
      break;
    case POKEMON_CONSTANTS.REQUEST_POKEMON:
      fetchPokemon((data) => {
        dispatch(receivePokemon(data));
      }, action.pokemonID);
      break;
    default:
  }
  next(action);
};

export default PokemonMiddleware;
