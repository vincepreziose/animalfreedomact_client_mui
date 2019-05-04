import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Admin from '../components/Admin'
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
      <Route path="/admin" exact component={Admin} />
    </div>
  </BrowserRouter>
)
