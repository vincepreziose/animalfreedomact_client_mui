import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Dashboard from './DashboardDemo'
import theme from '../utils/theme'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Dashboard />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
