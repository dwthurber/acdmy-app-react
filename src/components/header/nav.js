import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Brand from './brand';
import Settings from './settings'
import Actions from './actions'

const Nav = () => (
    <Grid.Row className="bordered" verticalAlign='middle' columns='equal' stretched>
      <Grid.Column textAlign='left'>
        <Brand />
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Actions />
      </Grid.Column>
      <Grid.Column textAlign='right' verticalAlign='middle'>
        <Settings />
      </Grid.Column>
    </Grid.Row>
)

export default Nav
