import React, { Component } from 'react';
import { Segment, Grid, Icon, Header } from 'semantic-ui-react';
import BlockActions from './empty'


class CollaborationContainer extends Component {
  render() {
    return (
      <Segment className="collaborationsContainer">
          <BlockActions />
      </Segment>
    );
  }
}

export default CollaborationContainer;
