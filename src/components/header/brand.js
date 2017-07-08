import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import logo from '../../images/acdmyA.png';

const style = {
  color: '#467495',
}

const Brand = () => (
  <div>
    <Image src={logo} height="20" avatar spaced='right' />
    <span style={style}>Virtual Classroom of the Future</span>
  </div>
)

export default Brand
