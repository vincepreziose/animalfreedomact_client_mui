import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AdminNavigation from './AdminNavigation'
import LabList from './AdminLabList'
import styles from './styles'

class Admin extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <AdminNavigation />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <LabList />
        </main>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Admin)
