import React, { Component } from 'react';
import { Image, Icon, Popup, Header, Divider, Item } from 'semantic-ui-react';
import UserImage from '../../images/user.svg';

const Style = {
  padding: '2em 3em',
  minWidth: '400px'
}
const ItemStyle = {
  paddingTop: '10px'
}

const User = () => (
  <Popup
    trigger={<Image href='#' src={UserImage} height="20" avatar  />}
    on='click'
    position='bottom right'
    offset={5}
    wide
    style={Style}
  >
    <Popup.Content>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={UserImage} />

          <Item.Content style={ItemStyle}>
            <Item.Header as='a'>Derek Thurber</Item.Header>
            <Item.Description>Instructor</Item.Description>
            <Item.Extra>
              <a href=''>Account Settings</a>
              <a href=''>Logout</a>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content style={ItemStyle}>
            <Item.Header as='a'>Derek Thurber</Item.Header>
            <Item.Description>Instructor</Item.Description>
            <Item.Extra>
              <a href=''>Account Settings</a>
              <a href=''>Logout</a>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Popup.Content>
  </Popup>

)

export default User
