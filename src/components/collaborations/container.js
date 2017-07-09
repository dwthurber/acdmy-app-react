import React, { Component } from 'react';
import { Segment, Grid, Icon, Header } from 'semantic-ui-react';

const style = {
  paddingTop: '15%'
}

class CollaborationContainer extends Component {
  render() {
    return (
      <Segment className="collaborationsContainer">
          <Grid centered style={style}>
            <Grid.Row textAlign='center'>
              <Header as='h2' color='grey'>Drag and Drop or Select an Option Below</Header>
              <br />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={2} textAlign='center'>
                <Icon.Group size='huge'>
                  <Icon color='grey' name='file outline' />
                  <Icon color='grey' corner name='add circle' />
                </Icon.Group>
                <br /><br /><span color='grey'>Add Asset</span>
              </Grid.Column>
              <Grid.Column width={2} textAlign='center'>
                <Icon.Group size='huge'>
                  <Icon color='grey' name='file text outline' />
                  <Icon color='grey' corner name='pencil square' />
                </Icon.Group>
                <br /><br /><span color='grey'>Collborative Document</span>
              </Grid.Column>
              <Grid.Column width={2} textAlign='center'>
                <Icon size='huge' color='grey' name='bar chart' />
                <br /><br /><span color='grey'>Poll</span>
              </Grid.Column>
              <Grid.Column width={2} textAlign='center'>
                <Icon.Group size='huge'>
                  <Icon color='grey' name='laptop' />
                  <Icon color='grey' corner name='share square' />
                </Icon.Group>
                <br /><br /><span color='grey'>Screen Share</span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>
    );
  }
}

export default CollaborationContainer;
