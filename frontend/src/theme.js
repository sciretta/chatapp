import { createMuiTheme } from '@material-ui/core/styles'

const theme = (themeType) => ({
  palette: {
    type: themeType,
  },
  typography: {
    h1: {
      fontFamily: 'system-ui',
      fontWeight: 700,
      fontSize: '8rem',
    },
    h2: {
      fontFamily: 'system-ui',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: 'system-ui',
      fontWeight: 'bold',
      fontSize: '1.8rem',
    },
  },
})

export default (themeType) => createMuiTheme(theme(themeType))
