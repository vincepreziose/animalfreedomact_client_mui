import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from '../components/Admin'
import requireAuth from '../components/requireAuth';

export default () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  </BrowserRouter>
)
