import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AdminNavigation from './AdminNavigation'
import LabAdd from './AdminLabAdd'
import LabList from './AdminLabList'
import LabProfile from './AdminLabProfile'
import styles from './styles'

class Admin extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <BrowserRouter>
          <AdminNavigation />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route path="/admin" exact component={LabList} />
              <Route path="/admin/lab/add" exact component={LabAdd} />
              <Route path="/admin/lab/:id" exact component={LabProfile} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin)
