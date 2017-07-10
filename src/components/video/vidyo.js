import React, { Component } from 'react';
import { Image, Grid, Segment, Label } from 'semantic-ui-react';
import placeholder from '../../images/placeholder.svg';

const style = {
  backgroundColor: '#467495',
  color: '#fff'
}

const Vidyo = () => (
  <Grid.Column width={1} className="noPadding">
    <div textAlign='center'>
      <Image fluid src={placeholder} label={{ color: 'blue', as: 'a', corner: 'right', icon: 'hand paper' }}/>
    </div>
  </Grid.Column>
)

export default Vidyo
