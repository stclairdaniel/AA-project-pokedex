import React from 'react';
import toySelector from '../../util/toy_selector';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="pokemon-detail">
        <ul>
          <img src={this.props.details[0].image_url} alt=""/>
          <li><h2>{this.props.details[0].name}</h2></li>
          <li>Type: {this.props.details[0].poke_type}</li>
          <li>Attack: {this.props.details[0].attack}</li>
          <li>Defense: {this.props.details[0].defense}</li>
          <li>Moves: {this.props.details[0].moves.join(" ")}</li>
          <section className="toys">
            <h3>Toys</h3>
            <ul className="toy-list">
              {toySelector(this.props.state)}
            </ul>
          </section>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
