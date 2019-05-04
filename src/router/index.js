import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from '../components/Admin'
// import AdminLabAdd from '../components/Admin/AdminLabAdd'
// import AdminLabProfile from '../components/Admin/AdminLabProfile'
// import Header from './Header';
// import LabMap from './LabMap';
// import Signin from './Auth/Signin';
// import Signout from './Auth/Signout';
// import Admin from './Admin';
// import LabProfile from './Admin/LabProfile';
// import LabAdd from './Admin/LabAdd';
// import requireAuth from './requireAuth';

export default () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route path="/admin/*" component={Admin} />
      </Switch>
    </div>
  </BrowserRouter>
)
