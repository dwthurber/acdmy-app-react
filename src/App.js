import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import Nav from './components/header/nav'
import Video from './components/video/video'

class App extends Component {
  render() {
    return (
      <Grid padded>
        <Nav />
        <Video />
      </Grid>
    );
  }
}

export default App;
