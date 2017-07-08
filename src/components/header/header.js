import React, { Component } from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import Brand from './brand';
import Settings from './settings'
import Actions from './actions'

const Nav = () => (
  <Grid columns='equal' verticalAlign='middle' className="nav" padded>
      <Grid.Row>
        <Grid.Column verticalAlign='middle' textAlign='left'>
          <Brand />
        </Grid.Column>
        <Grid.Column verticalAlign='middle' width={12} textAlign='center'>
          <Actions />
        </Grid.Column>
        <Grid.Column verticalAlign='middle' textAlign='right'>
          <Settings />
        </Grid.Column>
      </Grid.Row>

  </Grid>
)

export default Nav
