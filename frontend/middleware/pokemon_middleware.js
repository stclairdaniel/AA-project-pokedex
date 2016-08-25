import { requestAllPokemon, POKEMON_CONSTANTS, receiveAllPokemon } from '../actions/pokemon_actions';
import { fetchAllPokemon } from '../util/api_util';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case POKEMON_CONSTANTS.REQUEST_ALL_POKEMON:
      fetchAllPokemon((data) => {
        dispatch(receiveAllPokemon(data));
      });
      break;
    default:
  }
  next(action);
};

export default PokemonMiddleware;
