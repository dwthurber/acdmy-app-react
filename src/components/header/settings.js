import React, { Component } from 'react';
import { Image, Icon, Popup, Message } from 'semantic-ui-react';
import user from '../../images/user.svg';
import Help from './help'

const Notifications = {
  padding: '2em 3em',
  width: '300px',
  textAlign: 'center'
}

const Settings = () => (
  <div>
    <Popup
      trigger={<Icon link name='alarm' circular size='small' spaced='right' color='grey' />}
      on='click'
      position='bottom right'
      offset={10}
      wide
      style={Notifications}
    >
      <Popup.Content>
        You are all up to date!
      </Popup.Content>
    </Popup>

    <Help />

    <Icon link name='microphone' circular className="primaryIcon" spaced='left' />
    <Popup
      trigger={<Image href='#' src={user} height="20" avatar  />}
      on='click'
      position='bottom right'
      offset={5}
      wide
      style={Notifications}
    >
      <Popup.Content>
        Name
      </Popup.Content>
    </Popup>

  </div>
)

export default Settings
