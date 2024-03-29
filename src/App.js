import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import Nav from './components/header/nav'
import Video from './components/video/video'
import Blocks from './components/blocks/container'
import PageDimmer from './Dimmer'

class App extends Component {
  render() {
    return (
      <div className="fullHeight">
        <Grid padded>
          <Nav />
          <Video />
        </Grid>
        <Blocks />
        <PageDimmer />
      </div>
    );
  }
}

export default App;
