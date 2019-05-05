import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Typography from '@material-ui/core/Typography'

class AdminLabAdd extends Component {
  render() {
    // const { classes } = this.props

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Add Lab
        </Typography>
      </div>
    );
  }
}

AdminLabAdd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminLabAdd)
