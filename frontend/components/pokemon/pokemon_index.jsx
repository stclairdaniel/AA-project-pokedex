import React from 'react';

class PokemonIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  pokemonLi() {
    return (this.props.pokemon.map( (pokemon, index) => (
        <li key ={pokemon.name + index}>
          <p> {pokemon.name} </p>
          <img src={pokemon.image_url}></img>
        </li>
      )
    ));
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul>
        {this.pokemonLi()}
      </ul>
    );
  }
}

export default PokemonIndex;
