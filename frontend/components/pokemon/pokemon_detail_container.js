import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => ({
  details: state
});

export const PokemonDetailContainer = connect(mapStateToProps)(PokemonDetail);
