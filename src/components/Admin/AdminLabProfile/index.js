import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AdminNavigation from '../AdminNavigation'
import styles from '../styles'
import Typography from '@material-ui/core/Typography'
import Table from '../AdminLabList/Table'

class AdminLabProfile extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Lab Profile
        </Typography>
      </div>
    );
  }
}

AdminLabProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminLabProfile)
