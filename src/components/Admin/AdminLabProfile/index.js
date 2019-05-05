import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Typography from '@material-ui/core/Typography'

class AdminLabProfile extends Component {
  render() {
    const { classes, labs } = this.props

    console.log('Lab Profile: ', labs)

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
