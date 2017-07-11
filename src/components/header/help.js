import React, { Component } from 'react';
import { Image, Icon, Popup } from 'semantic-ui-react';

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
      <Icon bordered name='users' big />
    </Popup.Content>
  </Popup>

)

export default Help
