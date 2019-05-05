import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Table from './Table'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core'
import styles from '../styles'

class AdminLabList extends Component {
  render() {
    const { classes, labs } = this.props

    return (
      <div>
        <Typography variant="h4" gutterBottom component="h2">
          Laboratories
        </Typography>
        <div className={classes.tableContainer}>
          <Table labs={labs} />
        </div>
      </div>
    )
  }
}

AdminLabList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminLabList);
