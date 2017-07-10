import React, { Component } from 'react';
import { Image, Icon, Popup, Message } from 'semantic-ui-react';
import user from '../../images/user.svg';

const Settings = () => (
  <div>
    <Popup
      trigger={<Icon link name='alarm' circular size='small' color='grey' />}
      on='click'
      position='bottom right'
    >
      <Popup.Header>Notifications </Popup.Header>
      <Popup.Content>
        No notifications currently
      </Popup.Content>
    </Popup>

    <Icon name='help' circular size='small' color='grey' />
    <Image src={user} height="20" avatar spaced='left' />
  </div>
)

export default Settings
