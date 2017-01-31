/* @flow */
import React, { Component } from 'react';
import Browse from './Browse/Browse';
import Display from './Display/Display';
import './App.css';
import { Router, Route, hashHistory } from 'react-router';

export const BrowseExotics = () => (
  <Browse
    list={'äàáâãåǎąăæāçćĉčđďðèéêëěęėēĝģğĥìíîïıīįĵķĺļłľñńňņöòóôõőøœŕřßśŝşšșťţþțüùúûűũųůūŵýÿŷźžż'.split(
      '',
    )}
  />
);

export const BrowseLetters = () => (
  <Browse list={'abcdefghijklmnopqrstuvwxyz'.split('')} />
);

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={BrowseLetters} />
        <Route path="exotics" component={BrowseExotics}>
          <Route path="/:display" component={Display} />
        </Route>
        <Route path="view/:display" component={Display} />
      </Router>
    );
  }
}
export default App;
