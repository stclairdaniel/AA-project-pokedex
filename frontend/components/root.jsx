import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon, requestPokemon } from '../actions/pokemon_actions';
import React from 'react';
import { Provider } from 'react-redux';
import { PokemonIndexContainer} from './pokemon/pokemon_index_container';
import { PokemonDetailContainer} from './pokemon/pokemon_detail_container';

const onEntrance = (store) => () => store.dispatch(requestAllPokemon());
const onDetailEntrance = (store) => (nextState) =>  {
  store.dispatch(requestPokemon(nextState.params.id));
};

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer} onEnter={onEntrance(store)} >
        <Route path="pokemon/:id" component={PokemonDetailContainer} onEnter={onDetailEntrance(store)}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
