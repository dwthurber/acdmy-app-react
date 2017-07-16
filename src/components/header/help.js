import React, { Component } from 'react';
import { Image, Icon, Popup, Header, Divider } from 'semantic-ui-react';

const Style = {
  padding: '2em 3em',
  width: '300px',
  textAlign: 'left'
}

const Help = () => (
  <Popup
    trigger={<Icon link name='help' circular size='small' color='grey' />}
    on='click'
    position='bottom right'
    offset={10}
    wide
    style={Style}
  >
    <Popup.Content>
      <Header as='h4'>
        <Icon.Group size='big'>
          <Icon color='grey' name='book'/>
          <Icon color='grey' corner name='help circle'  />
        </Icon.Group>
        &nbsp;&nbsp; Search Help Documents
      </Header>
      <Divider horizontal>OR</Divider>
      <Header as='h4'>
        <Icon.Group size='big'>
          <Icon color='grey' name='user circle'/>
          <Icon color='grey' corner name='commenting'  />
        </Icon.Group>
        <Header.Content>
          &nbsp;&nbsp; Chat with support
          <Header.Subheader>
            &nbsp;&nbsp; Responds in a few hours.
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Popup.Content>
  </Popup>

)

export default Help
