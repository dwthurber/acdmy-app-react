import React, { Component } from 'react';
import { Item, Image } from 'semantic-ui-react';
import logo from '../../images/acdmyA.png';

const Brand = () => (
  <Item.Group link>
    <Item>
      <Item.Image size='20px' avatar src={logo} />
      <Item.Content verticalAlign='middle'>The Classroom of the Future</Item.Content>
    </Item>
  </Item.Group>
)

export default Brand
