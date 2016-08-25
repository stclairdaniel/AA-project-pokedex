import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => ({
  pokemon: state
});

export const PokemonIndexContainer = connect(mapStateToProps)(PokemonIndex);
