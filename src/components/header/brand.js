import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import logo from '../../images/acdmyA.png';

const Brand = () => (
  <div>
    <Image src={logo} height="30" avatar />
    <span>Acdmy</span>
  </div>
)

export default Brand
