import { POKEMON_CONSTANTS } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const pokemonReducer = (oldState = [], action) => {
  switch (action.type) {
    case POKEMON_CONSTANTS.RECEIVE_ALL_POKEMON:
      return [...oldState, ...action.data];
    case POKEMON_CONSTANTS.RECEIVE_POKEMON:
      return [action.data];
    default:
      return oldState;
  }
};
