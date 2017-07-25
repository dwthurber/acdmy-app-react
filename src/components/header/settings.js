import React, { Component } from 'react';
import { Icon, List } from 'semantic-ui-react';
import Help from './help'
import Notifications from './notifications'
import User from './user'

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
      <Notifications />
    </List.Item>

    <List.Item  style={SmallMargin}>
      <Help />
    </List.Item>

    <List.Item style={SmallMargin}>
      <Icon link name='microphone' circular style={MicrophoneStyle} className="primaryIcon" />
    </List.Item>

    <List.Item style={SmallMargin}>
      <User />
    </List.Item>
  </List>
)

export default Settings
