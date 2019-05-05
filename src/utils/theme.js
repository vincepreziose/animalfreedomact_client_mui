import { createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0091e0',
    },
    // error: will use the default color
  },
})

export default theme
