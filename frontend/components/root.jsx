import { Router, Route, hashHistory } from 'react-router';
import { requestAllPokemon } from '../actions/pokemon_actions';
import React from 'react';
import { Provider } from 'react-redux';
import { PokemonIndexContainer } from './pokemon/pokemon_index_container';

const onEntrance = (store) => () => store.dispatch(requestAllPokemon());

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route
        path="/" component={PokemonIndexContainer} onEnter={onEntrance(store)}
      />
    </Router>
  </Provider>
);

export default Root;
