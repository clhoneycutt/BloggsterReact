import React, { Component } from 'react';
import { NavMenu } from './components/NavMenu.js';

export default class App extends Component {
  displayName = App.name

  state = {
    socialMediaLinks : [
      { name: 'Facebook', url: 'https://www.facebook.com/clhoneycutt', id: 1 },
      { name: 'Twitter', url: 'https://www.twitter.com/clhoneycutt', id: 2 },
      { name: 'Instagram', url: 'https://www.instagram.com/clhone', id: 3 },
    ]
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="display-1">Bloggster</h1>
        </div>
        <NavMenu socialMediaLinks={this.state.socialMediaLinks} />
      </div>
    );
  }
}
