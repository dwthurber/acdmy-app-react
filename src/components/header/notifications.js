import React, { Component } from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const Style = {
  padding: '2em 3em',
  width: '300px',
  textAlign: 'center'
}

const Notifications = () => (
  <Popup
    trigger={<Icon link name='alarm' circular size='small' color='grey' />}
    on='click'
    position='bottom right'
    offset={10}
    wide
    style={Style}
  >
    <Popup.Content>
      You are all up to date!
    </Popup.Content>
  </Popup>

)

export default Notifications
