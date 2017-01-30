/* @flow */
import React, { Component } from 'react';
import Browse from './Browse';
import Display from './Display';
import './App.css';
import { Router, Route, hashHistory } from 'react-router';

class App extends Component {
  BrowseNumbers() {
    return (
      <Browse list={'äàáâãåǎąăæāçćĉčđďðèéêëěęėēĝģğĥìíîïıīįĵķĺļłľñńňņöòóôõőøœŕřßśŝşšșťţþțüùúûűũųůūŵýÿŷźžż'.split('')}
      />
    );
  }
  BrowseLetters() {
    return <Browse list={'abcdefghijklmnopqrstuvwxyz'.split('')} />;
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={this.BrowseLetters} />
        <Route path="exotics" component={this.BrowseNumbers}>
          <Route path="/:display" component={Display} />
        </Route>
        <Route path="view/:display" component={Display} />
      </Router>
    );
  }
}
export default App;
