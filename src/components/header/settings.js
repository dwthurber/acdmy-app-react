import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import user from '../../images/user.svg';

const Settings = () => (
  <div>
    <Icon name='alarm' circular size='small' color='grey' />
    <Icon name='help' circular size='small' color='grey' />
    <Image src={user} height="20" avatar spaced='left' />
  </div>
)

export default Settings
