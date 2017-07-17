import React, { Component } from 'react';
import { Image, Icon, Popup, List } from 'semantic-ui-react';
import user from '../../images/user.svg';
import Help from './help'

const Notifications = {
  padding: '2em 3em',
  width: '300px',
  textAlign: 'center'
}

const MicrophoneStyle = {
  position: 'relative',
  bottom: '4'
}

const SmallMargin = {
  marginLeft: '4'
}

const Settings = () => (
  <List horizontal verticalAlign='middle'>
    <List.Item>
      <Popup
        trigger={<Icon link name='alarm' circular size='small' color='grey' />}
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
    </List.Item>

    <List.Item  style={SmallMargin}>
      <Help />
    </List.Item>
    <List.Item style={SmallMargin}>
      <Icon link name='microphone' circular style={MicrophoneStyle} className="primaryIcon" />
    </List.Item>
    <List.Item style={SmallMargin}>
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
    </List.Item>
  </List>
)

export default Settings
