import React, { Component } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

const style = {
  paddingTop: '10%'
}

class BlockActions extends Component {
  render() {
    return (
        <Grid centered style={style}>
          <Grid.Row textAlign='center'>
            <Header color='grey'>Drag and Drop or Select an Option Below</Header>
            <br />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2} textAlign='center'>
              <Icon.Group size='big'>
                <Icon color='grey' name='file outline' />
                <Icon color='grey' corner name='add circle' />
              </Icon.Group>
              <Header sub color='grey'>Add Asset</Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Icon.Group size='big'>
                <Icon color='grey' name='file text outline' />
                <Icon color='grey' corner name='write' />
              </Icon.Group>
              <Header sub color='grey'>Collborative Document</Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Icon.Group size='big'>
                <Icon color='grey' name='list' />
                <Icon color='grey' corner name='pie chart' />
              </Icon.Group>
              <Header sub color='grey'>Poll</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2} textAlign='center'>
              <Icon.Group size='big'>
                <Icon color='grey' name='laptop' />
                <Icon color='grey' corner name='share square' />
              </Icon.Group>
              <Header sub color='grey'>Screen Share</Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Icon.Group size='big'>
                <Icon color='grey' name='object group' />
                <Icon color='grey' corner name='hand outline up' />
              </Icon.Group>
              <Header sub color='grey'>Whiteboard</Header>
            </Grid.Column>
            <Grid.Column width={2} textAlign='center'>
              <Icon.Group size='big'>
                <Icon color='grey' name='chat' />
                <Icon color='grey' corner name='commenting outline' />
              </Icon.Group>
              <Header sub color='grey'>Chat</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default BlockActions;
