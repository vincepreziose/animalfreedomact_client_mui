import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import AdminNavigation from './AdminNavigation'
import LabAdd from './AdminLabAdd'
import LabList from './AdminLabList'
import LabProfile from './AdminLabProfile'
import * as actions from '../../actions'
import styles from './styles'

class Admin extends Component {
  async componentDidMount() {
    await this.props.getLabs()
  }

  render() {
    const { classes, labs } = this.props

    return (
      <div className={classes.root}>
        <BrowserRouter>
          <AdminNavigation />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
              <Route
                path="/admin"
                exact
                render={() => <LabList labs={labs} /> }
              />
              <Route
                path="/admin/lab/add"
                exact
                component={LabAdd}
              />
              <Route
                path="/admin/lab/:id"
                exact
                render={() => <LabProfile labs={labs} /> }
              />
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

const mapStateToProps = state => ({
  labs: state.map.labs,
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions)
)(Admin)
