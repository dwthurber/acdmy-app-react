import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Brand from './brand';

const Nav = () => (
  <Grid columns='equal' verticalAlign='middle' padded>
      <Grid.Row>
        <Grid.Column textAlign='left'>
          <Brand />
        </Grid.Column>
        <Grid.Column width={12} textAlign='center'>
          <Icon name='users' />
        </Grid.Column>
        <Grid.Column textAlign='right'>
          <Icon name='users' />
        </Grid.Column>
      </Grid.Row>

  </Grid>
)

export default Nav
