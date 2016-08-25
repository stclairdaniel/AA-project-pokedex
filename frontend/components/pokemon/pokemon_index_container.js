import { connect } from 'react-redux';
import { receiveAllPokemon, requestAllPokemon} from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => ({
  pokemon: state
});

const mapDispatchToProps = (dispatch) => ({
  receiveAllPokemon: (data) => dispatch(receiveAllPokemon(data)),
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export const PokemonIndexContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
