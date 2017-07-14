import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Songs from './containers/Songs'
import Player from './containers/Player'
import { PageNotFound } from './components/StatusCode'

const Routes = () =>
  <Switch>
    <Route exact path="/" component={Songs} />
    <Route path="/play/:id" component={Player} />
    <Route component={PageNotFound} />
  </Switch>

export default Routes