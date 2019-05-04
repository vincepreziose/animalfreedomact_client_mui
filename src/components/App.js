import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Admin from './Admin'
import theme from '../utils/theme'

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Admin />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
