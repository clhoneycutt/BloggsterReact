import React, { Component } from 'react';
import {NavMenu} from './components/NavMenu.js';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div class="container">
        <h1 class="display-1">Bloggster</h1>
        <NavMenu />
      </div>
    );
  }
}
