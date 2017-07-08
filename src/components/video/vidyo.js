import React, { Component } from 'react';
import { Image, Grid, Segment, Label } from 'semantic-ui-react';
import placeholder from '../../images/placeholder.svg';

const style = {
  backgroundColor: '#467495',
  color: '#fff'
}

const Vidyo = () => (
  <Grid.Column width={1} className="noPadding">

    <Segment className="noPadding" textAlign='center'>
      <Label attached='bottom' style={style}>FirstName</Label>
      <Image fluid src={placeholder} label={{ color: 'orange', as: 'a', corner: 'right', icon: 'hand paper' }}/>
    </Segment>
  </Grid.Column>
)

export default Vidyo
