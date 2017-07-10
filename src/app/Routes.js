import React from 'react'
import { Route } from 'react-router-dom'
import Songs from './containers/Songs'
import Player from './containers/Player'

const Routes = () =>
  <div>
    <Route exact path="/" component={Songs} />
    <Route path="/play/:id" component={Player} />
  </div>

export default Routes
